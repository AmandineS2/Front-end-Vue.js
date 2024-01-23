<template>
  <div class="home-view">
    
    <MoviesView v-if="loggedIn" /> <!-- Inclure le composant de la section d'accueil -->
    <ActorsView v-if="loggedIn" /> <!-- Inclure le composant de la section d'accueil -->
    
 
  </div>
</template>

<script>
import ActorsView from '../components/SectionActors.vue';
import MoviesView from '../components/SectionMovies.vue';

import { useCounterStore} from "@/stores/counter.js";
import { mapState } from "pinia";


export default {
  components: {
    ActorsView,
    MoviesView,

    
},
    computed: {
        // bind this.loggedIn to useCounterStore().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },
};
</script>