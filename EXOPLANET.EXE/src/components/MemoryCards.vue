<template>
    <div class="memory-game">
      <h1>Planet Memory Game</h1>
      <div class="game-board">
        <div v-for="(row, rowIndex) in gameBoard" :key="rowIndex" class="game-row">
          <div
            v-for="(card, colIndex) in row"
            :key="colIndex"
            class="card"
            :data-index="`${rowIndex}-${colIndex}`"
            @click="flipCard(rowIndex, colIndex)"
          >
            <div v-if="isFlipped(rowIndex, colIndex) || matchedIndices.includes(`${rowIndex}-${colIndex}`)">
              <p>{{ card.content }}</p>
              <div v-if="card.img">
                <img :src="card.img" alt="Planet Image" class="card-pics planet-image" />
              </div>
            </div>
            <div v-else class="card-back"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import gammaCepheiImage from '@/assets/Gamma_Cephei_Ab.png';
  import keplerfImage from '@/assets/Kepler-186f.jpg';
  import waspImage from '@/assets/wasp-12b.jpg';
  
  export default {
    data() {
      return {
        cards: [
          { type: "planet", content: "Earth" },
          { type: "fact", content: "Only planet known to support life" },
          { type: "planet", content: "Kepler-186f", img: keplerfImage },
          { type: "fact", content: "Planet with the most similarity to earth" },
          { type: "planet", content: "Venus" },
          { type: "fact", content: "Hottest planet in the solar system" },
          { type: "planet", content: "Wasp-12b", img: waspImage },
          { type: "fact", content: "AKA \"hot Jupiter,\" it orbits close to its star, whilst gravity is tearing it apart" },
          { type: "planet", content: "Saturn" },
          { type: "fact", content: "Famous for its ring system" },
          { type: "planet", content: "Gamma Cephei Ab", img: gammaCepheiImage },
          { type: "fact", content: "First exoplanet detected" },
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
      flippingLocked: false,
    };
  },
  mounted() {
    this.initializeGameBoard();
  },
  methods: {
    initializeGameBoard() {
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
      this.gameBoard = this.shuffleCards(this.gameBoard);
    },
    shuffleCards(board) {
      const flattened = board.flat();
      for (let i = flattened.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flattened[i], flattened[j]] = [flattened[j], flattened[i]];
      }
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
      if (this.flippedIndices.length === 2 || this.matchedIndices.includes(index) || this.flippingLocked) {
        return;
      }

      if (this.flippedIndices.length === 0 && this.matchedIndices.length === 0) {
        this.startTimer();
      }

      this.flippedIndices.push(index);

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
    this.matchedIndices.push(firstIndex, secondIndex);
    
    // Add the fade-out class to matched cards
    this.$nextTick(() => {
      const firstCardElement = this.$el.querySelector(`.card[data-index="${firstIndex}"]`);
      const secondCardElement = this.$el.querySelector(`.card[data-index="${secondIndex}"]`);
      if (firstCardElement) firstCardElement.classList.add('fade-out');
      if (secondCardElement) secondCardElement.classList.add('fade-out');
    });

    if (this.matchedIndices.length === this.cards.length) {
      this.endGame();
    }
  }

  // Reset flipped cards after a short delay
  setTimeout(() => {
    this.flippedIndices = [];
    this.flippingLocked = false;
  }, 1000);
},
    isMatch(planetCard, factCard) {
      const planetFactMapping = {
        Earth: "Only planet known to support life",
        "Kepler-186f": "Planet with the most similarity to earth",
        Venus: "Hottest planet in the solar system",
        "Wasp-12b": "AKA \"hot Jupiter,\" it orbits close to its star, whilst gravity is tearing it apart",
        Saturn: "Famous for its ring system",
        "Gamma Cephei Ab": "First exoplanet detected",
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
    visibility: hidden;
  }
}

.planet-image {
  width: 80px;
  height: auto;
  margin-top: 5px;
}

.card.fade-out {
  animation: fadeOut 1s forwards; 
  pointer-events: none; /* Prevent clicks during the fade out */
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1); /* Optional: scaling effect */
  }
  100% {
    opacity: 0;
    transform: scale(0); /* Optional: scale down effect */
  }
}

</style>
