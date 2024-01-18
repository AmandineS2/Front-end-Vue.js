<template>
  <div class="home-view">
    
    <MoviesView v-if="loggedIn" /> <!-- Inclure le composant de la section d'accueil -->
    <SectionHome2 /> <!-- Inclure le composant de la section d'accueil -->
 
  </div>
</template>

<script>

import SectionHome2 from '../components/SectionHome2.vue';
import MoviesView from './MoviesView.vue';
import { useCounterStore} from "@/stores/counter.js"
import { mapState } from "pinia";


export default {
  components: {
    SectionHome2,
    MoviesView
},
    computed: {
        // bind this.loggedIn to useCounterStore().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },
};
</script>