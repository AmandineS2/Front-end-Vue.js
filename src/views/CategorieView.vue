<template>
  <div class="actors-view">
    <template v-if="loggedIn">
      <SectionCategories/> <!-- Include the MoviesView component when logged in -->
      
    </template>
    <template v-else>
      <SectionCategoriesInactive /> <!-- Include the SectionHome component when not logged in -->
      
    </template>
  </div>
</template>

<script>

import SectionCategories from '../components/SectionActors.vue';
import SectionCategoriesInactive from '@/components/SectionCategoriesInactive.vue';


export default {
  components: {
  SectionCategories,
  SectionCategoriesInactive,
 

  }
};
</script>