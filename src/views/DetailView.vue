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

<style scoped>

.movies-view {
  background-color: aliceblue;
  width: 100%;
  position: absolute;
  margin-top: 450px;
  height: 850px;
  display: flex;
  flex-direction: column; /* Pour aligner les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
}

.movies-view h3 {
  color: rgb(159, 17, 17);
  text-align: center;
  margin-top: 25px;
}

.card-container-movies {
  display: flex;
  justify-content: space-around; /* Pour espacer les cartes de manière égale */
  width: 90%; /* Ajustez la largeur selon vos besoins */
  margin-top: 75px;
}

.card {
  width: 20%; /* Ajustez la largeur selon vos besoins */
  margin: 10px; /* Ajoute de l'espace entre les cartes */
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Centre le texte horizontalement */
  cursor: pointer; /* Change le curseur au survol pour indiquer que la carte est cliquable */
  height: 400px;
}

.description-text {
  color: blue; /* Par exemple, changez la couleur du texte selon vos besoins */
  font-size: 14px; /* Modifiez la taille de la police selon vos besoins */
  /* Ajoutez d'autres styles de texte selon vos besoins */
  margin-top: 400px;
}
</style>