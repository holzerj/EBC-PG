import { createApp,provide } from 'vue'
import App from './App.vue'
import store from '@/store'
import './index.css'
createApp(App).mount('#app')

// export default {
//     setup() {
//       provide('store',store)
//     }
// }