<template>
    <div class="body-container">
        <header class="header"></header>
        <div class="welcome-container">
            <h1 class="title-text">Learn with Eclipse!</h1>
            <p class="intro-text">We have different learning levels which you can choose from below.</p>
            <p class="intro-text">Each level will provide you with fun engaging games and 
            challenges related to the lessons.</p>            
        </div>
        <div class="cards-container">
            <div class="single-card-wrapper"></div>
            <div class="single-card-wrapper"></div>
            <div class="single-card-wrapper"></div>
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
    color: #B3C9D6;
    font-size: 3rem;
}
.intro-text{
    color: #DDF3FF;
}

.cards-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 7rem 9% 2rem;
    width: 100%;
}

.single-card-wrapper{
    border: 1px solid red;
}

</style>