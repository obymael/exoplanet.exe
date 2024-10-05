<template>
    <div class="memory-game">
      <h1>Planet Memory Game</h1>
  
      <!-- Display the timer -->
      <div class="timer" v-if="!gameOver">
        <p>Time Elapsed: {{ formatTime(timer) }}</p>
      </div>
  
      <!-- Grid for the memory cards -->
      <div class="game-board">
        <div v-for="(row, rowIndex) in gameBoard" :key="rowIndex" class="game-row">
          <div
            v-for="(card, colIndex) in row"
            :key="colIndex"
            class="card"
            :class="{ 
              'flipped': isFlipped(rowIndex, colIndex) || matchedIndices.includes(`${rowIndex}-${colIndex}`), 
              'fade-out': matchedIndices.includes(`${rowIndex}-${colIndex}`) 
            }"
            @click="flipCard(rowIndex, colIndex)"
            :data-index="`${rowIndex}-${colIndex}`" 
          >
            <!-- Show planet/fact if flipped or matched, else show card back -->
            <div v-if="isFlipped(rowIndex, colIndex) || matchedIndices.includes(`${rowIndex}-${colIndex}`)">
              <p>{{ card.content }}</p>
            </div>
            <div v-else class="card-back"></div>
          </div>
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
          { type: "fact", content: "Rotates on its side" },
        ],
        gameBoard: [],
        flippedIndices: [],
        matchedIndices: [],
        timer: 0,
        interval: null,
        gameOver: false,
        flippingLocked: false, // Added to lock flipping temporarily
      };
    },
    mounted() {
      this.initializeGameBoard();
    },
    methods: {
      initializeGameBoard() {
        // Create a fixed 2D array for the game board
        this.gameBoard = [
          [
            this.cards[0], this.cards[1],
            this.cards[2], this.cards[3]
          ],
          [
            this.cards[4], this.cards[5],
            this.cards[6], this.cards[7]
          ],
          [
            this.cards[8], this.cards[9],
            this.cards[10], this.cards[11]
          ],
          [
            this.cards[12], this.cards[13],
            this.cards[14], this.cards[15]
          ]
        ];
        // Duplicate the cards to create pairs
        this.gameBoard = this.shuffleCards(this.gameBoard);
      },
      shuffleCards(board) {
        const flattened = board.flat();
        // Shuffle the cards
        for (let i = flattened.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [flattened[i], flattened[j]] = [flattened[j], flattened[i]];
        }
        // Rebuild the 2D array after shuffling
        const newBoard = [];
        for (let i = 0; i < 4; i++) {
          newBoard.push(flattened.slice(i * 4, i * 4 + 4));
        }
        return newBoard;
      },
      isFlipped(rowIndex, colIndex) {
        return this.flippedIndices.includes(`${rowIndex}-${colIndex}`);
      },
      flipCard(rowIndex, colIndex) {
        const index = `${rowIndex}-${colIndex}`;
        // Prevent flipping more cards if two are already flipped, card is matched, or flipping is locked
        if (this.flippedIndices.length === 2 || this.matchedIndices.includes(index) || this.flippingLocked) {
          return;
        }
  
        if (this.flippedIndices.length === 0 && this.matchedIndices.length === 0) {
          this.startTimer();
        }
  
        this.flippedIndices.push(index);
  
        // Lock flipping while checking for a match
        if (this.flippedIndices.length === 2) {
          this.flippingLocked = true;
          this.checkForMatch();
        }
      },
      checkForMatch() {
  const [firstIndex, secondIndex] = this.flippedIndices;
  const [firstRow, firstCol] = firstIndex.split('-').map(Number);
  const [secondRow, secondCol] = secondIndex.split('-').map(Number);

  const firstCard = this.gameBoard[firstRow][firstCol];
  const secondCard = this.gameBoard[secondRow][secondCol];

  if (
    (firstCard.type === "planet" && secondCard.type === "fact" && this.isMatch(firstCard, secondCard)) ||
    (firstCard.type === "fact" && secondCard.type === "planet" && this.isMatch(secondCard, firstCard))
  ) {
    // Add matched indices
    this.matchedIndices.push(firstIndex, secondIndex);
    
    // Apply fade-out effect
    this.$nextTick(() => {
      const firstCardElement = this.$el.querySelector(`.card[data-index="${firstIndex}"]`);
      const secondCardElement = this.$el.querySelector(`.card[data-index="${secondIndex}"]`);
      if (firstCardElement) firstCardElement.classList.add('fade-out');
      if (secondCardElement) secondCardElement.classList.add('fade-out');
    });

    // Check if game is over
    if (this.matchedIndices.length === this.cards.length) {
      this.endGame();
    }
  }

  // Reset flipped cards after a delay, whether they match or not
  setTimeout(() => {
    this.flippedIndices = []; // Clear flipped indices regardless of match
    this.flippingLocked = false; // Unlock flipping after check is done
  }, 1000);
}
,
      isMatch(planetCard, factCard) {
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
      clearInterval(this.interval);
    },
  };
  </script>
  
  <style scoped>
  .memory-game {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .game-board {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-items: center;
    margin-top: 20px;
  }
  
  .game-row {
    display: flex;
    justify-content: center;
    gap: 10px;
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

  .card.fade-out {
  animation: fadeOut 0.5s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden; /* Makes the element invisible after fading out */
  }
}

  </style>
  