<template>
    <section class="home" id="home">
      <div class="swiper mySwiper home-slider">
        <div class="swiper-wrapper wrapper">
          <div class="swiper-slide slide">
            <div class="content">
                <p>Experiencia en el área</p>
                <h3 class="title-car-1">Más de 25 años trabajando para ti</h3>
            </div>
            <div class="image">
              <img src="/Carousel-1.jpeg" alt="Nuestro edificio">
            </div>
          </div>
  
          <div class="swiper-slide slide">
            <div class="content">
              <h3 class="title-car-2">Todo Para Tu Proyecto</h3>
              <p>Calidad Garantizada</p>
            </div>
            <div class="image">
              <img src="/Carousel-2.jpeg" alt="Nuestros Productos">
            </div>
          </div>
  
          <div class="swiper-slide slide">
            <div class="content">
              <h3 class="title-car-3">Un equipo bien capacitado</h3>
              <p>Listo para servirte</p>
            </div>
            <div class="image">
              <img src="/Carousel-3.jpeg" alt="Un equipo bien capacitado">
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  </template>
  
<script setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    new Swiper('.home-slider', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
  });
</script>

<style scoped>
.home .home-slider .slide {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: -10rem;
}

.home .home-slider .slide .content {
  flex: 1 1 45rem;
}

.home .home-slider .slide .image {
  flex: 1 1 45rem;
}

.home .home-slider .slide .image img {
  width: 100%;
  border-radius: 5%;
  height: 68vh;
}

.home .home-slider .slide .content span {
  color: var(--dark-blue);
  font-size: 2.5rem;
}

/* .home .home-slider .slide .content h3 {
  color: var(--dark-grey);
  font-size: 7rem;
} */

.title-car-1{
    color: var(--dark-blue);
    font-size: 7rem;
}

.title-car-2{
    color: var(--dark-blue);
    font-size: 7rem;
    text-transform: uppercase;
}

.title-car-3{
    color: var(--dark-grey);
    font-size: 7rem;
    text-transform: uppercase;
}

.home .home-slider .slide .content p {
  color: var(--middle-grey);
  font-size: 2.5rem;
  padding: 0.5rem 0;
  line-height: 1.5;
  text-transform: uppercase;
}

.swiper-pagination-bullet-active {
  background: var(--light-yellow);
  margin-top: 5rem;
}

</style>