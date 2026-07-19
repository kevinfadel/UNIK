const { spawn } = require('child_process');
const ngrok = require('@ngrok/ngrok');
const { loadEnvConfig } = require('@next/env');

// Load environment variables from .env / .env.local
loadEnvConfig(process.cwd());

const token = process.env.NGROK_AUTHTOKEN;
const port = process.env.PORT || 3000;

if (!token) {
  console.error("Error: NGROK_AUTHTOKEN is not defined in your environment or .env.local file.");
  process.exit(1);
}

// Check if we want to run in production "start" mode or development "dev" mode
const isProd = process.argv.includes('--start');
const command = isProd ? 'start' : 'dev';

console.log(`Starting Next.js in ${command} mode...`);

// Spawn Next.js process and inherit stdio so logs are printed directly to the console
const nextProcess = spawn('npx', ['next', command], {
  shell: true,
  stdio: 'inherit'
});

nextProcess.on('error', (err) => {
  console.error('Failed to start Next.js process:', err);
  process.exit(1);
});

// Start the ngrok tunnel
(async function() {
  try {
    // Wait 2 seconds to give Next.js time to bind to the port
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("\nStarting ngrok tunnel...");
    const listener = await ngrok.forward({
      addr: port,
      authtoken: token,
    });
    
    console.log(`\n🚀 Tunnel online!`);
    console.log(`🔗 Public URL: ${listener.url()}`);
    console.log(`👉 Forwarding to: http://localhost:${port}\n`);
  } catch (err) {
    console.error("Failed to start ngrok tunnel:", err);
    nextProcess.kill();
    process.exit(1);
  }
})();

// Ensure cleanup of Next.js when this script is stopped
process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
  process.exit(0);
});
process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
  process.exit(0);
});
