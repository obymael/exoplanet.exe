<template>
    <div class="intermediate-container">
      <section id="index-section">
        <div class="border-index border-index-left">
            <img src="@/assets/planet-image-1.jpg" alt="planet" class="planet-1-image">
        </div>
        <div class="center-index">
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
        </div>
        <div class="border-index border-index-right">
            <img src="@/assets/planet-image-2.jpg" alt="planet" class="planet-2-image">
        </div>
      </section>
      <section id="lesson-1" class="odd-lesson">
        <h2>Lesson 1: Types of exoplanets</h2>
        <div class="lesson-content">
            <p>Just like planets in our solar system, exoplanets come in different types based on their size, composition, and how far they are from their stars. There are 5 main types of exoplanets: gas giants, Neptunian planets, super-Earths, terrestrial planets, and hot Jupiters.</p>
            <p>Click to learn more about the different types of exoplanets.</p>
            </div>
            <div class="button">
            <a href="#lesson-1-full">
                <button class="buttons">Learn more</button>
            </a>
            </div>
            <div class="button">
            <a href="#game-1">
                <button class="buttons">Test your knowledge</button>
            </a>
            </div>
      </section>
      <section id="lesson-2" class="even-lesson">
        <h2>Lesson 2: Comparing exoplanets to our Earth</h2>
        <p>When comparing exoplanets to Earth, there are a few important things to look at: size, distance from their star, atmosphere, and potential for life. While no exoplanet found so far is exactly like Earth, scientists are continuing to search for one that might be similar and could potentially support life! </p>
      </section>
      <section id="lesson-3" class="odd-lesson">
        <h2>Lesson 3: The Habitable Zone</h2>
      </section>
      <section id="lesson-4" class="even-lesson">
        <h2>Lesson 4: Significance of exoplanets</h2>
      </section>
      <section id="lesson-5" class="odd-lesson">
        <h2>Lesson 5: Planetary form and evolution</h2>
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
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 7rem !important;
}

.planet-2-image{
    margin-left: 1rem;
    max-width: 8rem;
}

.planet-1-image{
    max-height: 10rem;
}

.planet-1-image,
.planet-2-image{
    border-radius: 50%;
    background-color: #6b5c987c ;
    box-shadow: 0 0 7rem #6b5c987c;
    animation: floatImage 4s ease-in-out infinite;
}


@keyframes floatImage{
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-5rem);
    }
    100%{
        transform: translateY(0);
    }
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

.odd-lesson, .even-lesson {
    text-align: left;
    vertical-align: top;
    padding-top: 3rem !important;
    flex-direction: column;
    font-size: 1.5rem;
}

.odd-lesson {
    background-color: #b7abc2;
    color: #4B3066;
}
.even-lesson {
    background-color: #45427A;
    color: #DBC3F2;
}
.lesson-content {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
}
.button {
    padding-top: 10px;
    padding-bottom: 10px;
}
.buttons {
    background-color: #EEFCFF;
    color: #13112E;
    border-color: #13112E;
    font-size: 2rem;
    border-radius: 25px;
}


</style>
  