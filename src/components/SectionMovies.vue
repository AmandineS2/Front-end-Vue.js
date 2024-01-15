<template>
    <div class="movies-view">
      <h3>Affiche des films</h3>
      <div class="card-container-movies">
        <div class="card" v-for="(film, index) in films" :key="index" @click="showText(index)">
          {{ film }}
          <p v-if="selectedText" class="description-text">
            Titre: {{ selectedText.description }} <br>
            Description: {{ selectedText.description }} <br>
            Résumé: {{ selectedText.resume }} <br>
            Acteurs: {{ selectedText.actors }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SectionMovies',
    data() {
      return {
        films: ['Film 1', 'Film 2', 'Film 3', 'Film 4'],
        descriptions: ['Description du film 1', 'Description du film 2', 'Description du film 3', 'Description du film 4'],
        resume: ['Résumé du film 1', 'Résumé du film 2', 'Résumé du film 3', 'Résumé du film 4'],
        actors: ['Acteurs du film 1', 'Acteurs du film 2', 'Acteurs du film 3', 'Acteurs du film 4'],
        selectedText: '' // Initialisez la donnée pour le texte sélectionné
      };
    },
    methods: {
      showText(index) {
        this.selectedText = `${this.descriptions[index]} - ${this.resume[index]} - ${this.actors[index]}`;
      }
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