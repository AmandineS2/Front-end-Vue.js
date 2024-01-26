import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import ActorsView from '../views/ActorsView.vue'
import CategorieView from '../views/CategorieView.vue'
import ConnexionView from '../views/ConnexionView.vue'
// import SectionMovies from './SectionMovies.vue';
import DetailView from '../views/DetailView.vue';
import DetailView2 from '@/views/DetailView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/detail/:id',
      name: 'detail', 
      component: DetailView, 
    },
    {
      path: '/detail2/:id',
      name: 'detail2', 
      component: DetailView2, 
    },
    {
      path: '/HomeView',
      name: 'Accueil',
      component: HomeView
    },
    {
      path: '/MoviesView',
      name: 'Films',
      component: MoviesView
    },
    {
      path: '/ActorsView',
      name: 'Acteurs',
      component: ActorsView
    },
    {
      path: '/CategorieView',
      name: 'Categorie',
      component: CategorieView
    },
    {
      path: '/ConnexionView',
      name: 'Connexion',
      component: ConnexionView
    },

  ],
  
});

export default router