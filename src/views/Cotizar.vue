<template>
  <default-layout></default-layout>

  <article>
    <div class="image-container">
      <img src="/cotizar-1.jpeg" alt="Cotiza en Línea" />
      <div class="overlay">
        <h1>COTIZA EN LÍNEA</h1>
        <p>
          Por favor completa el siguiente formulario para enviarnos tu
          cotización. Te responderemos en el menor tiempo posible.
        </p>
        <p>¡Gracias por confiar en nosotros!</p>
      </div>
    </div>
  </article>
  <form action="https://formspree.io/f/mvoedeeg" method="POST" target="_blank">
    <div class="cotizar-form-container">
      <article class="cotizar-form">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="NOMBRE/EMPRESA"
            name="NOMBRE/EMPRESA"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="RNC"
            name="RNC"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="CORREO"
            name="CORREO"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="TELÉFONO"
            name="TELÉFONO"
          />
        </div>
        <div class="mb-3">
          <textarea
            name="MENSAJE"
            class="form-control"
            rows="3"
            placeholder="MENSAJE"
          ></textarea>
        </div>
        <div class="button-container col-auto">
          <button type="submit" class="btn mb-3 btn-send">Enviar</button>
        </div>
      </article>
    </div>
  </form>

  <article>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="text-start text-info">Correo Electrónico:</h2>
          <p class="text-start text-info">jjelectric@claro.net.do</p>
          <h2 class="text-start text-info">¿Necesitas ayuda? Llámanos</h2>
          <p class="text-start text-info">809-688-6166</p>
        </div>
      </div>
    </div>
  </article>
  <article>
    <div class="footer">
      <the-footer></the-footer>
    </div>
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
  font-size: 2em;
}
.cotizar-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh; /* Altura mínima para centrar verticalmente */
}
.cotizar-form {
  display: flex;
  flex-direction: column;
  width: 40%;
  max-width: 500px;
  padding: 20px;
}
.form-control {
  width: 100%;
  line-height: 4.5;
  background: var(--dark-blue);
  font-size: 14px;
  color: white;
}
/* Selecciona los inputs dentro de .cotizar-form-container y cambia el color del placeholder a blanco */
.cotizar-form-container .form-control::placeholder {
  color: white;
}

/* Asegúrate de que los navegadores con soporte diferente también cambien el color del placeholder */
.cotizar-form-container .form-control:-ms-input-placeholder {
  color: white;
}

.cotizar-form-container .form-control::-ms-input-placeholder {
  color: white;
}

.cotizar-form-container .form-control::-webkit-input-placeholder {
  color: white;
}
.button-container {
  display: flex;
  justify-content: flex-end;
}
.btn-send {
  font-size: 14px;
  width: 24%;
  background: var(--dark-blue);
  color: white;
  border-radius: 2rem;
}
.text-info {
  font-size: 25px;
  color: var(--dark-blue) !important;
}
.footer {
  margin-top: -20rem !important;
}

@media (max-width: 768px) {
  .form-control {
    width: 124%;
  }
  .btn-send {
    font-size: 14px;
    width: 38%;
    background: var(--dark-blue);
    color: white;
    border-radius: 2rem;
  }
}
</style>
