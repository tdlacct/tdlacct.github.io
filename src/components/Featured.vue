<template>
    
    <div class="selection-image-container-flex" v-if="images.length !== 0 && timePassed > 1">
    
    <div v-for="(subimg) in images" :key="subimg.name">
        <img class="image-logo" :src="subimg.src" @click="loadModal(subimg)">
    </div>

    <modal v-if="displayModal" :image="selected"></modal>
    </div>

    <div v-else class="selection-image-container-noflex" style="text-align: center">
    <h3>Loading...
    <br>
    <img src="/svg/loading2.svg" class="loading-icon">
    </h3>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  name: 'Featured',
  props: {
      images: {
      type: Array,
      required: true,
    },
  },

  data: function () {
    return {
      displayModal: false,
      selected: {},
      timerInterval: null,
      timePassed: 0,
    }
  },

  components: {
       'modal': Modal
  },
  mounted: function () {
    this.startTimer();
      
  },

  methods: {
    loadModal(image) {
        this.selected = image;
        this.displayModal = true;
    },
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    }
  },
}
</script>