<template>
  <div>
    <header class="header">
      <div class="header-container">
        <div class="logo">
          <h1>Gold shop</h1>
        </div>
        <nav class="nav">
          <NuxtLink to="/">Главная</NuxtLink>
          <NuxtLink to="/register">Регистрация</NuxtLink>
          <NuxtLink to="/login">Вход</NuxtLink>
        </nav>
        <div class="empty"></div>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <p>© 2024 Моя компания</p>
    </footer>
  </div>
</template>

<style scoped>
/* Убираем возможные дефолтные отступы */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  background: #333;
  padding: 1rem;
  width: 100%;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.logo {
  flex: 1; /* занимает 1 часть */
  text-align: left;
}

.logo h1 {
  color: white;
  font-size: 1.8rem;
  margin: 0;
}

.nav {
  flex: 0 0 auto; /* не растягивается, занимает ширину по контенту */
  display: flex;
  gap: 1.5rem;
  /* Центрирование относительно всей строки – если логотип и пустой блок равны */
}

.nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav a:hover {
  text-decoration: underline;
}

.empty {
  flex: 1; /* такой же как у логотипа, чтобы навигация оказалась по центру */
}
</style>