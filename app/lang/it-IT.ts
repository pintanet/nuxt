export default defineI18nLocale(async locale => {
    return {
      app: {
        title : 'Sistema Informativo Unità di Supervisione e normativa antiriciclaggio',
        images: {
          logoBIAlt: 'Banca d\'Italia',
          logoSISNAAlt : 'Sistema Informativo per la SNA'
        }
      },
      layouts: {
        sisnaLive: {
          darkModeSelector:'Selettore Dark Mode'
        }
      },
      pages: {
      },

      components: {
        colorModeSelector: {
          label: 'Luninosità'
        },
        sisnaMenu: {
          live: {
            label: 'Live',
            anagrafica: {
              label: 'Anagrafica Intermediari',
              subtext: 'Dati anagrafici degli Intermediari vigilati dalla SNA'
            }
          },
          flussiInformativi: {
            label: 'Flussi Informativi',
            itemMonitoraggio: {
              label: 'Monitoraggio',
              subtext: 'Pannello di monitoraggio dei flussi informativi'
            },
            itemAcquisizione: {
              label: 'Acquisizione Flusso',
              subtext: 'Acquisizione Flusso Informativo'
            },
            itemModifica: {
              label: 'Modifica',
              subtext: 'Modifica dati'
            }
          },
          autorizzazioni: {
            label: 'Autorizzazioni',
            itemMonitoraggio: {
              label: 'Monitoraggio',
              subtext: 'Monitoraggio delle regole per il controllo di accesso ai dati'
            },
            itemAssegnazione: {
              label: 'Assegnazione',
              subtext: 'Gestione delle regole per il controllo di accesso ai dati'
            },
            itemAudit: {
              label: 'Data Audit',
              subtext: 'Auditing sui dati'
            }
          },
          modello: {
            label: 'Modello AML',
            itemElaboraModelloAML: {
              label: 'Elaborazione Modello AML',
              subtext: 'Elaborazione del Modello AML'
            },
            itemReportAML: {
              label: 'Report AML',
              subtext: 'Visualizzazione Rerpot AML'
            },
          },
          analisi: {
            label: 'Analisi Annuale',
            itemMonitoraggioSchede: {
              label: 'Monitoraggio',
              subtext: 'Monitoraggio delle Schede Intermediario'
            },
            itemScheda: {
              label: 'Scheda Intermediario',
              subtext: 'Gestione della Scheda Intermediario'
            },
          },
          sistema: {
            label: 'Sistema',
            itemUserInfo: {
              label: 'Utente',
              subtext: 'Informazioni sull\'utente'
            }
          }
        }
      },
    }
  }
)
