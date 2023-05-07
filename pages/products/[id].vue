<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius delectus
      ea id voluptatem corporis earum iusto veniam vitae debitis!
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;
</script>

<style scoped></style>
