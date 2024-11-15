// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
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
};