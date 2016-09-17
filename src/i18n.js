import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false // not needed for react!!
    },
    resources: {
      en: {
        common: {
          'TITLE': 'Hauling Fee Calculator',
          'ROUTE': 'Route:',
          'VOLUME': 'Volume',
          'MAX_VOLUME_REACHED': 'Maximum volume reached',
          'COLLATERAL': 'Collateral',
          'FEE': 'Minimum fee:',
          'VOLUME_PLACEHOLDER': 'Enter your volume here',
          'COLLATERAL_PLACEHOLDER': 'Enter your collateral here',
          'DOC_DECIMAL': '\'.\' is a decimal separator (10.2) ',
          'DOC_THOUSAND': '\',\' is a thousands separator (1,234,456)',
          'DOC_KMB': 'You can use \'k\', \'m\', \'b\' for values (1.12b)',
          'DISCLAIMER': 'Courtesy of Tethys Luxor, for Beyond Frontier',
        }
      },
      fr: {
        common: {
          'TITLE': 'Calculatrice de frais de transport',
          'ROUTE': 'Route :',
          'VOLUME': 'Volume',
          'MAX_VOLUME_REACHED': 'Volume Maximum dépassé',
          'COLLATERAL': 'Collateral',
          'FEE': 'Frais minimum :',
          'VOLUME_PLACEHOLDER': 'Tapez votre volume ici',
          'COLLATERAL_PLACEHOLDER': 'Tapez votre collateral ici',
          'DOC_DECIMAL': '\'.\' est un séparateur décimal (10.2)',
          'DOC_THOUSAND': '\',\' est un séparateur de milliers (1,234,456)',
          'DOC_KMB': 'Vous pouvez utiliser \'k\', \'m\', \'b\' comme abréviation (1.12b)',
          'DISCLAIMER': 'Fait par Tethys Luxor, pour Beyond Frontier',
        }
      }
    }

  });


export default i18n;



