<template>
  <div class="intermediate-container">
    <section class="learn-more-section">
      <div class="learn-more-container">
        <div class="learn-more-images" v-if="!selectedPlanet">
          <img
            :src="planetImages.planet1"
            alt="Planet Image 1"
            class="learn-more-image"
            @click="selectPlanet('planet1')"
          />
          <img
            :src="planetImages.planet2"
            alt="Planet Image 2"
            class="learn-more-image"
            @click="selectPlanet('planet2')"
          />
          <img
            :src="planetImages.planet6"
            alt="Planet Image 6"
            class="learn-more-image"
            @click="selectPlanet('planet6')"
          />
          <img
            :src="planetImages.planet4"
            alt="Planet Image 4"
            class="learn-more-image"
            @click="selectPlanet('planet4')"
          />
        </div>

        <transition name="slide">
          <div v-if="selectedPlanet" class="planet-card">
            <img
              :src="planetImages[selectedPlanet]"
              alt="Selected Planet"
              class="selected-planet-image"
            />
            <h3>{{ planetDescriptions[selectedPlanet].name }}</h3>
            <p>{{ planetDescriptions[selectedPlanet].description }}</p>
            <button @click="closeCard">Close</button>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>
import planetImage1 from '@/assets/planet-image-1.jpg';
import planetImage2 from '@/assets/planet-image-2.jpg';
import planetImage6 from '@/assets/planet-image-6.jpg';
import planetImage4 from '@/assets/planet-image-4.jpg';

export default {
  name: 'LearnMore1',
  data() {
    return {
      selectedPlanet: null,
      planetImages: {
        planet1: planetImage1,
        planet2: planetImage2,
        planet6: planetImage6,
        planet4: planetImage4,
      },
      planetDescriptions: {
        planet1: {
          name: 'Planet 1',
          description: 'Description for Planet 1, a fascinating gas giant.',
        },
        planet2: {
          name: 'Planet 2',
          description: 'Description for Planet 2, known for its stunning rings.',
        },
        planet6: {
          name: 'Planet 6',
          description: 'Description for Planet 6, a unique exoplanet.',
        },
        planet4: {
          name: 'Planet 4',
          description: 'Description for Planet 4, a distant icy world.',
        },
      },
    };
  },
  methods: {
    selectPlanet(planet) {
      this.selectedPlanet = planet;
    },
    closeCard() {
      this.selectedPlanet = null;
    },
  },
};
</script>

<style scoped>
.intermediate-container {
  padding: 100px 20px;
}

.learn-more-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.learn-more-images {
  display: flex;
  gap: 20px;
}

.learn-more-image {
  width: 300px;
  height: auto;
  transition: transform 0.3s ease, opacity 0.3s ease;
  cursor: pointer;
}

.learn-more-image:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.planet-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  transition: opacity 0.5s ease;
}

.selected-planet-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
