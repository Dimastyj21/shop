export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // 👇 Добавьте эту секцию
  devServer: {
    port: 4000
  },
  
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000/api'
    }
  }
})