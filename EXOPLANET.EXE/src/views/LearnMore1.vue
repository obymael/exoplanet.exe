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
import planetImage1 from '@/assets/img/planets/gas-giant.png';
import planetImage2 from '@/assets/img/planets/neptunian-planet.png';
import planetImage6 from '@/assets/img/planets/super-earth.png';
import planetImage4 from '@/assets/img/planets/terrestrial-exoplanet.png';

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
          name: 'Gas Giants',
          description: 'Gas giants are huge planets mostly made of hydrogen and helium, like Jupiter and Saturn. They can be super massive—sometimes even bigger than Jupiter! These planets have thick, swirling atmospheres and may not have solid surfaces. ',
        },
        planet2: {
          name: 'Neptunian Planets',
          description: 'Neptunian planets are smaller than gas giants and resemble cooler versions of Neptune and Uranus. They are mostly made of gases and ice, with thick atmospheres that may contain water and methane in their clouds.',
        },
        planet6: {
          name: 'Super-Earths',
          description: 'Super-Earths are rocky planets similar to Earth but can be up to ten times heavier! Some may have conditions suitable for life, while others can be extremely hot or have thick atmospheres, making them quite different from our planet.',
        },
        planet4: {
          name: 'Terrestrial Planets',
          description: 'Terrestrial planets are the rocky planets we’re most familiar with, like Earth, Mars, Venus, and Mercury. These planets have solid surfaces that you could walk on (if they had a breathable atmosphere). If they’re in the habitable zone (the perfect distance from their star), they might even have liquid water—a key ingredient for life!',
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
