<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="delivery-img">
        <img src="/delivery.jpeg" class="img-fluid" alt="..." />
      </div>
      <div class="text-center ms-md-4 mt-5">
        <h1 class="text-uppercase formatted-text fs-responsive">
          Delivery <br />
          Gratis <br />
          en Todo <br />
          el país
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-left: 5rem;
}
.delivery-img {
  width: 53%;
}
.delivery-img img {
  border-radius: 19px;
}
.formatted-text {
  text-align: left;
  color: var(--dark-blue);
}

.fs-responsive {
  font-size: 2rem; /* Tamaño base para móviles */
}

@media (min-width: 576px) {
  .fs-responsive {
    font-size: 3rem;
  }
}

@media (min-width: 768px) {
  .fs-responsive {
    font-size: 5rem;
  }
}

@media (min-width: 992px) {
  .fs-responsive {
    font-size: 5rem;
  }
}

@media (min-width: 1200px) {
  .fs-responsive {
    font-size: 8rem;
  }
}
</style>
