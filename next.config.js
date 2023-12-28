module.exports = {
  // output: 'export',
  // distDir: 'build',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        // fs: false,
        // path: false,
        // dns: false,
        // net: false,
        // tls: false,
        // child_process: false,
        // readline: false,
        // snappy: false,
        // aws4: false,
        // mongodb: false,

      }
    }

    return config;
  },
  // resolve: {
  //   preferRelative: true,
  // },
  // webpack(config) {
  //   config.module.rules.push({
  //     resolve: {
  //       preferRelative: true,
  //     },
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ["@svgr/webpack"],
  //   });
  //
  //   return config;
  // },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
