<template>
  <header>
    <img class="logo" src="/LogoJJ.png" alt="logo">
    <nav class="navbar">
      <RouterLink to="/" class="nav-link">Inicio</RouterLink>
      <RouterLink to="/productos" class="nav-link">Productos</RouterLink>
      <RouterLink to="/cotizar" class="nav-link">Cotizar</RouterLink>
      <RouterLink to="/sobrenosotros" class="nav-link">Nosotros</RouterLink>
    </nav>
    <div class="icons">
      <i class="fas fa-bars" id="menu-bars"></i>
      <a href="https://www.instagram.com/jjelectricrd?igsh=MTBubGp4Ym93MjNjYg==" target="_blank" class="fa-brands fa-instagram"></a>
      <a href="https://www.facebook.com/jjelectricrd?mibextid=kFxxJD" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="https://wa.link/g3494v" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const menu = document.querySelector("#menu-bars");
  const navbar = document.querySelector(".navbar");

  if (menu && navbar) {
    menu.addEventListener('click', () => {
      menu.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    });
  }
});
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 1rem 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: var(--box-shadow);
  height: 11rem;
}

.logo {
  width: 30%;
}

.navbar {
  display: flex;
  gap: 1rem;
}

.nav-link {
  font-size: 2rem;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  color: var(--dark-grey);
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.nav-link:hover {
  background: var(--dark-blue);
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-link.router-link-active {
  background: var(--dark-blue);
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

header .icons i,
header .icons a {
  cursor: pointer;
  margin-left: 0.5rem;
  height: 4.5rem;
  line-height: 4.5rem;
  width: 4.5rem;
  text-align: center;
  font-size: 2.5rem;
  color: var(--dark-grey);
  border-radius: 50%;
  text-decoration: none;
}

header .icons i:hover,
header .icons a:hover {
  color: #fff;
  background: var(--dark-blue);
  transform: rotate(360deg);
}

header .icons #menu-bars {
  display: none;
}

@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 768px) {
  header .icons #menu-bars {
    display: inline-block;
  }
  header .navbar {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 0.1rem solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  .titulo-banner {
    font-size: 30px !important;
  }
  header .navbar.active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  header .navbar a {
    display: block;
    padding: 1.5rem;
    margin: 1rem;
    font-size: 2rem;
    background: #eee;
  }

  .logo {
    width: 30%;
  }
}

@media (max-width: 991px) {
  header {
    padding: 1rem;
  }
}
</style>
