import {createRouter,createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Productos from '../views/Productos.vue';
import SobreNosotros from '../views/SobreNosotros.vue';
import Cotizar from '../views/Cotizar.vue';
import Vacantes from '../views/Vacantes.vue';


const routes = [
    {path:'/',component:Home},
    {path:'/productos',component:Productos},
    {path:'/sobrenosotros',component:SobreNosotros},
    {path:'/cotizar',component:Cotizar},
    {path:'/vacantes',component:Vacantes},
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;