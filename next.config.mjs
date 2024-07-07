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
export function webpack(config, options) {
  config.plugins.push(
    new NextFederationPlugin({
      name: "mf-missions-pages",
      filename: "static/chunks/remoteEntry.js",
      dts: false,
      exposes: {
        "./home": "./pages/index.tsx",
        "./about": "./pages/about.tsx",
        "./pages-map": "./pages",
      },
      remotes: remotes(options.isServer),
      shared: {},
      extraOptions: {
        exposePages: true,
      },
    })
  );

  return config;
}
