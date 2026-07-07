import type { Core } from "@strapi/strapi";

const config: Core.Config.Middlewares = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "4mb",
      jsonLimit: "4mb",
      textLimit: "4mb",
      formidable: {
        maxFileSize: 4 * 1024 * 1024,
      },
    },
  },
  "strapi::session",
  {
    name: "strapi::favicon",
    config: {
      path: "public/favicon.ico",
    },
  },
  "strapi::public",
];

export default config;
