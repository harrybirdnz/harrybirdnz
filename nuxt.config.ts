// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      theme: {
        extend: {
          boxShadow: {
            '3xl': '0 0 15px 15px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
});
