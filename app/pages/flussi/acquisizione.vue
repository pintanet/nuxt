<template>
    <div>
        <div class="pi pi-arrow-up-right scale-150">Acquisizione</div>
        
        <div v-if="status === 'pending'">Loading ...<ProgressSpinner /></div>
        <div v-if="status === 'error'">Error {{ error }}</div>
        <div v-else>{{ helloWorld }}</div>

    </div>
</template>

<script setup lang="ts">


const { status, data: helloWorld } = await useLazyFetch('http://localhost:4444/a/helloWorld');

</script> 