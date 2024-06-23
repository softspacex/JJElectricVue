<template>
  <default-layout></default-layout>

  <article>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="textsob-1">
            <h1 class="text-uppercase formatted-text title-sob">
              Sobre <br />
              Nosotros <br />
            </h1>
            <p class="title-sob2 formatted-text-2 title-sob-2">Desde 1996</p>
          </div>
        </div>
        <div class="col">
          <div class="sob-1">
            <img src="/nosotros-1.jpeg" alt="" class="img-nosotros">
          </div>
        </div>
        <div class="col">
          <div class="sob-2">
            <img src="/nosotros-2.jpeg" alt="" class="img-nosotros-2">
          </div>
        </div>
      </div>
    </div>
  </article>

  <article>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="textsob">
            <p class="text-start textsob">JJ Electric nace con el objetivo de proveer materiales eléctricos. Contamos
              con
              más de 27 Años en el mercado, que nos nermiten tener un conocimiento
              profundo de los productos y marcas que comercializamos, para Aplicarlo en
              deneficio de todos nuestros clientes.</p>
            <p class="text-start textsob">Somos más que importadores eléctricos, nos enfocamos en dar doluciones al
              constructor, electricista, ingeniero, comerciante y público en general, así
              como a las más grandes gmpresas distribuidoras y generadoras de energía de
              la República Dominicana. Por eso somos los #1 En materiales eléctricos.</p>
            <p class="text-start textsob">En la actualidad, contamos con dos tiendas para ofrecer un servicio
              personalizado, una estructura de más de 5,000 metros cuadrados de
              construcción y más de 50 colaboradores, que sumado a la alta calidad de
              nuestros productos y Sservicios, nos han llevado a ser los preferidos por
              nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </article>

  <article>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h2 class="text-start text-uppercase title-sub-2">Misión</h2>
          <p class="text-start text-sob-2">Brindar una experiencia de compra
            única, orientada a la calidad en
            nuestros productos y servicio al
            cliente.</p>
          <p class="text-start text-sob-2">Y a su vez, crear oportunidades de
            desarrollo para nuestro personal y la
            comunidad.</p>
        </div>
        <div class="col">
          <h2 class="text-start text-uppercase title-sub-2">Visión</h2>
          <p class="text-start text-sob-2">Ser la empresa reconocida y
            preferida al momento de elegir
            comprar materiales eléctricos,
            manteniendo nuestro liderazgo en la
            República Dominicana.</p>
        </div>


      </div>
    </div>
  </article>


  <article class="valores">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <h2 class="text-start text-uppercase title-sub-2">Valores</h2>
          <p class="bullet-paragraph text-start text-sob-2">Honestidad</p>
          <p class="bullet-paragraph text-start text-sob-2">Innovación</p>
          <p class="bullet-paragraph text-start text-sob-2">Compromiso</p>
          <p class="bullet-paragraph text-start text-sob-2">Seguridad</p>
          <p class="bullet-paragraph text-start text-sob-2">Servicio Al Cliente
            Excelencia</p>
        </div>
        <div class="col">
          <img src="/nosotros-3.jpeg" alt="" class="img-nosotros-3">
        </div>
      </div>
    </div>
  </article>

  <article>
    <the-footer></the-footer>
  </article>
</template>

<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<style scoped>
.textsob-1 {
  margin-top: 12rem;
}

.title-sob {
  font-size: 6rem;
}

.formatted-text {
  text-align: left;
  color: var(--dark-grey);
}

.title-sob-2 {
  font-size: 2rem;
}

.formatted-text-2 {
  text-align: left;
  color: var(--middle-grey);
}

.img-nosotros {
  width: 70%;
  border-radius: 1rem;
}

.img-nosotros-2 {
  width: 70%;
  border-radius: 1rem;
}

.sob-1 {
  margin-top: 5rem;
}

.sob-2 {
  margin-top: 10rem;
}
.title-sub-2{
  position: relative;
  font-size: 4rem;
  color: var(--dark-grey);
  padding-bottom: 10px;
}
.title-sub-2::after{
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200px; /* Cambia este valor para ajustar el largo de la línea */
  height: 3px; /* Cambia este valor para ajustar el grosor de la línea */
  background-color: var(--dark-grey); /* Cambia este valor para ajustar el color de la línea */
}
.textsob {
  font-size: 2rem;
  color: var(--middle-grey);
}

.text-sob-2 {
  font-size: 2rem;
  color: var(--middle-grey);
}

.img-nosotros-3 {
  width: 100%;
  border-radius: 2rem;
}
.valores{
  margin-top: -9rem;
}

.bullet-paragraph::before {
  content: "•";
 
  color: black; /* Puedes cambiar el color si lo deseas */
  display: inline-block;
  width: 1.5em;
}
/* Media Queries */
@media (max-width: 768px) {
  .row {
    display: flex;
    flex-direction: column;
  }

  .col {
    width: 100%;
    margin-bottom: 2rem;
  }

  .textsob-1,
  .sob-1,
  .sob-2 {
    margin-top: 2rem;
  }

  .title-sob {
    font-size: 3rem;
  }

  .title-sob-2 {
    font-size: 1.5rem;
  }

  .img-nosotros,
  .img-nosotros-2 {
    width: 50%;
  }
}
</style>
