<template>
    <div class="game-container">
      <h1>True or False Game</h1>
  
      <!-- Display the current question -->
      <div v-if="!submitted">
        <div class="question">
          <p>{{ questions[currentQuestionIndex].question }}</p>
          <button @click="recordAnswer(true)" :class="{ selected: answers[currentQuestionIndex] === true }">True</button>
          <button @click="recordAnswer(false)" :class="{ selected: answers[currentQuestionIndex] === false }">False</button>
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
            <p>Your answer: {{ answers[index] ? 'True' : 'False' }} - <span :class="{ correct: isCorrect(index), incorrect: !isCorrect(index) }">{{ isCorrect(index) ? 'Correct' : 'Incorrect' }}</span></p>
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
            :to="{ path: '/TrueOrFalse', 
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
        questions: [
          { question: "KELT-9b is hotter than our sun.", answer: false },
          { question: "Kepler-186f is located in the habitable zone, making it possible for liquid water to exist on its surface.", answer: true },
          { question: "Gliese 1214 b is a rocky exoplanet similar to Earth.", answer: false },
          { question: "Earth is located in the Sun’s habitable zone.", answer: true },
          { question: "All exoplanets are larger than Earth.", answer: false },
          { question: "Every exoplanet discovered has a solid surface like Earth.", answer: false },
          { question: "Some exoplanets are found orbiting more than one star.", answer: true },
          { question: "A 'super-Earth' is a type of exoplanet that is more massive than Earth but still rocky.", answer: true },
          { question: "Exoplanets with the exact same conditions as Earth have already been found.", answer: false},
          { question: "There are no known exoplanets with moons.", answer: false}
        ],
        answers: Array(10).fill(null),
        score: null,
        currentQuestionIndex: 0, // Track the current question being shown
        submitted: false, // Track if answers have been submitted
      };
    },
    computed: {
      allAnswered() {
        return this.answers.every(answer => answer !== null); // Check if all questions have been answered
      }
    },
    watch: {
  '$route.query.reset'() {
    // Perform any necessary reset logic here
    this.resetGame();
    }
  },
    methods: {
      recordAnswer(answer) {
        this.answers[this.currentQuestionIndex] = answer; // Record the answer for the current question
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
        this.submitted = true; // Mark the quiz as submitted
      },
      isCorrect(index) {
        return this.questions[index].answer === this.answers[index]; // Check if the answer is correct
      },
      resetGame() {
        // Logic to reset the state of the game
        this.answers = Array(10).fill(null);
        this.score = null;
        this.currentQuestionIndex = 0;
        this.submitted = false;
    },
    },
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
  