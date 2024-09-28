<template>
    <div>
        Il corpo della pagina
        <Button label="Errore" severity="danger" @click="fetchIntermediari()" />
    </div>
</template>

<script setup lang="ts">


definePageMeta({
    layout: 'sisna-live'
})


const fetchIntermediari = async () => {
    //const { data, status, error, refresh, clear } = await useFetch<Intermediario[] | null, any>(config.public.apiBase + '/flow/intermediari/' + sourceType.value, {
    const { data, error } = await useFetch<any | null, any>('http://localhost:4444/errorTest', {});
    if (!data.value) {
        if (error.value.data) {
            console.log(error.value.data)
            throw createError(error.value.data);

        } else {
            throw createError(error.value);
        }
    }
}

</script>
