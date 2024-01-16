<template>
    <div>
      <h2>{{ film.title }}</h2>
      <p>Description: {{ film.description }}</p>
      <p>Résumé: {{ film.resume }}</p>
      <p>Acteurs: {{ film.actors }}</p>
    
      </div>
  </template>
  
  <script>
  
  export default {
    name: 'DetailView',
    data() {
      return {
        films: [{
          title: 'Film 1',
          description: 'Dscription film 1',
          resume: 'Résumé du film 1',
          actors: 'Acteurs du film 1'
        }, {
          title: 'Film 2',
          description: 'Dscription film 2',
          resume: 'Résumé du film 2',
          actors: 'Acteurs du film 2'
        }, {
          title: 'Film 3',
          description: 'Dscription film 3',
          resume: 'Résumé du film 3',
          actors: 'Acteurs du film 3'
        }],
      };
    },
    computed: {
    film: function () {
         return this.films[this.$route.params.id]
    }
    }
  };
  </script> 