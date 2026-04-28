export default defineNuxtConfig({
  srcDir: 'src/', 

  dir: {
    layouts: 'app/layouts',
  },

  devtools: { 
    enabled: true,
    vscode: {}
  },
  

  devServer: {
    port: 4000
  },
  
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000/api'
    }
  },
  modules: [
    '@pinia/nuxt'
  ],

  alias: {
    '@': './src',
    '@app': './src/app',
    '@pages': './src/pages',
    '@widgets': './src/widgets',
    '@features': './src/features',
    '@entities': './src/entities',
    '@shared': './src/shared',
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    }
  },
  css: [
    '~/assets/styles/global.css'
  ]
})