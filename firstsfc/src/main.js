import { createApp } from 'vue'

import App from './App.vue'
import ResumeWebsite from './components/ResumeWebsite.vue'

const app = createApp(App)
app.component('resume-website', ResumeWebsite)
app.mount('#app')