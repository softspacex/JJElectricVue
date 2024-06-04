<template>
   <default-layout></default-layout>


   <carousel></carousel>



   <div class="container">
      <div class="row justify-content-center">
         <card-image class="col-12 col-sm-6 col-md-4" url="/ImgCard-1.jpg" pdfUrl="https://drive.google.com/file/d/18hLrwT2O2a990Ic-fuyEh4r1k2hM6qfA/view?usp=sharing"></card-image>
         <card-image class="col-12 col-sm-6 col-md-4" url="/ImgCard-6.jpg" pdfUrl="https://drive.google.com/file/d/13gRnjOfjyoxHScH4VzHVLHTfcdhh4689/view?usp=sharing"></card-image>
         <card-image class="col-12 col-sm-6 col-md-4" url="/ImgCard-2.jpg" pdfUrl=""></card-image>
         <card-image class="col-12 col-sm-6 col-md-4" url="/ImgCard-3.jpg" pdfUrl=""></card-image>
         <card-image class="col-12 col-sm-6 col-md-4" url="/ImgCard-4.jpg" pdfUrl="https://drive.google.com/file/d/1OQH_OWwaWGsepAZhZP9o5PgTBKt5MDIG/view?usp=sharing"></card-image>
         <card-image class="col-12 col-sm-6 col-md-4" url="/ImgCard-5.jpg" pdfUrl="https://drive.google.com/file/d/1Qb00LxZZYOrcRGYLeUCNyjlZadenRgIN/view?usp=sharing"></card-image>
      </div>
   </div>

</template>

<script setup>
import CardImage from "../components/CardImage.vue";
import Carousel from "../components/Carousel.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";


</script>

<style>
.container{

   margin-top: 13rem;
   cursor: pointer;

}
</style>