<template>
    <div class="body-container">
      <header class="header"></header>
      <div class="welcome-container">
        <h1 class="title-text">Learn with Eclipse!</h1>
        <p class="intro-text">We have different learning levels which you can choose from below.</p>
        <p class="intro-text">Each level will provide you with fun engaging games and challenges related to the lessons.</p>            
      </div>
      <div class="cards-wrapper">
        <div class="card-container">
        <div class="single-card-box">
                <img src="@/assets/beginner.jpg" alt="galaxy">
                <div class="card-layer">
                    <h4>Beginner Level</h4>
                    <p>For those new and want a very introductory exploration into exoplanets.</p>
                    <a href="#">Let's go</a>
                </div>
            </div>
        <div class="single-card-box">
            <img src="@/assets/intermediate.jpg" alt="galaxy">
            <div class="card-layer">
                <h4>Intermediate Level</h4>
                <p>For those with some prior knowledge that want to deep diver into the world of exoplanets.</p>
                <router-link to="/IntermediateLessons">Let's go</router-link>
            </div>
        </div>
        <div class="single-card-box">
            <img src="@/assets/advanced.jpg" alt="galaxy">
            <div class="card-layer">
                <h4>Advanced Level</h4>
                <p>Want to challenge yourself? Impress us and try our advanced level.</p>
                <a href="#">Let's go</a>
            </div>
        </div>
      </div>
      </div>  
      <footer class="footer"></footer>
    </div>
  </template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // Any logic you need can be placed here.
  }
});
</script>


<style scoped>
.welcome-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 7rem;
}
h1 {
    color: var(--color-heading);
    font-size: 3rem;
}
.intro-text{
    color: var(--color-light-text);
}

.cards-wrapper{
    margin-top: 3rem;
    margin-bottom: 10rem;
}
.card-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 2.5rem;
    margin: 2rem;
    padding: 0.5rem;
}

.card-container .single-card-box{
    position: relative;
    border-radius: 2rem;
    box-shadow: 0 0 1 var(--bg-color);
    overflow: hidden;
    display: flex;
    border: 1.5px solid #E25CDC;
    max-height: 250px;
}

.single-card-box img{
    width: 100%;
    transition: all 0.5s;
}

.single-card-box:hover img{
    transform: scale(1.1);
}

.single-card-box .card-layer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(19,17,46,.5), #1C265A);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 4rem;
    text-align: center;
    transform: translateY(100%);
    transition: all 0.5s ease-in-out;
}

.single-card-box:hover .card-layer{
    transform: translateY(0);
    cursor: pointer;
}

.card-layer h4{
    font-size: 2rem;
    color: var(--color-light-text);
}

.card-layer p{
    font-size: 1rem;
    margin: 10px 0 1rem;
    color: var(--color-light-text);
}

.card-layer a{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--color-light-text);
    transition: all 1s;
}

.card-layer a:hover{
    background-color: #E25CDC;
    transform: scale(1.03);
}

</style>