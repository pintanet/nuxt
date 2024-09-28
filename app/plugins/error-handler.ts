import type { NuxtError } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    const toast = useToast();

    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
        let nuxtError: NuxtError = error as NuxtError;
        let m: ToastMessageOptions = { summary: 'ERRORE [' + nuxtError.statusCode + ']', detail: nuxtError.statusMessage, severity: 'error' };
        toast.add(m);
    }

})
