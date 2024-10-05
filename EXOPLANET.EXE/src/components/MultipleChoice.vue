<template>
    <div class="game-container">
      <h1>Multiple Choice Quiz</h1>
  
      <!-- Show the current question only if quiz isn't submitted -->
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
          <button @click="nextQuestion" :disabled="selectedAnswer === null">Next</button>
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
            <p>Your answer: {{ question.choices[answers[index]] }} - 
              <span :class="{ correct: isCorrect(index), incorrect: !isCorrect(index) }">
                {{ isCorrect(index) ? 'Correct' : 'Incorrect' }}
              </span>
            </p>
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
          {
            question: "What is the capital of France?",
            choices: ["Paris", "Berlin", "Rome", "Madrid"],
            correctAnswer: 0, // Index of the correct choice
          },
          {
            question: "Which planet is closest to the sun?",
            choices: ["Earth", "Venus", "Mars", "Mercury"],
            correctAnswer: 3,
          },
          {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["William Shakespeare", "Mark Twain", "Charles Dickens", "J.K. Rowling"],
            correctAnswer: 0,
          },
          {
            question: "What is the largest ocean?",
            choices: ["Indian", "Atlantic", "Arctic", "Pacific"],
            correctAnswer: 3,
          },
          {
            question: "Which country has the most people?",
            choices: ["USA", "India", "China", "Russia"],
            correctAnswer: 2,
          },
          {
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Pb", "Fe"],
            correctAnswer: 0,
          },
          {
            question: "What is the hardest natural substance on Earth?",
            choices: ["Gold", "Iron", "Diamond", "Silver"],
            correctAnswer: 2,
          },
        ],
        answers: Array(7).fill(null), // Array to store the user's answers
        currentQuestionIndex: 0, // Track the current question
        selectedAnswer: null, // Track the selected answer for the current question
        score: null, // Track the score
        submitted: false, // Track if the answers have been submitted
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex]; // Get the current question
      },
      allAnswered() {
        return this.answers.every(answer => answer !== null); // Check if all questions are answered
      },
    },
    methods: {
      selectAnswer(index) {
        this.selectedAnswer = index; // Record the selected answer
        this.answers[this.currentQuestionIndex] = index; // Save the answer for the current question
      },
      nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
          this.currentQuestionIndex++;
          this.selectedAnswer = this.answers[this.currentQuestionIndex]; // Pre-select the saved answer if returning to a question
        }
      },
      previousQuestion() {
        if (this.currentQuestionIndex > 0) {
          this.currentQuestionIndex--;
          this.selectedAnswer = this.answers[this.currentQuestionIndex]; // Pre-select the saved answer if returning to a question
        }
      },
      submitAnswers() {
        // Calculate the score
        this.score = this.questions.filter(
          (question, index) => question.correctAnswer === this.answers[index]
        ).length;
        this.submitted = true; // Mark the quiz as submitted
      },
      isCorrect(index) {
        return this.questions[index].correctAnswer === this.answers[index]; // Check if the user's answer is correct
      },
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
  