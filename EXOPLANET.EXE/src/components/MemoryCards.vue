<template>
    <div class="memory-game">
      <h1>Planet Memory Game</h1>
      
      <!-- Display the timer -->
      <div class="timer" v-if="!gameOver">
        <p>Time Elapsed: {{ formatTime(timer) }}</p>
      </div>
  
      <!-- Grid for the memory cards -->
      <div class="game-board">
        <div 
          v-for="(card, index) in shuffledCards" 
          :key="index" 
          class="card" 
          :class="{ 'flipped': isFlipped(index) || matchedIndices.includes(index) }"
          @click="flipCard(index)"
        >
          <!-- Show planet/fact if flipped or matched, else show card back -->
          <div v-if="isFlipped(index) || matchedIndices.includes(index)">
            <p>{{ card.content }}</p>
          </div>
          <div v-else class="card-back"></div>
        </div>
      </div>
  
      <!-- Display final time when game is over -->
      <div v-if="gameOver" class="game-over">
        <h2>Well Done! You matched all pairs!</h2>
        <p>It took you {{ formatTime(timer) }} to complete the game.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          { type: "planet", content: "Earth" },
          { type: "fact", content: "Only planet known to support life" },
          { type: "planet", content: "Mars" },
          { type: "fact", content: "Known as the Red Planet" },
          { type: "planet", content: "Venus" },
          { type: "fact", content: "Hottest planet in the solar system" },
          { type: "planet", content: "Jupiter" },
          { type: "fact", content: "Largest planet in the solar system" },
          { type: "planet", content: "Saturn" },
          { type: "fact", content: "Famous for its ring system" },
          { type: "planet", content: "Mercury" },
          { type: "fact", content: "Smallest planet and closest to the Sun" },
          { type: "planet", content: "Neptune" },
          { type: "fact", content: "Coldest planet in the solar system" },
          { type: "planet", content: "Uranus" },
          { type: "fact", content: "Rotates on its side" }
        ],
        flippedIndices: [],
        matchedIndices: [],
        timer: 0,
        interval: null,
        gameOver: false,
      };
    },
    computed: {
      shuffledCards() {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.cards.sort(() => Math.random() - 0.5);
      },
    },
    methods: {
      isFlipped(index) {
        // Check if the card at the given index is currently flipped
        return this.flippedIndices.includes(index);
      },
      flipCard(index) {
        if (this.flippedIndices.length === 2 || this.matchedIndices.includes(index)) {
          // If two cards are already flipped or card is matched, ignore click
          return;
        }
  
        // Start timer when the first card is flipped
        if (this.flippedIndices.length === 0 && this.matchedIndices.length === 0) {
          this.startTimer();
        }
  
        // Add card to flipped array
        this.flippedIndices.push(index);
  
        // Check if two cards are flipped
        if (this.flippedIndices.length === 2) {
          this.checkForMatch();
        }
      },
      checkForMatch() {
        const [firstIndex, secondIndex] = this.flippedIndices;
        const firstCard = this.shuffledCards[firstIndex];
        const secondCard = this.shuffledCards[secondIndex];
  
        if (
          (firstCard.type === "planet" && secondCard.type === "fact" && this.isMatch(firstCard, secondCard)) ||
          (firstCard.type === "fact" && secondCard.type === "planet" && this.isMatch(secondCard, firstCard))
        ) {
          // Cards match, add to matched indices
          this.matchedIndices.push(firstIndex, secondIndex);
  
          // Check if game is over
          if (this.matchedIndices.length === this.shuffledCards.length) {
            this.endGame();
          }
        }
  
        // Reset flipped cards after a short delay to give feedback to the user
        setTimeout(() => {
          this.flippedIndices = [];
        }, 1000);
      },
      isMatch(planetCard, factCard) {
        // Check if the fact corresponds to the planet
        const planetFactMapping = {
          Earth: "Only planet known to support life",
          Mars: "Known as the Red Planet",
          Venus: "Hottest planet in the solar system",
          Jupiter: "Largest planet in the solar system",
          Saturn: "Famous for its ring system",
          Mercury: "Smallest planet and closest to the Sun",
          Neptune: "Coldest planet in the solar system",
          Uranus: "Rotates on its side",
        };
        return planetFactMapping[planetCard.content] === factCard.content;
      },
      startTimer() {
        this.interval = setInterval(() => {
          this.timer++;
        }, 1000);
      },
      endGame() {
        clearInterval(this.interval);
        this.gameOver = true;
      },
      formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
      },
    },
    beforeUnmount() {
      clearInterval(this.interval); // Clear timer when component is destroyed
    },
  };
  </script>
  
  <style scoped>
  .memory-game {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .game-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    justify-items: center;
    margin-top: 20px;
  }
  
  .card {
    width: 100px;
    height: 150px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .card.flipped {
    background-color: #f8f8f8;
  }
  
  .card-back {
    width: 100%;
    height: 100%;
    background-color: #333;
    border-radius: 10px;
  }
  
  .timer {
    margin-top: 20px;
  }
  
  .game-over {
    margin-top: 20px;
  }
  </style>
  