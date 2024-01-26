<template>
  <div class="home-view">
    <template v-if="loggedIn">
      <SectionMoviesList /> <!-- Include the MoviesView component when logged in -->
      <SectionActorsList /> <!-- Include the ActorsView component when logged in -->
    </template>
    <template v-else>
      <SectionHome /> <!-- Include the SectionHome component when not logged in -->
      <SectionHome2 /> <!-- Include the SectionHome2 component when not logged in -->
    </template>
  </div>
</template>

<script>


import SectionHome from '@/components/SectionHome.vue';
import SectionHome2 from '@/components/SectionHome2.vue';
import SectionMoviesList from '@/components/SectionMoviesList.vue';
import SectionActorsList from '@/components/SectionActorsList.vue'
import { useCounterStore} from "@/stores/counter.js";
import { mapState } from "pinia";


export default {
  components: {
    
    SectionHome,
    SectionHome2,
    SectionMoviesList,
    SectionActorsList,
},
    computed: {
        // bind this.loggedIn to useCounterStore().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },
};
</script>