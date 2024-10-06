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
            question: "What is the \"Habitable Zone\" often compared to?",
            choices: ["The temperature zone", "The Goldilocks zone", "The comfort zone", "The sweet spot"],
            correctAnswer: 1,
          },
          {
            question: "Why is the Habitable Zone important for finding alien life?",
            choices: ["It is where stars are hottest", "It is the area where liquid water can exist on a planet's surface", "It is the only place where planets can orbit stars", "It contains the most stars"],
            correctAnswer: 1,
          },
          {
            question: "What happens to planets that are too close to their star?",
            choices: ["They explode", "It gets \"eaten up\" by their star", "They become too hot, causing any water to boil away", "It moves further away from the star"],
            correctAnswer: 2,
          },
          {
            question: "What is the consequence for planets that are too far from their star?",
            choices: ["They become too cold, causing water to turn to ice", "They experience frequent meteor impacts", "They have high levels of cosmic radiation", " They develop thick atmospheres"],
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
  