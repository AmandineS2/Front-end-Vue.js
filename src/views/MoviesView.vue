<template>
  <div class="movies-view">
    <template v-if="loggedIn">
      <SectionMovies /> <!-- Include the MoviesView component when logged in -->
      
    </template>
    <template v-else>
      <SectionMoviesInactive /> <!-- Include the SectionHome component when not logged in -->
      
    </template>
  </div>
</template>

<script>

import SectionMoviesInactive from '@/components/SectionMoviesInactive.vue';
import SectionMovies from '../components/SectionMovies.vue';

import { useCounterStore} from "@/stores/counter.js";
import { mapState } from "pinia";



export default {
  components: {
  SectionMovies,
  SectionMoviesInactive,
  
 

  },
    computed: {
        // bind this.loggedIn to useCounterStore().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },
};
</script>