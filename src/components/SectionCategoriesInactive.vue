<template>
    <div class="Categories-view">
      <h3>Affiche des acteurs</h3>
      <div class="card-container-Categories">
        <!-- Insérez le contenu de vos cartes ici -->
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .Categories-view {
    background-color: aliceblue;
  width: 100%;
  position: absolute;
  margin-top: 18px;
  height: 400px;
  display: flex;
  flex-direction: column; /* Pour aligner les éléments verticalement */
  align-items: center; /* Centre les éléments horizontalement */
  }
  
  .Categories-view h3 {
    color: rgb(159, 17, 17);
    text-align: center;
    margin-top: 25px;
  }
  
  .card-container-Categories {
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