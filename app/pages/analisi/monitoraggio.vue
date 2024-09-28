<template>
    <div class="pi pi-lis scale-150">Monitoraggio Schede Intermediario {{ name }}</div>
</template>
<script setup lang="ts">

const route = useRoute();

const name = ref(route.query.name ? route.query.name : 'Nemo')

</script>
