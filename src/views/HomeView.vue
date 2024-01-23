<template>
  <div class="home-view">
    <template v-if="loggedIn">
      <MoviesView /> <!-- Include the MoviesView component when logged in -->
      <ActorsView /> <!-- Include the ActorsView component when logged in -->
    </template>
    <template v-else>
      <SectionHome /> <!-- Include the SectionHome component when not logged in -->
      <SectionHome2 /> <!-- Include the SectionHome2 component when not logged in -->
    </template>
  </div>
</template>

<script>
import ActorsView from '../components/SectionActors.vue';
import MoviesView from '../components/SectionMovies.vue';
import SectionHome from '@/components/SectionHome.vue';
import SectionHome2 from '@/components/SectionHome2.vue';
import { useCounterStore} from "@/stores/counter.js";
import { mapState } from "pinia";


export default {
  components: {
    ActorsView,
    MoviesView,
    SectionHome,
    SectionHome2,

    
},
    computed: {
        // bind this.loggedIn to useCounterStore().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },
};
</script>