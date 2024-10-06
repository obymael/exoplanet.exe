<template>
    <div class="game-container">
      <h1>Exoplanet or Celebrity Baby?</h1>
  
      <!-- Display the current question -->
      <div v-if="!submitted">
        <div class="question">
          <p>{{ questions[currentQuestionIndex].question }}</p>
          <button @click="recordAnswer(true)" :class="{ selected: answers[currentQuestionIndex] === true }">Exoplanet</button>
          <button @click="recordAnswer(false)" :class="{ selected: answers[currentQuestionIndex] === false }">Celebrity Baby</button>
        </div>
  
        <!-- Navigation buttons -->
        <div class="navigation">
          <button @click="previousQuestion" :disabled="currentQuestionIndex === 0">Previous</button>
          <button @click="nextQuestion" :disabled="answers[currentQuestionIndex] === null || currentQuestionIndex === questions.length - 1">Next</button>
        </div>
  
        <!-- Submit button, shown when all questions are answered -->
        <button v-if="allAnswered" @click="submitAnswers" class="submit-button">Submit Answers</button>
      </div>
  
      <!-- Show results after submission -->
      <div v-if="submitted" class="results">
        <h2>Results</h2>
        <ul>
          <li v-for="(question, index) in questions" :key="index">
            <p>{{ question.question }}</p>
            <p>Your answer: {{ answers[index] ? 'Exoplanet' : 'Celebrity Baby' }} - <span :class="{ correct: isCorrect(index), incorrect: !isCorrect(index) }">{{ isCorrect(index) ? 'Correct' : 'Incorrect' }}</span></p>
            <p class="darker-p">{{ questions[index].extraText }}</p>    
        </li>
        </ul>
        <h3>You got {{ score }} out of {{ questions.length }} correct!</h3>
        <div class="end-options-nav">
          <div class="end-button">
            <router-link to="/IntermediateLessons">
            <button class="button">Back to Lesson</button>
            </router-link>
          </div>
          <div class="end-button">
            <router-link 
            :to="{ path: '/PlanetName', 
            query: { reset: Date.now() } }" 
            :key="Date.now()">
            <button class="button">Play Again</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        allQuestions: [
          { question: "Kepler-452b", answer: true, extraText: "This planet is sometimes called 'Earth’s cousin' because it's similar in size to Earth and orbits a star like the Sun."},
          { question: "X Æ A-Xii", answer: false, extraText: "X Æ A-Xii is the child of Elon Musk and Grimes." },
          { question: "Raddix Madden", answer: false, extraText: "Raddix Madden is the child of Cameron Diaz and Benji Madden."},
          { question: "Bellerophon", answer: true, extraText: "Bellerophon (51 Pegasi b) is the first planet we found orbiting a star like the Sun, and it's super-hot because it's so close to its star." },
          { question: "Pilot Inspektor", answer: false, extraText:"Pilot Inspektor is the child of Jason Lee and Beth Riesgraf."},
          { question: "Audio Science", answer: false, extraText: "Audio Science is the child of Shannyn Sossamon and Dallas Clayton." },
          { question: "Barnard's Star b", answer: true, extraText: "Barnard’s Star b is a frozen, rocky planet that orbits one of the closest stars to Earth." },
          { question: "Stormi Webster", answer: false, extraText: "Stormi Webster is the child of Kylie Jenner and Travis Scott." },
          { question: "Gravity", answer: false, extraText: "Gravity is the child of Lucky Blue Smith and Stormi Bree."},
          { question: "Rocket Zot", answer: false, extraText: "Rocket Zot is the child of Sam Worthington and Lara Bingle."},
          { question: "Osiris", answer: true, extraText: "Osiris (HD 209458 b)  is a big, very hot planet, and it's famous because scientists saw its atmosphere blowing away like a tail behind it."},
          { question: "Tau Ceti e", answer: true, extraText: "Tau Ceti e is in a star system close to Earth and is in the 'habitable zone,' meaning it could have the right temperature for water. "},
          { question: "TRAPPIST-1e", answer: true, extraText: "TRAPPIST-1e is part of a family of seven planets, all close to their star, and some of them could even have water."},
          { question: "Kulture Kiari Cephus", answer: false, extraText: "Kulture Kiari Cephus is the child of Cardi B and Offset." },
          { question: "Bear Blaze", answer: false, extraText: "Bear Blaze is the child of Kate Winslet and Ned Rocknroll."},
          { question: "Proxima Centauri b", answer: true, extraText: "This planet is the closest one to Earth outside of our solar system, orbiting the star next to the Sun!"},
          { question: "WASP-12b", answer: true, extraText: "This planet is really close to its star and is being pulled apart by its heat, making it look like it's melting!"},
          { question: "Reign Aston Disick", answer: false, extraText: "Reign Aston Disick is the child of Kourtney Kardashian and Scott Disick."},
          { question: "Teegarden b", answer: true, extraText: "Teegarden b is an Earth-sized planet in a nearby star system that could be a good place to search for signs of life."},
          { question: "Gliese 581g", answer: true, extraText: "Scientists think Gliese 581g might be a planet where life could exist because it’s not too hot or cold."}
        ],
        answers: [],
      score: null,
      currentQuestionIndex: 0,
      submitted: false,
    };
  },
  computed: {
    allAnswered() {
      return this.answers.every(answer => answer !== null);
    }
  },
  watch: {
    '$route.query.reset'() {
      this.resetGame();
    }
  },
  methods: {
    recordAnswer(answer) {
      this.answers[this.currentQuestionIndex] = answer;
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    submitAnswers() {
      const correctAnswers = this.questions.filter((q, index) => q.answer === this.answers[index]).length;
      this.score = correctAnswers;
      this.submitted = true;
    },
    isCorrect(index) {
      return this.questions[index].answer === this.answers[index];
    },
    resetGame() {
      this.selectRandomQuestions(); // Select new random questions
      this.answers = Array(this.questions.length).fill(null);
      this.score = null;
      this.currentQuestionIndex = 0;
      this.submitted = false;
    },
    selectRandomQuestions() {
      // Shuffle the allQuestions array and pick the first 10
      const shuffled = this.allQuestions.sort(() => 0.5 - Math.random());
      this.questions = shuffled.slice(0, 10);
    }
  },
  created() {
    this.selectRandomQuestions(); // Select random questions when the component is created
  }
};
  </script>
  
  <style scoped>
  .game-container {
    padding: 7rem;
    font-family: Arial, sans-serif;
  }

  h1{
    color: var(--color-heading);
    font-size: 4rem;
  }
  .question {
    margin: 10px 0;
    color: blanchedalmond;
    font-size: 2.5rem;
    gap: 1rem;
  }

  .question button{
    border: 2px solid blanchedalmond;
    padding: 1rem 4rem;
    margin: 1rem 4rem;
    background-color: azure;
    color: rgb(3, 38, 49);
    transition: all 0.5s;
  }

  .question button:hover{
    background-color: rgb(3, 38, 49);
    color: azure;
    transform: scale(1.03);
  }

