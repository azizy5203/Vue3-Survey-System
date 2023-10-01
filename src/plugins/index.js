
import 'vuetify/styles'
import router from '../router'
import pinia from './pinia'
import vuetify from './vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'


export function registerPlugins(app){
    app
    .use(vuetify)
    .use(VueAxios,axios)
    .use(pinia)
    .use(router)

}
