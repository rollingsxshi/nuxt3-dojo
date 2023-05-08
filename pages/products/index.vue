<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products',
  })

  // override default meta values
  useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      {name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })

  // fetch products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>