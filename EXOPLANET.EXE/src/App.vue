<template>
  <div id="app">
    <div class ="content">
      <HeaderComponent />
      <!-- Render the content of the current page view -->
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  flex: 1; /* Note: This makes the content take up space, pushes the footer down*/
}
header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}
footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
