<template>
  <default-layout></default-layout>

  <article>
    <div class="image-container">
    <img src="/cotizar-1.jpeg" alt="Cotiza en Línea">
    <div class="overlay">
      <h1>COTIZA EN LÍNEA</h1>
      <p>Por favor completa el siguiente formulario para enviarnos tu cotización. Te responderemos en el menor tiempo posible.</p>
      <p>¡Gracias por confiar en nosotros!</p>
    </div>
  </div>
  </article>

   <div class="cotizar-form-container">
    <article class="cotizar-form">
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="NOMBRE/EMPRESA">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="RNC">
      </div>
      <div class="mb-3">
        <input type="email" class="form-control" placeholder="CORREO">
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="TELÉFONO">
      </div>
      <div class="mb-3">
        <textarea class="form-control" rows="3" placeholder="MENSAJE"></textarea>
      </div>
    </article>
  </div>



  <article>
    <the-footer></the-footer>
  </article>
</template>

<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<style scoped>
 .image-container {
      position: relative;
      text-align: center;
      color: white;
    }

    .image-container img {
      width: 100%;
      height: 558px;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 139, 0.5); /* Azul con transparencia */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .overlay h1 {
      font-size: 5em;
      margin: 0;
    }

    .overlay p {
      font-size: 2.0em;
    }
    .cotizar-form-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 50vh; /* Altura mínima para centrar verticalmente */
    }
    .cotizar-form{
      width: 40%;
      max-width: 500px;
      padding: 20px;  
      border-radius: 5px;
     
    }
</style>
