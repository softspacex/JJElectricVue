<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <h3>JJ <span>Electric, S.A. Suplidores Eléctricos</span></h3>

      <p class="footer-links">
        <RouterLink><p>Ubicación |</p>  </RouterLink>
        
        <RouterLink>Horarios |</RouterLink>
        
        <RouterLink>Vacantes |</RouterLink>
        
        <RouterLink>Nosotros</RouterLink>
      </p>
    </div>

    <div class="footer-center">
      <div>
        <i class="fa-solid fa-map-location"></i>
        <p>C. Manuel Ubaldo Gómez #7 | C. Barahona #284</p>
      </div>
      <div>
        <i class="fa-solid fa-phone"></i>
        <p>(809) 688-6166</p>
      </div>
      <div>
        <i class="fa-brands fa-whatsapp"></i>
        <p>(809) 594-7632 | (829) 640-0039</p>
      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p class="email">jjelectric@claro.net.do</p>
      </div>
    </div>

    <!-- <div class="footer-right">
      <p class="footer-company-about">
        <span>Sobre Nosotros</span>
        <strong>JJ Electric</strong> Nace Con El Objetivo De Proveer Materiales
        Eléctricos. Contamos Con Más De 27 Años En El Mercado, Que Nos Permiten
        Tener Un Conocimiento Profundo De Los Productos Y Marcas Que
        Comercializamos, Para Aplicarlo En Beneficio De Todos Nuestros Clientes.
      </p>
    </div> -->

    <div class="footer-icons">
      <p class="footer-links">¡Síguenos en las redes!</p>
      <a
        href="https://www.instagram.com/jjelectricrd?igsh=MTBubGp4Ym93MjNjYg=="
        target="_blank"
        ><i class="fa-brands fa-instagram"></i
      ></a>
      <a
        href="https://www.facebook.com/jjelectricrd?mibextid=kFxxJD"
        target="_blank"
        ><i class="fa-brands fa-facebook-f"></i
      ></a>
      <!-- <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a> -->
    </div>

    <article>
      <div class="responsive-line"></div>
    </article>

    <article class="footer-final">
      <div class="d-flex justify-content-between">
        <p class="footer-reservados">
          <i class="fa-regular fa-copyright"></i
          ><span>{{ currentYear }}</span> JJ Electric S.A. Todos los derechos
          reservados.
        </p>

        <p class="footer-links">
          <RouterLink>Terms of use</RouterLink>
          |
          <RouterLink>Privacy Environmental Policy </RouterLink>
        </p>
      </div>
    </article>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const currentYear = ref("");

currentYear.value = new Date().getFullYear();
</script>

<style scoped>
.footer-distributed {
  background-color: var(--dark-blue);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 50px 50px 60px 50px;
  margin-top: 26rem;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center {
  display: inline-block;
  vertical-align: top;
}
.footer-center {
  margin-top: 3rem;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 30%;
}

.footer-distributed h3 {
  color: #ffffff;
  font-size: 36px;
  margin: 0;
}

.footer-distributed h3 span {
  color: #ffffff;
}

/* Footer links */

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */
/* 
.footer-distributed .footer-center {
  width: 35%;
} */

.footer-distributed .footer-center i {
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center .email {
  text-transform: lowercase;
}
.footer-distributed .footer-center p a {
  color: #e0ac1c;
  text-decoration: none;
}

/* Footer Right */

/* .footer-distributed .footer-right {
  width: 30%;
  margin-top: 2rem;
  margin-left: 2rem;
} */

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #ffffff;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;

  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-right: 3px;
  margin-bottom: 5px;
}

.footer-distributed .footer-icons a:hover {
  background-color: #3f71ea;
}

.footer-links a:hover {
  color: #3f71ea;
}

.responsive-line {
  width: 100%; /* Se ajusta al 100% del contenedor */
  height: 2px; /* Altura de la línea */
  background-color: #fff; /* Color de la línea */
  margin: 10px 0; /* Margen superior e inferior */
}
.footer-reservados {
  color: white;
  margin-top: 27px;
}

@media (max-width: 880px) {
  .footer-distributed .footer-left,
  .footer-distributed .footer-center {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }
  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>
