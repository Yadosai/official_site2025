// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/main.scss" as *;',
        }
      }
    }
  },

  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      'Train+One': true,
      'Kaisei+HarunoUmi': true,
    },
  },

  compatibilityDate: '2024-11-11',

  app: {
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-2J7M670K69",
          async: true
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2J7M670K69');
          `
        }
      ]
    }
  }
});
