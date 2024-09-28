<template>
    <div class="max-h-full max-w-full">
        <ClientOnly>
            <Toast />
        </ClientOnly>

        <header>
            <div class="grid grid-cols-12 justify-items-end">
                <div class="col-span-2" />
                <div class="col-span-9 flex items-center">
                    <p class="mr-5">Utente: Lanfranco Pantaleoni (M028862) - SVI - DAS</p>
                    <Button :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" severity="secondary" @click="isDark = !isDark"
                        :aria-label="$t('layouts.sisnaLive.darkModeSelector')" />
                </div>
                <div class="col-span-1" />
            </div>

            <div class="grid grid-cols-12 items-start justify-items-center">
                <div class="col-span-2 px-10 border-t  border-b border-black dark:border-white border-solid">
                    <NuxtLink to="/">
                        <Image :src="isDark ? '/sisna-logo-dark.png' : '/sisna-logo.png'"
                            :alt="$t('app.images.logoSISNAAlt')" />
                    </NuxtLink>
                </div>

                <div class="col-span-9 items-center w-full shadow-2xl">
                    <p
                        class="h-full text-center py-2 font-serif text-4xl border-t border-b border-solid border-black dark:border-white ">
                        {{ $t('app.title') }}</p>
                    <div class="border-l border-r border-b border-black dark:border-white border-solid drop-shadow">
                        <SisnaMenu />
                    </div>
                </div>

                <div class="col-span-1 px-10 border-t  border-b border-black dark:border-white border-solid">
                    <NuxtLink to="https://www.bancaditalia.it/" target="_blank">
                        <Image :src="isDark ? '/bi-dark.png' : '/bi.png'" :alt="$t('app.images.logoBIAlt')" />
                    </NuxtLink>
                </div>

            </div>

        </header>

        <main>
            <slot />
        </main>

        <footer>
            <div></div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const isDark = useDarkMode();
</script>