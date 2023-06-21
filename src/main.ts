import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { key, store } from './store'
import './assets/global.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mocks from '@/plugins/w/moxios'
// import w from '@/plugins/w/w'

createApp(App)
    .use(store, key)
    .use(router)
    .use(VueAxios, axios)
    .use(mocks, {
        routes: {
            'GET todos': true,
        }
    })
    // .use(w)
    .mount('#app')