const path = require("path");

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap'},
      ]
    }
  },
  devtools: { enabled: true },
  css: ['./assets/styles/css/reset.css','./assets/styles/css/fonts.css'],
  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  },
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/styles/scss/patterns.scss";',
            },
        },
    },
},
});
