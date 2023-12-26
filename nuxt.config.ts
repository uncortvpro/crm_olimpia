// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
    }
  },
  modules: [
    '@nuxt/ui', "nuxt-svgo", '@pinia/nuxt', '@vueuse/nuxt','@vee-validate/nuxt',
  ],
  ssr: false,
  css: ['~/assets/css/fonts.css'],
  alias: {
    "@img": "./assets/img",
  },
  svgo: {
    autoImportPath: "./assets/img/svg/",
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VForm',
      Field: 'VField',
      FieldArray: 'VFieldArray',
      ErrorMessage: 'VErrorMessage',
    },
  },
  colorMode: {
    preference: "light",
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  app: {
    head: {
      title: 'Olimpia',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
    },
    // buildAssetsDir: 'assets',
  }
})
