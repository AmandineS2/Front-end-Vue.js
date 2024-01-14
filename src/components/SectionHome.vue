<template>
    <div class="home-view1">
      <h3>Texte à afficher dans SectionHome</h3>
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
  width: 100%; /* Pour que le header prenne toute la largeur de la page */
  position: absolute;
  margin-top: 251px;
  height: 330px;
}

.home-view h3 {
  color: rgb(159, 17, 17);
  text-align: center;
}
</style>