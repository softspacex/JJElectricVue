<template>
  <default-layout></default-layout>

  <article>
    <form
      action="https://formspree.io/f/mvoedeeg"
      method="POST"
      target="_blank"
    >
      <div class="container text-center vacante-body">
        <div class="row">
          <div class="col-12 col-md-6">
            <img src="/vacante.jpeg" class="img-fluid vacante-img" alt="..." />
          </div>
          <div class="col-12 col-md-6">
            <div class="vacante-text">
              <h2 class="vacante-title text-uppercase">
                ¡Trabaja con <br />
                nosotros!
              </h2>
              <p class="vacante-paraf text-lowercase">
                o manda tu <span class="text-uppercase">CV</span> a través de:
              </p>
              <p class="vacante-paraf text-lowercase">
                reclutamientopersonalse@gmail.com
              </p>
              <div class="d-flex flex-column flex-md-row">
                <div class="mb-3 flex-grow-1 me-md-2">
                  <input
                    type="text"
                    class="form-control vacante-input"
                    placeholder="Nombre"
                    name="Nombre"
                  />
                </div>
                <div class="mb-3 flex-grow-1">
                  <input
                    type="text"
                    class="form-control vacante-input"
                    placeholder="Apellido"
                    name="Apellido"
                  />
                </div>
              </div>

              <div class="mb-3">
                <input
                  type="email"
                  class="form-control vacante-input-email"
                  id="exampleFormControlInput1"
                  placeholder="Correo"
                  name="Correo"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control vacante-input-textarea"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Mensaje"
                  name="Mensaje"
                ></textarea>
              </div>
              <div class="col-auto button-container">
                <button type="submit" class="btn mb-3 btn-send">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
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
.vacante-body {
  margin-top: 200px;
}
.vacante-img {
  border-radius: 10px;
  margin-top: 19px;
  height: 490px;
}
.vacante-text {
  font-size: 30px;
}
.vacante-title {
  color: var(--dark-grey);
  font-size: 70px;
}
.vacante-paraf {
  color: var(--middle-grey);
  font-size: 23px;
}
.vacante-input {
  width: 100%;
  height: 39px;
  font-size: 13px;
  border-radius: 17px;
  color: var(--middle-grey);
  background: var(--light-grey);
}
.vacante-input-email {
  height: 39px;
  font-size: 13px;
  border-radius: 17px;
  color: var(--middle-grey);
  background: var(--light-grey);
}
.vacante-input-textarea {
  height: 100px;
  font-size: 13px;
  border-radius: 17px;
  color: var(--middle-grey);
  background: var(--light-grey);
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
.btn-send:hover {
  background: var(--light-yellow);
}
</style>
