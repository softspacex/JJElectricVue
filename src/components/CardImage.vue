<template>
    <div class="imgcard">
        <div class="col">
        <div class="card no-border" @click="openPdf">
            <img class="card-img-top" :src="url" alt="Imagen del producto">
        </div>
    </div>
    </div>
 
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    url: String,
    pdfUrl:String
});

const openPdf = () => {
    window.open(props.pdfUrl,'_blank');
};
</script>

<style scoped>
.card-img-top {
    width: 73%;
   margin-left: 6rem;
    max-width: 100%;
    height: auto;
}

.no-border {
    border: none; 
    box-shadow: none; 
}

/* @media(max-width: 574px){
    .imgcard{
    width: 50%;
    margin-left: 16rem;
    }
}

@media (max-width: 880px) {
    .imgcard{
        margin-top: 15rem;
    }
} */
@media(max-width: 574px){
    .imgcard{
    width: 50%;
    margin-left: -5rem;
    margin-bottom: -10rem;
    }
}

@media (max-width: 991px) {
    .imgcard{
        margin-top: 15rem;
        margin-bottom: -10rem;
    }
}
</style>