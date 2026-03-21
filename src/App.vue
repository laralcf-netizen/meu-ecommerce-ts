<template>
  <div class="app">
    <!-- Header aparece em todas as páginas -->
    <Header />

    <!-- Aqui é onde cada página vai aparecer -->
    <main class="main-content">
      <RouterView />
    </main>

    <!-- Footer aparece em todas as páginas -->
    <footer class="footer">
      <p>© 2024 MyShop. Feito com ❤️</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<style>
/* CSS global — vale para o projeto inteiro */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background-color: #1a1a2e;
  color: white;
  text-align: center;
  padding: 16px;
  font-size: 0.9rem;
}
</style>