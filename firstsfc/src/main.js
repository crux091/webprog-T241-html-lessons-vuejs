import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './Components/FoodItem.vue'
import FoodItem from './Components/FoodItem2.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.mount('#app')