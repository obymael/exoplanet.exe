<template>
    <div>
      <header class="header p-3">
        <div class="logo">
          <!-- Link to home page once implemented -->
           <!-- <router-link to="/">Home</router-link> -->
            <img src="../assets/logo.png" alt="Eclipse Logo" />
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  }
  </script>
  
    <style scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #13112E;
  }
   .logo img {
    max-width: 100%;
    height: auto;
    max-height: 70px;
  }
  </style>
  