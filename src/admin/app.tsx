import type { StrapiApp } from "@strapi/strapi/admin";
import favicon from "./extensions/favicon.svg";

export default {
  config: {
    locales: [],
    head: {
      title: "Tunikabond Admin",
      favicon,
    },

    translations: {
      en: {
        "Auth.form.welcome.title": "Tunikabond Admin",
        "Auth.form.welcome.subtitle": "Login to your Tunikabond admin panel.",
      },
    },
  },

  bootstrap(app: StrapiApp) {
    const updateTitle = () => {
      const path = window.location.pathname;

      if (path.includes("/admin/auth")) {
        document.title = "Tunikabond Admin";
        return;
      }

      if (document.title.includes(" | Strapi")) {
        document.title = document.title.replace(" | Strapi", "");
      }
    };

    updateTitle();

    const titleElement = document.querySelector("title");
    if (titleElement) {
      const observer = new MutationObserver(updateTitle);
      observer.observe(titleElement, { childList: true });
    }

    console.log(app);
  },
};