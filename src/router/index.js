import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import ActorsView from '../views/ActorsView.vue'
import CategorieView from '../views/CategorieView.vue'
import ConnexionView from '../views/ConnexionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ]
});

export default router