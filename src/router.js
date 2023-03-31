import { createRouter, createWebHistory } from "vue-router";


const routes = [
    { path: "/formulario",
    name: "Formulario",
},   
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;