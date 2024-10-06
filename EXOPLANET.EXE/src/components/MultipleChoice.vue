<template>
  <div class="game-container">
    <h1>Multiple Choice Quiz</h1>

    <!-- Show the current question only if the quiz isn't submitted -->
    <div v-if="!submitted">
      <div class="question">
        <p>{{ currentQuestion.question }}</p>
        <ul>
          <li v-for="(choice, index) in currentQuestion.choices" :key="index">
            <button
              @click="selectAnswer(index)"
              :class="{ selected: selectedAnswer === index }"
            >
              {{ choice }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Navigation buttons -->
      <div class="navigation">
        <button @click="previousQuestion" :disabled="currentQuestionIndex === 0">Previous</button>
        <button @click="nextQuestion" :disabled="answers[currentQuestionIndex] === null || currentQuestionIndex === questions.length - 1">Next</button>
      </div>

      <!-- Submit button, visible when all questions are answered -->
      <button v-if="allAnswered" @click="submitAnswers" class="submit-button">Submit Answers</button>
    </div>

    <!-- Display results after submission -->
    <div v-if="submitted" class="results">
      <h2>Results</h2>
      <ul>
        <li v-for="(question, index) in questions" :key="index">
          <p>{{ question.question }}</p>
          <p>
            Your answer: {{ question.choices[answers[index]] }} -
            <span :class="{ correct: isCorrect(index), incorrect: !isCorrect(index) }">
              {{ isCorrect(index) ? 'Correct' : 'Incorrect' }}
            </span>
          </p>
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
            :to="{ path: '/MultipleChoice', query: { reset: Date.now() } }" 
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
        {
          question: 'What is the "Habitable Zone" often compared to?',
          choices: ['The temperature zone', 'The Goldilocks zone', 'The comfort zone', 'The sweet spot'],
          correctAnswer: 1,
        },
        {
          question: "Why is the Habitable Zone important for finding alien life?",
          choices: ["It is where stars are hottest", "It is the area where liquid water can exist on a planet's surface", "It is the only place where planets can orbit stars", "It contains the most stars"],
          correctAnswer: 1,
        },
        {
          question: "What happens to planets that are too close to their star?",
          choices: ["They explode", 'It gets "eaten up" by their star', "They become too hot, causing any water to boil away", "It moves further away from the star"],
          correctAnswer: 2,
        },
        {
          question: "What is the consequence for planets that are too far from their star?",
          choices: ["They become too cold, causing water to turn to ice", "They experience frequent meteor impacts", "They have high levels of cosmic radiation", "They develop thick atmospheres"],
          correctAnswer: 0,
        },
        {
          question: "Why is Earth considered to be in the habitable zone?",
          choices: ["It has an abundance of minerals", "It is the only planet with liquid water", "It has a diverse range of ecosystems", "It maintains a climate suitable for life due to its distance from the Sun"],
          correctAnswer: 3,
        },
        {
          question: "What are scientists looking for when they explore the habitable zones of other stars?",
          choices: ["Planets that could have conditions for the possibility of life", "Planets that have been recently discovered", "Celestial bodies with similar characteristics to gas giants", "Exoplanets with the largest sizes"],
          correctAnswer: 0,
        },
        {
          question: "How do scientists describe their search for life in the habitable zone?",
          choices: ["As a quest for cosmic phenomena", "As a methodical study of stellar atmospheres", "As a voyage to distant galaxies", "As being space detectives searching for life-friendly environments"],
          correctAnswer: 3,
        },
      ],
      answers: Array(7).fill(null),
      currentQuestionIndex: 0,
      selectedAnswer: null,
      score: null,
      submitted: false,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    allAnswered() {
      return this.answers.every(answer => answer !== null);
    },
  },
  watch: {
    '$route.query.reset'() {
      this.resetGame();
    }
  },
  methods: {
    selectAnswer(index) {
      this.selectedAnswer = index;
      this.answers[this.currentQuestionIndex] = index;
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = this.answers[this.currentQuestionIndex];
      }
    },
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.selectedAnswer = this.answers[this.currentQuestionIndex];
      }
    },
    submitAnswers() {
      const correctAnswers = this.questions.filter(
        (question, index) => question.correctAnswer === this.answers[index]
      ).length;
      this.score = correctAnswers;
      this.submitted = true;
    },
    isCorrect(index) {
      return this.questions[index].correctAnswer === this.answers[index];
    },
    resetGame() {
      this.answers = Array(7).fill(null);
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

h1 {
  color: var(--color-heading);
  font-size: 4rem;
}

.question {
  margin: 10px 0;
  color: blanchedalmond;
  font-size: 2.5rem;
  gap: 1rem;
}

.question button {
  border: 2px solid blanchedalmond;
  padding: 1rem 4rem;
  margin: 1rem 4rem;
  background-color: azure;
  color: rgb(3, 38, 49);
  transition: all 0.5s;
}

.question button:hover {
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
.navigation button:disabled{
  background-color: rgb(197, 194, 194);
  color: grey;
}
.navigation button {
  padding: 0.5rem 1.5rem;
  margin: 0 1rem;
  background-color: blanchedalmond;
  color: rgb(16, 62, 75);
}

.navigation button:disabled {
  background-color: rgb(197, 194, 194);
  color: grey;
}

.submit-button {
  margin-top: 20px;
  background-color: rgb(16, 62, 75);
  color: azure;
  padding: 1rem 2rem;
}

h2 {
  color: var(--color-heading);
  font-size: 2rem;
}

.results {
  margin-top: 20px;
}

.results p {
  color: var(--color-light-text);
  line-height: 2rem;
}

h3 {
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

.end-options-nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.end-button button {
  padding: 1rem 2rem;
  margin: 0 2rem;
  background-color: blanchedalmond;
  color: rgb(16, 62, 75);
  transition: all 0.5s;
}

.end-button button:hover {
  color: blanchedalmond;
  background-color: rgb(16, 62, 75);
  transform: scale(1.03);
}
</style>
