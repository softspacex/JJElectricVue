<template>
  <default-layout></default-layout>

  <carousel></carousel>

  <div class="container">
    <div class="row justify-content-center">
      <card-image
        class="col-12 col-sm-6 col-md-4"
        url="/ImgCard-1.jpg"
        pdfUrl="https://drive.google.com/file/d/18hLrwT2O2a990Ic-fuyEh4r1k2hM6qfA/view?usp=sharing"
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-4"
        url="/ImgCard-6.jpg"
        pdfUrl="https://drive.google.com/file/d/13gRnjOfjyoxHScH4VzHVLHTfcdhh4689/view?usp=sharing"
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-4"
        url="/ImgCard-2.jpg"
        pdfUrl=""
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-4"
        url="/ImgCard-3.jpg"
        pdfUrl=""
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-4"
        url="/ImgCard-4.jpg"
        pdfUrl="https://drive.google.com/file/d/1OQH_OWwaWGsepAZhZP9o5PgTBKt5MDIG/view?usp=sharing"
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-4"
        url="/ImgCard-5.jpg"
        pdfUrl="https://drive.google.com/file/d/1Qb00LxZZYOrcRGYLeUCNyjlZadenRgIN/view?usp=sharing"
      ></card-image>
    </div>
  </div>

  <div class="text-center mt-custom">
    <h1 class="text-uppercase t-h1">Ofertas Electrizantes</h1>
    <H3 class="text-uppercase t-h3">váLido hasta el 15 de junio</H3>
    <p class="text-uppercase t-p">Precio no incluye itebis</p>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <card-image
        class="col-12 col-sm-6 col-md-3 img-card"
        url="/Oferta-1.jpg"
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-3 img-card-2"
        url="/Oferta-2.jpg"
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-3"
        url="/Oferta-3.jpg"
      ></card-image>
      <card-image
        class="col-12 col-sm-6 col-md-3"
        url="/Oferta-4.jpg"
      ></card-image>
    </div>
  </div>

  <div class="container">
    <cotizar-banner url="/cotiza.jpg"></cotizar-banner>
  </div>

  <div class="text-center">
    <h1 class="text-uppercase t-h1 mt-custom-2">
      Distribuidores Autorizados De
    </h1>
  </div>
</template>

<script setup>
import CardImage from "../components/CardImage.vue";
import Carousel from "../components/Carousel.vue";
import CotizarBanner from "../components/CotizarBanner.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<style>
.container {
  margin-top: 13rem;
  cursor: pointer;
}

.mt-custom {
  margin-top: 14rem;
  margin-bottom: -8rem;
  color: var(--dark-blue);
}
.mt-custom-2 {
  margin-top: 14rem;
  margin-bottom: -8rem;
  color: var(--dark-grey);
}

.t-h1 {
  font-size: 5rem;
}
.t-h3 {
  font-size: 3rem;
}
.t-p {
  font-size: 15px;
  opacity: 0.8;
}
.img-card {
  margin-top: 3rem;
}
.img-card-2 {
  margin-top: 1rem;
}
.text-center {
  font-size: 6rem;
  color: var(--dark-blue);
}
</style>
