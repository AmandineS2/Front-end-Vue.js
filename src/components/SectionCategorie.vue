<template>
    <div class="categorie-view">
      <h3>Affiche des films</h3>
      <div class="card-container-categorie">
    <div class="card-categorie"  v-for="(film, index) in films" :key="index">
      
      <router-link :to="'/detail/' + film.id">
    {{ film.title }}
    
  </router-link>
    </div>
        </div>
      </div>
    
  </template>
  
  <script>
  import { api } from '@/services/api.js'
  export default {
    name: 'SectionCategorie',
    data() {
      return {
        films: [],
        selectedText: '' // Initialisez la donnée pour le texte sélectionné
      };
    },
    methods: {
      showText(index) {
        this.selectedText = `${this.descriptions[index]} - ${this.resume[index]} - ${this.actors[index]}`;
      }
    },
  async created() {
    
    this.films = await api(`/api/categories/`,)
    this.films = this.films['hydra:member']

  }
  };
  </script>
  
  <style scoped>

.categorie-view {
  background-color: aliceblue;
  width: 100%;
  position: absolute;
  margin-top: 17px;
  height: 400px;
  display: flex;
  flex-direction: column; /* Pour aligner les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
}

.categorie-view h3 {
  color: rgb(159, 17, 17);
  text-align: center;
  margin-top: 25px;
}

.card-container-categorie {
  display: flex;
  justify-content: space-around; /* Pour espacer les cartes de manière égale */
  width: 90%; /* Ajustez la largeur selon vos besoins */
  margin-top: 75px;
}

.card-categorie {
  width: 20%; /* Ajustez la largeur selon vos besoins */
  margin: 10px; /* Ajoute de l'espace entre les cartes */
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Centre le texte horizontalement */
  cursor: pointer; /* Change le curseur au survol pour indiquer que la carte est cliquable */
  height: 266px;
  margin-top: 8px;
}

.description-text {
  color: blue; /* Par exemple, changez la couleur du texte selon vos besoins */
  font-size: 14px; /* Modifiez la taille de la police selon vos besoins */
  /* Ajoutez d'autres styles de texte selon vos besoins */
  margin-top: 400px;
}
</style>