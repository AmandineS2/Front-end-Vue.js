<template>
    <div class="actors-view">
      <h3>Affiche des acteurs</h3>
      <div class="card-container-actors">
    <div class="card"  v-for="(actor, index) in actors" :key="index">
      
      <router-link :to="'/detail2/' + actor.id">
    {{ actor.title }}
    
  </router-link>
    </div>
        </div>
      </div>
    
  </template>
  
  <script>
  import { api } from '@/services/api.js'
  export default {
    name: 'SectionActors',
    data() {
      return {
        films: [],
        selectedText: '' // Initialisez la donnée pour le texte sélectionné
      };
    },
    methods: {
      showText(index) {
        this.selectedText = `${this.descriptions[index]} - ${this.resume[index]} - ${this.film[index]}`;
      }
    },
  async created() {
    
    this.actors = await api(`/api/actors/`,)
    this.actors = this.actors['hydra:member']

  }
  };
  </script>
  
  <style scoped>

.actors-view {
  background-color: aliceblue;
  width: 100%;
  position: absolute;
  margin-top: 425px;
  height: 400px;
  display: flex;
  flex-direction: column; /* Pour aligner les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
}

.actors-view h3 {
  color: rgb(159, 17, 17);
  text-align: center;
  margin-top: 25px;
}

.card-container-actors {
  display: flex;
  justify-content: space-around; /* Pour espacer les cartes de manière égale */
  width: 90%; /* Ajustez la largeur selon vos besoins */
  margin-top: 437px;
}

.card-actors {
  width: 20%; /* Ajustez la largeur selon vos besoins */
  margin: 437px; /* Ajoute de l'espace entre les cartes */
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