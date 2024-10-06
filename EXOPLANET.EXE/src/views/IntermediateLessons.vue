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
        <div class="lesson-container">
          <div class="lesson-text">
          <h2>Lesson 1: Types of exoplanets</h2>
          <div class="lesson-content">
            <p>
            Just like planets in our solar system, exoplanets come in different types based on their size,
            composition, and how far they are from their stars. There are 5 main types of exoplanets. They are
            called gas giants, Neptunian planets, super-Earths, terrestrial planets, and hot Jupiters.
            </p>
            <p>
            Click below to learn more about the different types of exoplanets, or to test your knowledge
            with a game.
            </p>
          </div>
          <div class="buttons">
            <a href="#lesson-1-full">
              <button class="button">Learn more</button>
            </a>
          </div>
          <div class="button">
            <a href="#game-1">
              <button class="button">Test your knowledge</button>
            </a>
          </div>
        </div>
        <div class="lesson-image">
            <img src="@/assets/gas-giant.jpg" alt="Gas Giant type exoplanet image">
        </div>
    </div>
      </section>
      <section id="lesson-2" class="even-lesson">
        <div class="lesson-container">
        <div class="lesson-text">
        <h2>Lesson 2: Comparing exoplanets to our Earth</h2>
        <div class="lesson-content">
        <p>
          Did you know that no exoplanet found so far is exactly like Earth?
          They can be different from our Earth in many ways: in their size, distance from their star, atmosphere,
          and even their potential for life. Today, scientists are still searching for one that might be similar
          to Earth and could potentially support life!
        </p>
        <p>
          Click below to learn more about the differences between Earth and exoplanets, or to test your knowledge
          with a game.
        </p>
        </div>
        <div class="buttons">
          <a href="#lesson-2-full">
            <button class="button">Learn more</button>
          </a>
        </div>
        <div class="button">
          <a href="#game-2">
            <button class="button">Test your knowledge</button>
          </a>
        </div>
    </div>
    <div class="lesson-image">
        <img src="@/assets/planet-image-3.jpg" alt="Exoplanet image">
    </div>
</div>
    </section>
      <section id="lesson-3" class="odd-lesson">
        <div class="lesson-container">
        <div class="lesson-text">
        <h2>Lesson 3: The Habitable Zone</h2>
        <div class="lesson-content">
        <p>
          Exploring the habitable zone is like being a space detective, looking for the best places for life in
          the universe!
          The "Habitable Zone" is like the Goldilocks zone of space. Imagine you're Goldilocks from the fairy tale,
          but instead of testing porridge, you're exploring planets. In the story, some porridge was too hot, some 
          was too cold, but one was just right. Well, planets are kind of the same!
        </p>
        <p>
          Click below to learn more about what makes Earth so special and what might make an exoplanet a good
          "Habitable Zone", or to test your knowledge with a game.
        </p>
        </div>
        <div class="buttons">
          <a href="#lesson-3-full">
            <button class="button">Learn more</button>
          </a>
        </div>
        <div class="button">
          <a href="#game-3">
            <button class="button">Test your knowledge</button>
          </a>
        </div>
    </div>
        </div>
      </section>
      <section id="lesson-4" class="even-lesson">
        <h2>Lesson 4: Significance of exoplanets</h2>
        <div class="lesson-content">
        <p>
          Exoplanets are like a door to new worlds beyond our imagination. They help us understand more about the
          universe and even our own planet, Earth! Exoplanets are like cosmic treasures. They give us clues about
          how planets form, the possibility of life beyond somewhere else out there in the universe, and what else
          might be out there for us to discover.
        </p>
        <p>
          Click below to find out more about why exoplanets are so important, or to test your knowledge with a game.
        </p>
        </div>
        <div class="buttons">
          <a href="#lesson-4-full">
            <button class="button">Learn more</button>
          </a>
        </div>
        <div class="button">
          <a href="#game-4">
            <button class="button">Test your knowledge</button>
          </a>
        </div>
      </section>
      <section id="lesson-5" class="odd-lesson">
        <h2>Lesson 5: Planetary form and evolution</h2>
        <div class="lesson-content">
        <p>
            Planetary formation and evolution is like watching a planet's life story unfold. It's all about how planets
            are born, how they change over time, and how they eventually grow into the worlds we see today. Not only
            is each exoplanet's story unique and interesting, but understanding how planets form, evolve, and grow
            old also gives us insight into how our own Earth came to be, and how other planets might turn out in
            the future.
        </p>
        <p>
          Click below to learn more about the evolution and lifecycle of a planet, or to test your knowledge with
          a game.
        </p>
        </div>
        <div class="buttons">
          <a href="#lesson-5-full">
            <button class="button">Learn more</button>
          </a>
        </div>
        <div class="button">
          <a href="#game-5">
            <button class="button">Test your knowledge</button>
          </a>
        </div>
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
.lesson-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
}
.odd-lesson, .even-lesson {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
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
.lesson-text {
    max-width: 60%;
    padding-right: 1rem;
}
.lesson-image img {
    padding-top: 3rem;
    min-height: 50%;
    max-height: 70%;
    height: auto;
    border-radius: 8pm;
}
.buttons {
    padding-top: 10px;
    padding-bottom: 10px;
}
.button {
    background: linear-gradient(rgba(103, 130, 247, 0.4), rgba(65, 5, 94, 0.4));
    color: #13112E;
    border-color: #13112E;
    font-size: 2rem;
    border-radius: 25px;
}
.button:hover {
    background-color: #b7abc2;
    color: #b7abc2;
    transform: scale(1.03);
}

@media (max-width: 768px) { /* for small screens */
    .lesson-container {
        flex-direction: column;
        text-align: center;
    }
    .lesson-text {
        max-width: 100%;
        padding-right: 0;
    }
    .lesson-image img {
        max-width: 80%;
        margin-top: 1rem;
    }
}


</style>
  