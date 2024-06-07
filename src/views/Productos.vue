<template>
  <default-layout></default-layout>

  <article class="text-prod text-center">
    <h1 class="text-uppercase text-principal">Nuestros Productos</h1>
    <h3 class="text-uppercase text-secundary">Todo lo que necesitas Para tu Proyecto</h3>
  </article>

  <article class="product-list">
    <custome-product 
      v-for="(product, index) in products" 
      :key="index"
      :title="product.title"
      :url="product.url"
      :pdfUrl="product.pdfUrl"
    ></custome-product>
  </article>

  <article>
    <the-footer></the-footer>
  </article>
</template>

<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import TheFooter from "../components/TheFooter.vue";
import CustomeProduct from "../components/CustomeProduct.vue";

const products = [
  { title: "Iluminación", url: "/Product-1.jpg", pdfUrl: "https://drive.google.com/file/d/18hLrwT2O2a990Ic-fuyEh4r1k2hM6qfA/view?usp=sharing" },
  { title: "Media y Alta Tensión", url: "/Product-2.jpg", pdfUrl: "https://drive.google.com/file/d/1OQH_OWwaWGsepAZhZP9o5PgTBKt5MDIG/view?usp=sharing" },
  { title: "Cables y Accesorios", url: "/Product-3.jpg", pdfUrl: "https://drive.google.com/file/d/13gRnjOfjyoxHScH4VzHVLHTfcdhh4689/view?usp=sharing" },
  { title: "Protección", url: "/Product-4.jpg", pdfUrl: "https://drive.google.com/file/d/1aYBIVYNtEIoDQ5i_N6AA6P26mJVaq1F7/view?usp=sharing" },
  { title: "Enchufes y Tomacorrientes", url: "/Product-5.jpg", pdfUrl: "https://drive.google.com/file/d/1NU3FGrUzAT3FPA4vczB0SnYX8qcz4cJ4/view?usp=sharing" },
  { title: "Fitting", url: "/Product-6.jpg", pdfUrl: "https://drive.google.com/file/d/1m3lodcr4SSsIqgNXzp8BShU1lF9qp0z-/view?usp=sharing" },
  { title: "Tornillería", url: "/Product-7.jpg", pdfUrl: "https://drive.google.com/file/d/11R9C_GlGP9xLTT7U3GwjSKHcJr1yvCBH/view?usp=sharing" },
  { title: "Herramientas y Accesorios", url: "/Product-8.jpg", pdfUrl: "https://drive.google.com/file/d/1Qb00LxZZYOrcRGYLeUCNyjlZadenRgIN/view?usp=sharing" },
  { title: "Controles", url: "/Product-9.jpg", pdfUrl: "https://drive.google.com/file/d/1zbGemBokq-EiIvZEe2qMY_kCa7KRnc91/view?usp=sharing" },
  { title: "Accesorios PVC", url: "/Product-10.jpg", pdfUrl: "https://drive.google.com/file/d/13v6VDm3QIm4zbLA5BvJD7yxa9lLOfYbE/view?usp=sharing" },
];
</script>

<style scoped>
.text-prod {
  margin-top: 20rem;
}
.text-principal {
  font-size: 6rem;
}
.text-secundary {
  font-size: 2.5rem;
  color: var(--middle-grey);
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* Espacio entre productos */
  padding: 2rem; /* Opcional: para espacio alrededor de la lista */
}
@media (max-width: 768px) {
  .product-list {
    grid-template-columns: 1fr; /* Una columna para dispositivos pequeños */
    padding: 1rem; /* Ajusta el espacio de padding si es necesario */
  }
}
</style>
