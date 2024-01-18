<template>
    <div class="connexion-view" >
      <h3>Affiche des films</h3>
      <div class="card-container">
      <!-- Insérez le contenu de vos cartes ici -->
      <div class="card">
        <div id="login-form" v-if="!loggedIn">
            
            <form @submit.prevent="_login">
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
  


import { useCounterStore} from "@/stores/counter.js"
import { mapState, mapActions } from "pinia";
import MoviesView from "../views/MoviesView.vue";
import UserService from '@/services/UserService.js'

export default {
  components: {MoviesView},
    data () {
       return { 
        title: 'Authentification',
        error:'',
       
      }
      
    },
    
    computed: {
        // bind this.loggedIn to useCounterStore().loggedIn
        ...mapState(useCounterStore, ["loggedIn"])
    },
   methods:{ 
    // submitLogin(){
    //   const loginMessage = this.login({
      
    //     user: {
    //       email: this.email,
    //       password: this.password
    //     }
    //   })

    //   this.error ='';
    //   if (!loginMessage) {
    //     this.error = 'Mauvais identifiants';
    //   }
    // }, 
    ...mapActions(useCounterStore, ["login"]),


    async register () {
      this.error = null;
      try {
        const response = await UserService.register({
          email: this.email,
          username: this.email,
          plainPassword: this.password,
          firstname: 'John',
          lastname: 'Smith'
        })
        const session = useCounterStore();
        session.login({ user: response.user, token: response.token });
        this.$router.push('/HomeView') // Redirection vers la page HomeView.vue
        } catch (error) {
            this.error = error.toString()
         }
    },

    async _login () {
      this.error = null;
      try {
        const response = await UserService.login({ username: this.email, password: this.password })
        const session = useCounterStore();
        console.log(response.token )
        session.login({ token: response.token });
        this.$router.push('/HomeView'); // Redirection vers la page HomeView.vue
    } catch (error) {
            this.error = error.toString()
         }
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