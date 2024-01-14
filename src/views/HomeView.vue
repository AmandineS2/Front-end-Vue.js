<template>
  <div class="home-view">
    
    <SectionHome /> <!-- Inclure le composant de la section d'accueil -->
    <SectionHome2 /> <!-- Inclure le composant de la section d'accueil -->
 
  </div>
</template>

<script>

import SectionHome from '../components/SectionHome.vue';
import SectionHome2 from '../components/SectionHome2.vue';


export default {
  components: {
  SectionHome,
  SectionHome2,

  }
};
</script>