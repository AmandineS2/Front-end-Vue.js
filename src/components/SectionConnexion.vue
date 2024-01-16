<template>
    <div class="connexion-view">
      <h3>Affiche des films</h3>
      <div class="card-container">
      <!-- Insérez le contenu de vos cartes ici -->
      <div class="card">
        <div id="login-form" v-if="!loggedIn">
            
            <form @submit.prevent="login">
              <h1>{{ title }}</h1>
              <p>Remplissez ce formulaire pour vous connecter.</p>
              <hr>
            
        
              <input type="text" v-model="email" placeholder="Entrez votre courriel" id="email" name="email" required>
            
              <label for="psw"><b>Mot de passe</b></label>
              <input type="password" v-model="password" placeholder="Entrez votre mot de passe" id="psw" name="psw" required>
            
              <p><button type="submit">Se connecter</button></p>
              <p><button @click="register">S'inscrire</button></p>
        
              <p>{{ error }}</p>
            </form>
            </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SectionConnexion'
  };

import FilmService from "../services/FilmService"
import Film from "./MoviesView.vue"

  export default {

    component:{Film},
    mounted(){
      this.$refs.boutonrecherche.focus()
    },
    
    data () {
       return { 
       query: '',
       films: []
       
      }
      
    },


    watch: {

     async query(){
        this.films = await FilmService.search(this.query);
      }

    },


    methods: {

      async DetailView (){
        this.films = await FilmService.search(this.query);
      },
      
    numberOfStars(film){ 
      return '⭐'.repeat(Math.floor(film.metascore/100*5))
    }
    },
        computed: {
      filterFilms () {
        if (this.query === '') return this.films;

        return this.films.filter((item) => {
          return item.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1
        })
      }
    }
  }

  
  </script>
  
  <style scoped>

.connexion-view {
  background-color: aliceblue;
  width: 100%;
  position: absolute;
  margin-top: 50px;
  height: 400px;
  display: flex;
  flex-direction: column; /* Pour aligner les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
}

.home-view h3 {
  color: rgb(159, 17, 17);
  text-align: center;
  margin-top: 25px;
}

.card-container {
  display: flex;
  justify-content: center; /* Centre les cartes horizontalement */
  width: 50%;
  margin-top: 75px;
}

.card {
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 200px;
}
</style>