const ngrok = require('@ngrok/ngrok');
const { loadEnvConfig } = require('@next/env');

// Load environment variables from Next.js config files (.env, .env.local, etc.)
loadEnvConfig(process.cwd());

const token = process.env.NGROK_AUTHTOKEN;
const port = process.env.PORT || 3000;

if (!token) {
  console.error("Error: NGROK_AUTHTOKEN is not defined in your environment or .env.local file.");
  process.exit(1);
}

(async function() {
  try {
    console.log("Starting ngrok tunnel...");
    const listener = await ngrok.forward({
      addr: port,
      authtoken: token,
    });
    console.log(`\n🚀 Ngrok tunnel created successfully!`);
    console.log(`🔗 Public URL: ${listener.url()}`);
    console.log(`👉 Forwarding to: http://localhost:${port}\n`);
    console.log("Press Ctrl+C to stop the tunnel.");
  } catch (err) {
    console.error("Failed to start ngrok tunnel:", err);
    process.exit(1);
  }
})();
