<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide mx-auto"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="/distribuidores.jpg"
          class="d-block w-100 carousel-image"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev custom-carousel-control"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      << <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next custom-carousel-control"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      >> <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
/* Asegúrate de que el carrusel esté centrado */
.carousel {
  display: flex;
  justify-content: center;
  width: 80%;
  margin-top: 10rem;
}

/* Estilo para los controles personalizados del carrusel */
.custom-carousel-control {
  background-color: blue;
  color: white;
  font-size: 3.5rem;
  border: none;
  padding: 21px -8px;
  border-radius: 15px;
  margin: 89px -37px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-carousel-control:hover {
  background-color: darkblue; /* Cambiar el color de fondo al pasar el mouse */
}

.custom-carousel-control span {
  display: none; /* Ocultar los iconos predeterminados de Bootstrap */
}

/* Asegura que todas las imágenes del carrusel tengan el mismo tamaño */
.carousel-image {
  width: 100%;
  height: 252px; /* Puedes ajustar la altura según tus necesidades */
}
</style>
