<template>
    <div class="navbar">
      <div class="nav-item"><router-link to="/HomeView" class="nav-link">Accueil</router-link></div>
      <div class="nav-item"><router-link to="/MoviesView" class="nav-link">Films</router-link></div>
      <div class="nav-item"><router-link to="/ActorsView" class="nav-link">Acteurs</router-link></div>
      <div class="nav-item"><router-link to="/CategorieView" class="nav-link">Catégories</router-link></div>
      <div class="nav-item"><router-link to="/ConnexionView" class="nav-link">Connexion</router-link></div>
    </div>
</template>
  
  <style>
  .navbar {
    display: flex;
    background-color: red;
    justify-content: flex-end; /* Pour ajouter de l'espace entre les éléments */
    padding: 20px; /* Pour un peu d'espace à l'intérieur de la barre de navigation */
  }
  
  .nav-item {
    margin-right: 60px; /* Ajoute de l'espace entre les éléments */
    margin-top: 5px;
  }
  
  .nav-link {
    text-decoration: none; /* Pour enlever le soulignement des liens */
    color: white; /* Pour changer la couleur du texte des liens */
  }
  </style>