<template>
  <div id="app">
    <Navbar />
    <Header /> <!-- Inclure votre en-tête -->
    <router-view />
    <SectionFooter />
    
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import SectionFooter from './components/SectionFooter.vue';


export default {
  components: {
    Navbar,
    Header, // Enregistrer le composant d'en-tête
    SectionFooter,
    
    
  },
  // Autres configurations
};
</script>