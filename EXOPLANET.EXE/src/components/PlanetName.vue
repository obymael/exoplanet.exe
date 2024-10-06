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
          { question: "Kepler-452b", answer: true },
          { question: "X Æ A-Xii", answer: false },
          { question: "Raddix Madden", answer: false },
          { question: "Bellerophon", answer: true },
          { question: "Pilot Inspektor", answer: false },
          { question: "Audio Science", answer: false },
          { question: "Barnard's Star b", answer: true },
          { question: "Stormi Webster", answer: false },
          { question: "Gravity", answer: false},
          { question: "Rocket Zot", answer: false},
          { question: "Osiris", answer: true},
          { question: "Tau Ceti e", answer: true},
          { question: "TRAPPIST-1e", answer: true},
          { question: "Kulture Kiari Cephus", answer: false},
          { question: "Bear Blaze", answer: false},
          { question: "Proxima Centauri b", answer: true},
          { question: "WASP-12b", answer: true},
          { question: "Reign Aston Disick", answer: false},
          { question: "Teegarden b", answer: true},
          { question: "Gliese 581g", answer: true}
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
  