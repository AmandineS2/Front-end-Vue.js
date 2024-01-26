<!-- DetailView.vue -->
<template>
  <div>
    <h2>{{ film.title }}</h2>
    <p>Description: {{ film.description }}</p>
    <p>Résumé: {{ film.resume }}</p>
    <p>Acteurs: {{ film.actors }}</p>
  </div>
</template>

<script>
import { api } from '@/services/api.js'
export default {
  name: 'DetailView',
  data() {
    return {
      film: {}
    };
  },
  async created() {
    const filmId = this.$route.params.id;
    
    this.film =await  api(`/api/movies/${filmId}`)

  }
};
</script>