.question button.selected {
  background-color: rgb(3, 38, 49);
  color: azure;
  border: 2px solid lightblue;
  transform: scale(1.03);
}

.navigation {
    padding: 1rem;
}

.navigation button {
    padding: 0.5rem 1.5rem;
    margin: 0 1rem;
    background-color: blanchedalmond;
    color: rgb(16, 62, 75);
}

.navigation button:disabled{
  background-color: rgb(197, 194, 194);
  color: grey;
}
  .submit-button {
    margin-top: 20px;
    background-color: rgb(16, 62, 75);
    color: azure;
    padding: 1rem 2rem;
  }

h2{
  color: var(--color-heading);
  font-size: 2rem;
}
  .results {
    margin-top: 20px;
  }
.results p{
  color: var(--color-light-text);
  line-height: 2rem;
}
.results .darker-p{
    color:rgb(43, 146, 174);
}

h3{
  font-size: 2rem;
  color: var(--color-heading);
}

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  .correct {
    color: green;
  }
  .incorrect {
    color: red;
  }
  .selected {
    background-color: lightblue;
  }

.end-options-nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.end-button button{
  padding: 1rem 2rem;
  margin: 0 2rem;
  background-color: blanchedalmond;
  color:rgb(16, 62, 75);
  transition: all 0.5s;
}

.end-button button:hover{
  color: blanchedalmond;
  background-color: rgb(16, 62, 75);
  transform: scale(1.03);
}
  </style>
  