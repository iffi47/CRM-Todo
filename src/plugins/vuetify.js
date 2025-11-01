// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { VDataTable } from 'vuetify/components'
// Vuetify
import { createVuetify } from 'vuetify'
//Custome theme
const myCustomLightTheme = {
  dark: true,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      myCustomLightTheme
    }
  },
  icons: {
    iconfont: 'mdi' || 'fa' || 'mdiSvg'
  },
  components: {
    VDataTable
  }
})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
