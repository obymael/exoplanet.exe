<template>
    <div class="intermediate-container">
      <section id="index-section">
        <h1>Intermediate Level</h1>
        <div class="links-wrapper">
            <h5>Lessons:</h5>
            <div class="links-to-lessons">
                <a href="#lesson-1">1. Types of exoplanets</a>
                <a href="#lesson-2">2. Comparing exoplanets to our Earth</a>
                <a href="#lesson-3">3. The Habitable Zone</a>
                <a href="#lesson-4">4. Significance of exoplanets</a>
                <a href="#lesson-5">5. Planetary form and evolution</a>
            </div>
        </div>
      </section>
      <section id="lesson-1">
        <h2>Lesson 1:</h2>
      </section>
      <section id="lesson-2">
        <h2>Lesson 2:</h2>
      </section>
      <section id="lesson-3">
        <h2>Lesson 3:</h2>
      </section>
      <section id="lesson-4">
        <h2>Lesson 4:</h2>
      </section>
      <section id="lesson-5">
        <h2>Lesson 5:</h2>
      </section>
    </div>
</template>
  
<style scoped>
section {
min-height: 100vh;
padding: 10rem 9% 2rem;
display: flex; /* Added for vertical alignment */
flex-direction: column; /* Stack children vertically */
justify-content: center; /* Center content vertically */
align-items: flex-start; /* Align items to the start */
}

h1 {
    font-size: 4rem;
    color: var(--color-heading);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

h5 {
    font-size: 2rem;
    color: rgb(234, 217, 248);
}

#index-section{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid yellow;
    gap: 2rem;
    padding-top: 7rem !important;
}

.links-wrapper{
    background: linear-gradient(rgba(140,222,227,0.4), rgba(219,195,242,0.4));
    padding: 1.5rem 3rem;
    border: 1px solid pink;
}
.links-to-lessons{
    display: flex;
    flex-direction: column;
}

.links-to-lessons a{
    font-size: 1.5rem;
    color: var(--color-light-text);
    text-decoration: none;
    transition: all 1s;
}

.links-to-lessons a:hover{
    text-decoration: underline wavy aliceblue;
    color: rgb(234, 217, 248);
    transform: scale(1.03);
}

h2 {
font-size: 3rem;
}
</style>
  