<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde inventore soluta quam maiores voluptates sunt ipsum sequi quasi numquam modi.</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const {data} = await useFetch('/api/currency/GBP' );

</script>

<style>
h2{
  margin-bottom:20px;
  font-size:36px;
}
p{
  margin: 20px 0;
}

</style>