import { createWebHistory, createRouter } from "vue-router";
import PatientsIndex from "../components/patients/Patientsindex";
import PatientsCreate from "../components/patients/Patientscreate";
import PatientsEdit from "../components/patients/Patientsedit";
import IslandsCreate from "../components/islands/Islandscreate";


const routes = [
    {
        path: "/dashboard",
        name: "patients.index",
        component: PatientsIndex,
    },
    {
        path: "/patients/create",
        name: "patients.create",
        component: PatientsCreate,
    },
    {
        path: "/patients/:id/edit",
        name: "patients.edit",
        component: PatientsEdit,
        props:true,
    },
    {
        path: "/islands/create",
        name: "islands.create",
        component: IslandsCreate,
    },


    // {
    //     path: "/about",
    //     name: "About",
    //     component: About,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default createRouter({
    history:createWebHistory(),
    routes
});
