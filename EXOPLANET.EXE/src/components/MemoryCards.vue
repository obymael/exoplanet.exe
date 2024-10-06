<template>
  <div class="memory-game">
    <h1>Planet Memory Game</h1>
    <div class="game-board" v-if="!gameOver">
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

    <!-- Timer and Play Again Section -->
    <div v-if="gameOver" class="game-over">
      <h2>Game Over!</h2>
      <p>Your time: {{ formatTime(timer) }}</p>
      <div class="button-container"> <!-- New Container for Buttons -->
    <button @click="resetGame">Play Again</button>
    <button @click="goBackToLesson">Back to Lesson</button> <!-- New Button -->
  </div> <!-- New Button -->
    </div>
  </div>
</template>

<script>
import gammaCepheiImage from '@/assets/Gamma_Cephei_Ab.png';
import kepler186fGif from '@/assets/kepler-186f.gif';
import waspImage from '@/assets/wasp-12b.gif';
import glieseImage from '@/assets/Gliese_1214_b.jpg';
import kelt9bImage from '@/assets/KELT-9b_gif.webp';
import pegasiBImage from '@/assets/51_pegasi_b.webp';
import proximaCentauriBGif from '@/assets/proxima_centauri_b.gif';
import hd209458bImage from '@/assets/HD_209458b.webp';
import confetti from 'canvas-confetti';

export default {
  data() {
    return {
      cards: [
        { type: "planet", content: "Proxima Centauri b", img: proximaCentauriBGif },
        { type: "fact", content: "It is the closest known exoplanet to the Earth, located just over 4 light-years away" },
        { type: "planet", content: "Kepler-186f", img: kepler186fGif },
        { type: "fact", content: "Planet with the most similarity to earth" },
        { type: "planet", content: "HD 209458 b", img: hd209458bImage },
        { type: "fact", content: "First exoplanet observed transiting its host star, enabling measurements of its size" },
        { type: "planet", content: "Wasp-12b", img: waspImage },
        { type: "fact", content: "AKA \"hot Jupiter,\" it orbits close to its star, whilst gravity tears it apart" },
        { type: "planet", content: "51 Pegasi b", img: pegasiBImage },
        { type: "fact", content: "It is recognized as the first exoplanet ever discovered to orbit a sun-like star" },
        { type: "planet", content: "Gamma Cephei Ab", img: gammaCepheiImage },
        { type: "fact", content: "First exoplanet detected" },
        { type: "planet", content: "KELT-9b", img: kelt9bImage },
        { type: "fact", content: "It is the hottest known exoplanet, with surface temperatures hotter than some stars" },
        { type: "planet", content: "Gliese 1214 b", img: glieseImage },
        { type: "fact", content: "AKA \"water world,\" with a thick layer of water or ice beneath its atmosphere" },
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
    this.initializeGameBoard(); // Initialize the game board when the component is mounted
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
      console.log("Initialized Game Board:", this.gameBoard); // Debugging: Check if the game board is populated
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
        "Proxima Centauri b": "It is the closest known exoplanet to the Earth, located just over 4 light-years away",
        "Kepler-186f": "Planet with the most similarity to earth",
        "HD 209458 b": "First exoplanet observed transiting its host star, enabling measurements of its size",
        "Wasp-12b": "AKA \"hot Jupiter,\" it orbits close to its star, whilst gravity tears it apart",
        "51 Pegasi b": "It is recognized as the first exoplanet ever discovered to orbit a sun-like star",
        "Gamma Cephei Ab": "First exoplanet detected",
        "KELT-9b": "It is the hottest known exoplanet, with surface temperatures hotter than some stars",
        "Gliese 1214 b": "AKA \"water world,\" with a thick layer of water or ice beneath its atmosphere",
      };

      return planetFactMapping[planetCard.content] === factCard.content;
    },
    startTimer() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          this.timer++;
        }, 1000);
      }
    },
    launchConfetti() {
    const duration = 5 * 1000; // Duration of the confetti effect
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (Math.random() + 0.5);
      confetti({
        particleCount,
        angle: 60,
        spread: 55,
        startVelocity: 30,
        decay: 0.9,
        scalar: 1.2,
        colors: ['rgb(235, 217, 248)', 'rbg(140, 222, 227)', '#4B3066', 'rgb(103, 130, 247)'],
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    }, 250);
  },

  endGame() {
    clearInterval(this.interval);
    this.gameOver = true; // Set the game over state
    this.launchConfetti(); // Launch the confetti when the game ends
  },
    resetGame() {
      this.timer = 0;
      this.flippedIndices = [];
      this.matchedIndices = [];
      this.gameOver = false;  // Keep the game board visible
      this.flippingLocked = false;
      this.initializeGameBoard();  // Reinitialize the game board
      this.startTimer();  // Restart the timer for the new game
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    },
    goBackToLesson() {
    // Implement your logic to navigate back to the lesson
    // You might want to use this.$router.push('/path-to-lesson') if you're using Vue Router
  },
  }
}
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
  padding: 6rem 0;
}

.game-row {
  display: flex;
  justify-content: center;
  gap: 6rem;
}

.card {
  width: 100px;
  height: 150px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.card.flipped {
  background-color: #f8f8f8;
}

h2,
.game-over p{
  color: var(--color-heading);
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
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the buttons */
  font-size: 24px; /* Increase font size for all text within game-over */
}

.button-container {
  display: flex; /* Flexbox for aligning buttons next to each other */
  gap: 20px; /* Space between the buttons */
  margin-top: 20px;
}

button {
  padding: 15px 30px; /* Larger button size */
  font-size: 18px; /* Bigger font size */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: blanchedalmond;
  color: rgb(16, 62, 75);
  transition: background-color 0.3s, transform 0.3s; /* Added transform transition */
}

button:hover {
  background-color: rgb(16, 62, 75); /* Darker shade on hover */
  color: blanchedalmond;
  transform: scale(1.05); /* Slightly scale the button on hover */
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

.planet-image {
  width: 80px;
  height: auto;
  margin-top: 5px;
}
</style>
