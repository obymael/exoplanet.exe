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
          <button @click="nextQuestion" :disabled="answers[currentQuestionIndex] === null">Next</button>
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
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          { question: "The Earth is flat.", answer: false },
          { question: "Cats are mammals.", answer: true },
          { question: "The Great Wall of China is visible from the Moon.", answer: false },
          { question: "Water freezes at 0 degrees Celsius.", answer: true },
          { question: "The capital of Australia is Sydney.", answer: false },
          { question: "Humans share 60% of their DNA with bananas.", answer: true },
          { question: "There are 50 states in the United States.", answer: true },
        ],
        answers: Array(7).fill(null),
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
      }
    },
  };
  </script>
  
  <style scoped>
  .game-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .question {
    margin: 10px 0;
  }
  .navigation {
    margin-top: 20px;
  }
  .navigation button {
    margin-right: 10px;
  }
  .submit-button {
    margin-top: 20px;
  }
  .results {
    margin-top: 20px;
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
  </style>
  