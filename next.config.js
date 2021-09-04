const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },

  images: {
        domains: [
            "links.papareact.com",
            "platform-lookaside.fbsbx.com",
            "firebasestorage.googleapis.com",
            "lh3.googleusercontent.com",
        ],
    },
});
