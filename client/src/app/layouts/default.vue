<template>
  <div>
    <header>
      <nav>
        <h1>Мой интернет-магазин</h1>
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/register">Регистрация</NuxtLink>
        <NuxtLink to="/login">Вход</NuxtLink>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>© 2024 Моя компания</p>
    </footer>
  </div>
</template>

<style scoped>
header { background: #333; color: white; padding: 1rem; }
nav a { color: white; margin-right: 1rem; }
main { padding: 2rem; min-height: 70vh; }
footer { background: #eee; padding: 1rem; text-align: center; }
</style>