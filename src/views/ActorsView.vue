<template>
  <div class="actors-view">
    <template v-if="loggedIn">
      <SectionActors/> <!-- Include the MoviesView component when logged in -->
    </template>
    <template v-else>
      <SectionActorsInactive /> <!-- Include the SectionHome component when not logged in -->
      
    </template>
  </div>
</template>

<script>

import SectionActorsInactive from '@/components/SectionActorsInactive.vue';
import SectionActors from '../components/SectionActors.vue';

import { useCounterStore} from "@/stores/counter.js";
import { mapState } from "pinia";



export default {
  components: {
    SectionActors,
    SectionActorsInactive
},
computed: {
        // bind this.loggedIn to useCounterStore().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },

};
</script>