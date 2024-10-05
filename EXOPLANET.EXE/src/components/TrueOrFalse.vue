<template>
    <div class="game-container">
      <h1>True or False Game</h1>
      <div v-for="(question, index) in questions" :key="index" class="question">
        <p>{{ question.question }}</p>
        <button @click="recordAnswer(index, true)">True</button>
        <button @click="recordAnswer(index, false)">False</button>
      </div>
      <button @click="submitAnswers" class="submit-button">Submit Answers</button>
      <div v-if="score !== null" class="score">
        <h2>You got {{ score }} out of {{ questions.length }} correct!</h2>
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
      };
    },
    methods: {
      recordAnswer(index, answer) {
        this.answers[index] = answer;
      },
      submitAnswers() {
        const correctAnswers = this.questions.filter((q, index) => q.answer === this.answers[index]).length;
        this.score = correctAnswers;
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
  .submit-button {
    margin-top: 20px;
  }
  .score {
    margin-top: 20px;
  }
  </style>
  