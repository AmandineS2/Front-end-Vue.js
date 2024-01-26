<template>
  <div class="MovieInactive-view">
    <h3>Affiche des films</h3>
    <div class="search-tab">
      <input type="text" placeholder="Rechercher des films...">
      <button @click="searchMovies">Rechercher</button>
    </div>
    <div class="card-container-movies-Inactive">
      <!-- Insérez le contenu de vos cartes ici -->
      <div class="card">
        <img src="../assets/img/movie1.webp" alt="Description de l'image 1">
      </div>
      <div class="card">
        <img src="../assets/img/movie2.png" alt="Description de l'image 2">
      </div>
      <div class="card">
        <img src="../assets/img/movie3.jpeg" alt="Description de l'image 3">
      </div>
      <div class="card">
        <img src="../assets/img/movie4.jpg" alt="Description de l'image 4">
      </div>
    </div>
    <div class="pagination">
      <button v-for="page in pageCount" :key="page" @click="setPage(page)">
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionMoviesInactive',
  data() {
    return {
      movies: [], // Contiendra la liste complète des films
      searchQuery: '', // Terme de recherche saisi par l'utilisateur
      currentPage: 1, // Page actuelle
      moviesPerPage: 4, // Nombre de films par page
    };
  },
  computed: {
    // Calcule les films à afficher en fonction de la page actuelle
    displayedMovies() {
      const start = (this.currentPage - 1) * this.moviesPerPage;
      const end = start + this.moviesPerPage;
      return this.movies.slice(start, end);
    },
    // Calcule le nombre total de pages
    pageCount() {
      return Math.ceil(this.movies.length / this.moviesPerPage);
    },
  },
  methods: {
    // Récupère les données de l'API et les stocke dans la variable movies
    fetchMovies() {
      fetch('http://127.0.0.1:8000/api/movies')
        .then(response => response.json())
        .then(data => {
          this.movies = data;
        });
    },
    // Met à jour la page actuelle
    setPage(page) {
      this.currentPage = page;
    },
    // Logique de recherche des films
    searchMovies() {
      // Mettez en œuvre la logique de recherche en utilisant this.searchQuery
    }
  },
  mounted() {
    this.fetchMovies(); // Appelle la méthode fetchMovies lors du montage du composant
  }
};
</script>
  
  <style scoped>

.MovieInactive-view {
  background-color: aliceblue;
  width: 100%;
  position: absolute;
  margin-top: 18px;
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

.card-container-movies-Inactive {
  display: flex;
  justify-content: center; /* Centre les cartes horizontalement */
  width: 50%;
  margin-top: 19px;
}

.card {
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 213px;
  
}

img {
  width: 127px;
  margin-top: -5px;
}
.search-tab {
  margin-bottom: 20px;
}

.search-tab input {
  padding: 8px;
  margin-right: 10px;
}

.search-tab button {
  padding: 8px 12px;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: #f2f2f2;
  cursor: pointer;
}

.pagination button.active {
  background-color: #e0e0e0;
}
</style>