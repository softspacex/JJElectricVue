<template>
    <div class="product ">
      <img :src="url" alt="" />
      <div class="product-info">
        <h4 class="product-title text-uppercase">{{ title }}</h4>
        <a :href="pdfUrl" class="btn text-uppercase" target="_blank">Ver catálogo</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps({
    title: String,
    url: String,
    pdfUrl: String
  });
  </script>
  
  <style scoped>
  .product {
    overflow: hidden;
    background: #ffffff;
    color: #21201e;
    text-align: center;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;
    transition: transform 0.3s;
  }
  
  .product:hover {
    box-shadow: 5px 15px 25px #eeeeee;
    transform: scale(1.05);
  }
  
  .product img {
    height: 200px;
    margin: 1rem;
    transition: all 0.3s;
  }
  
  h4 {
    font-size: 15px;
    color: var(--middle-grey);
  }
  .btn {
  margin-top: 1rem;
  display: inline-block;
  font-size: 1.7rem;
  color: #fff;
  background: var(--dark-blue);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.8rem 3rem;
}

.btn:hover {
  background: var(--light-yellow);
  letter-spacing: 0.1rem;
}
@media (max-width: 768px) {
  .product {
    width: 100%; /* Elimina restricciones de ancho para ocupar todo el ancho disponible */
    padding: 1rem; /* Ajusta padding si es necesario */
  }

  .product img {
    height: auto; /* Ajusta la altura para mantener la proporción */
    max-width: 100%; /* Asegura que la imagen no exceda el contenedor */
  }
}
  </style>
  