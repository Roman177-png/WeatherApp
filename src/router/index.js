import { createRouter, createWebHistory } from 'vue-router'
import AddCity from '../views/AddCity.vue'
import WeatherInCity from '../views/WeatherInCity.vue'
const routes = [
  {
    path: '/',
    name: 'AddCity',
    component: AddCity
  },
  {
    path: '/weather/:city',
    name: 'Weather',
    component: WeatherInCity
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
