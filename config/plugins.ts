import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 10000,
      amountLimit: 1000000,
      defaultLimit: 1000,
      maxLimit: 100000,
      apolloServer: {
        tracing: false,
        introspection: true,
      },
    },
  },

  upload: {
    enabled: true,
    config: {
      sizeLimit: 4 * 1024 * 1024,
    },
  },
});

export default config;
