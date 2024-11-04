const instances = 1;
const basePort = 5000;

module.exports = {
  apps: Array.from({ length: instances }, (_, index) => ({
    name: `e-web-${index + 1}`,
    script: "./server.js",
    instances: 1,
    node_args: `--max-old-space-size=1024`,
    env: {
      PORT: basePort + index,
    },
  })),
};
