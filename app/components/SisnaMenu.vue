<template>
    <MegaMenu :model="items" />
</template>

<script setup lang="ts">
const { t } = useI18n();

const items = ref([
    {
        label: t('components.sisnaMenu.live.label'),
        root: true,
        icon: 'pi pi-database',
        items: [
            [{
                items: [
                    { label: t('components.sisnaMenu.live.anagrafica.label'), icon: 'pi pi-calendar', subtext: t('components.sisnaMenu.live.anagrafica.subtext'), command: () => { navigateTo('/live/anagrafica/intermediari'); } },
                ]
            }]

        ]
    },
    {
        label: t('components.sisnaMenu.flussiInformativi.label'),
        root: true,
        icon: 'pi pi-database',
        items: [
            [{
                items: [
                    { label: t('components.sisnaMenu.flussiInformativi.itemMonitoraggio.label'), icon: 'pi pi-calendar', subtext: t('components.sisnaMenu.flussiInformativi.itemMonitoraggio.subtext'), command: () => { navigateTo('/flussi/monitoraggio'); } },
                    { label: t('components.sisnaMenu.flussiInformativi.itemAcquisizione.label'), icon: 'pi pi-arrow-up-right', subtext: t('components.sisnaMenu.flussiInformativi.itemAcquisizione.subtext'), command: () => { navigateTo('/flussi/acquisizione'); } },
                    { label: t('components.sisnaMenu.flussiInformativi.itemModifica.label'), icon: 'pi pi-file-edit', subtext: t('components.sisnaMenu.flussiInformativi.itemModifica.subtext'), command: () => { navigateTo('/flussi/modifica'); } },
                ]
            }]

        ]
    },

    {
        label: t('components.sisnaMenu.autorizzazioni.label'),
        root: true,
        icon: 'pi pi-unlock',
        items: [
            [{
                items: [
                    { label: t('components.sisnaMenu.autorizzazioni.itemMonitoraggio.label'), icon: 'pi pi-list-check', subtext: t('components.sisnaMenu.autorizzazioni.itemMonitoraggio.subtext'), command: () => { navigateTo('/autorizzazioni/monitoraggio'); } },
                    { label: t('components.sisnaMenu.autorizzazioni.itemAssegnazione.label'), icon: 'pi pi-sitemap', subtext: t('components.sisnaMenu.autorizzazioni.itemAssegnazione.subtext'), command: () => { navigateTo('/autorizzazioni/assegnazione'); } },
                    { label: t('components.sisnaMenu.autorizzazioni.itemAudit.label'), icon: 'pi pi-eye', subtext: t('components.sisnaMenu.autorizzazioni.itemAudit.subtext'), command: () => { navigateTo('/autorizzazioni/audit'); } },
                ]
            }]

        ]
    },

    {
        label: t('components.sisnaMenu.modello.label'),
        root: true,
        icon: 'pi pi-android',
        items: [
            [{
                items: [
                    { label: t('components.sisnaMenu.modello.itemElaboraModelloAML.label'), icon: 'pi pi-sliders-v', subtext: t('components.sisnaMenu.modello.itemElaboraModelloAML.subtext'), command: () => { navigateTo('/modello/elaborazione'); } },
                    { label: t('components.sisnaMenu.modello.itemReportAML.label'), icon: 'pi pi-file-pdf', subtext: t('components.sisnaMenu.modello.itemReportAML.subtext'), command: () => { navigateTo('/modello/report'); } },
                ]
            }]

        ]
    },

    {
        label: t('components.sisnaMenu.analisi.label'),
        root: true,
        icon: 'pi pi-globe',
        items: [
            [{
                items: [
                    { label: t('components.sisnaMenu.analisi.itemMonitoraggioSchede.label'), icon: 'pi pi-list', subtext: t('components.sisnaMenu.analisi.itemMonitoraggioSchede.subtext'), command: () => { navigateTo('/analisi/monitoraggio'); } },
                    { label: t('components.sisnaMenu.analisi.itemScheda.label'), icon: 'pi pi-id-card', subtext: t('components.sisnaMenu.analisi.itemScheda.subtext'), command: () => { navigateTo('/analisi/scheda'); } },
                ]
            }]

        ]
    },

    {
        label: t('components.sisnaMenu.sistema.label'),
        root: true,
        icon: 'pi pi-cog',
        items: [
            [{
                items: [
                    { label: t('components.sisnaMenu.sistema.itemUserInfo.label'), icon: 'pi pi-user', subtext: t('components.sisnaMenu.sistema.itemUserInfo.subtext'), command: () => { navigateTo('/sistema/userInfo'); } },
                ]
            }]

        ]
    },

]);

const items2 = ref([
    {
        label: "Modello AML",
        root: true,
        icon: 'pi pi-calendar',
        items: [
            [{
                items: [
                    { label: "Configurazione modello", icon: 'pi pi-database', subtext: 'Configuraizone Modello Annuale' },
                    { label: "Elaborazione modello", icon: 'pi pi-filter', subtext: 'Elaborazione Modello Annaule' },
                    { label: "Pubblicazione modello", icon: 'pi pi-telegram', subtext: 'Pubblicazione Modello Annaule' }
                ]
            }]
        ]
    },
    {
        label: "Report",
        root: true,
        icon: 'pi pi-calendar',
        items: [
            [{
                items: [
                    { label: "Report AML Intermediario", icon: 'pi pi-filter', subtext: 'Report AML Intermediario' },
                    { label: "Report AML Individuale", icon: 'pi pi-file', subtext: 'Report AML Individuale' },
                ]
            }]
        ]
    },
    {
        label: "Schede",
        root: true,
        icon: 'pi pi-calendar',
        items: [
            [{
                items: [
                    { label: "Scheda Intermediario", icon: 'pi pi-id-card', subtext: 'Scheda Intermediario' },
                    { label: "Scheda Gruppo", icon: 'pi pi-list', subtext: 'Scheda di gruppo' },
                ]
            }]
        ]
    },
    {
        label: "Deleghe",
        root: true,
        icon: 'pi pi-lock',
        items: [
            [{
                items: [
                    { label: "Profili Utente", icon: 'pi pi-id-card', subtext: 'Gestione profili utente' },
                    { label: "Delege", icon: 'pi pi-list', subtext: 'Gestione Deleghe' },
                ]
            }]
        ]
    },
    {
        label: "Sistema",
        root: true,
        icon: 'pi pi-hashtag',
        items: [
            [{
                items: [
                    { label: "Configurazioni", icon: 'pi pi-id-card', subtext: 'Configuraizoni di sistema' },
                    { label: "Info", icon: 'pi pi-list', subtext: 'Informazioni sul sistema', command: () => { navigateTo('saluti'); } }
                ]
            }]
        ]
    }
]);

</script>