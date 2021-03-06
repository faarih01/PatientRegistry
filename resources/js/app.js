import Adressescreate from "./components/adresses/Adressescreate";

require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue'
import router from './router/index';
import PatientsIndex from './components/patients/Patientsindex';
import PatientsCreate from './components/patients/Patientscreate';
import IslandsCreate from './components/islands/Islandscreate';
import AdressesCreate from './components/adresses/Adressescreate';
import AdressesEdit from './components/adresses/Adressedit';


const app = createApp({
    /* root component options */
    components:{
        PatientsIndex,
        PatientsCreate,
        IslandsCreate,
        AdressesCreate,
        AdressesEdit,

    }
}).use(router).mount('#app');

