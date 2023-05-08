<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nam qui
      perspiciatis voluptatum doloribus quibusdam amet ab. Dolore, atque
      corporis?
    </p>
    <div>basic server route: {{ data.basic }}</div>
    <div>query params route: {{ data.query_param }}</div>
    <div>post request route: {{ data.post_req }}</div>
    <div>GBP/USD rate: {{ rate }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=mario', {
    method: 'post',
    body: {age: 30},
})

const { data: rate } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
