<template>
  <div class="home-view1">
    <h3>Affiche des films</h3>
    <div class="card-container">
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
  </div>
</template>
  
  <script>
  export default {
    name: 'SectionHome'
  };
  </script>
  
  <style scoped>

.home-view1 {
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
  height: 213px;
  
}

img {
  width: 127px;
  margin-top: 10px;
}
</style>