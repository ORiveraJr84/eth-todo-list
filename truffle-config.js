module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
  },
  solc: {
    optimizer: {
      enabled: true, // Default: false
      runs: 200, // Default: 200
    },
  },
};
