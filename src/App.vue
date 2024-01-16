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

import { useCounterStore } from "./stores/counter"
import { mapState, mapActions } from "pinia";


export default {
  data(){
    return {
    }
  },
  
  computed: {
        // bind this.loggedIn to useSession().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },
  components: { Navbar, SectionFooter, Header, }
}

</script>