<template>
   
    <p>Products</p>
    <div class="grid grid-cols-4 gap-5">
        <div v-for="p in products" :key="p.id">
           <ProductCard :product="p" />

        </div>
    </div>
  
</template>

<script setup>
import ProductCard from '~/components/ProductCard.vue';

definePageMeta({
    layout:'products'
})
const {data:products} = await useFetch('https://fakestoreapi.com/products');
useHead({
    title:'nuxt | products',
    meta:[{name:'description',content:'product page'}]
})

</script>

<style>

</style>