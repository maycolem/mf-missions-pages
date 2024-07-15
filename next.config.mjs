import NextFederationPlugin from "@module-federation/nextjs-mf";
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    checkout: `checkout@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  env: {
    REACT_APP_COMPANY: process.env.REACT_APP_COMPANY,
    REACT_APP_CURRENCY: process.env.REACT_APP_CURRENCY,
    REACT_APP_LOCAL_API: process.env.REACT_APP_LOCAL_API,
    REACT_APP_WEB_BASE: process.env.REACT_APP_WEB_BASE,
    REACT_APP_CALIMACO_BASE: process.env.REACT_APP_CALIMACO_BASE,
    REACT_APP_CALIMACO_API_BASE: process.env.REACT_APP_CALIMACO_API_BASE,
    REACT_APP_CALIMACO_API_BASE_AUTH:
      process.env.REACT_APP_CALIMACO_API_BASE_AUTH,
    REACT_APP_WEB_CMS: process.env.REACT_APP_WEB_CMS,
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "mf-missions-pages",
        filename: "static/chunks/remoteEntry.js",
        dts: false,
        exposes: {
          "./home": "./pages/index.tsx",
          "./pages-map": "./pages-map.js",
        },
        remotes: remotes(isServer),
        shared: {
          // react: {
          //   singleton: true,
          //   requiredVersion: "^18.0.0",
          // },
          // "react-dom": {
          //   singleton: true,
          //   requiredVersion: "^18.0.0",
          // },
        },
        extraOptions: {
          // exposePages: true,
        },
      })
    );

    return config;
  },
};

// export function webpack(config, options) {
//   config.plugins.push(
//     new NextFederationPlugin({
//       name: "mf-missions-pages",
//       filename: "static/chunks/remoteEntry.js",
//       dts: false,
//       exposes: {
//         "./home": "./pages/index.tsx",
//         "./about": "./pages/about.tsx",
//         "./pages-map": "./pages-map.js",
//       },
//       remotes: remotes(options.isServer),
//       shared: {},
//       extraOptions: {
//         exposePages: true,
//       },
//     })
//   );

//   return config;
// }

export default nextConfig;
