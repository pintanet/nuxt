<template>
  <div class="mt-4 m-4 box-border max-h-full max-w-full shadow-md">
    <div class="grid grid-cols-12">
      <div class="col-span-1" />
      <div class="col-span-1 flex items-center justify-center px-4">
        <NuxtLink to="/">
          <Image :src="isDark ? '/sisna-logo-dark.png' : '/sisna-logo.png'" :alt="$t('app.images.logoSISNAAlt')" />
        </NuxtLink>
      </div>
      <div class="col-span-8 flex items-center justify-left">
        <SisnaMenu class="shadow-md" />
      </div>
      <div class="col-span-1 flex items-center justify-center px-4">
        <NuxtLink to="https://www.bancaditalia.it/" target="_blank">
          <Image :src="isDark ? '/bi-logo-dark.png' : '/bi-logo.png'" :alt="$t('app.images.logoBIAlt')" />
        </NuxtLink>
      </div>
      <div class="col-span-1">
        <Button :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" severity="secondary" @click="isDark = !isDark"
          :aria-label="$t('layouts.sisnaLive.darkModeSelector')" />
      </div>

      <div class="col-span-12">
        <Divider />
      </div>

      <div class="col-span-2">
        <div class="mt-4 mx-4">
          <Left />
        </div>
      </div>
      <div class="col-span-8">
        <div class="mx-4">
          <slot />
        </div>
      </div>
      <div class="col-span-2">
        <div class="mt-4 mx-4">
          <Right />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDark = useDarkMode();
</script>