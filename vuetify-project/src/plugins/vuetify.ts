/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/settings.scss'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'portfolio',
    themes: {
      portfolio: {
        dark: false,
        colors: {
          background: '#e9e7df',
          surface: '#f2f0e9',
          primary: '#ae4f35',
          secondary: '#66675f',
          'on-background': '#242621',
          'on-surface': '#242621',
        },
      },
    },
  },
})
