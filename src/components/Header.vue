<template>
    <div class="header">
      <h1>Bienvenue sur MovieMania !</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Header',
    // Autres configurations
  };
  </script>
  
  <style>
  .header {
  position: relative;
  width: 100%;
  height: 491px;
  background-image: url('../assets/img/Venom.webp');
  background-size: cover;
  background-position: center;
}

.header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 50%;
}

h1 {
  position: absolute;
    top: 45%;
    left: 16%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 54px;
    margin-right: 516px;
}
  </style>