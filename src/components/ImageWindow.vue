<template>
    <div class="selection-image-container-noflex">
    <div class="selection-image-box-nomodal" v-for="(subimg, index) in images" :key="subimg.name">
        
        <img v-if="index % 2 == 0" class="image-logo" :src="subimg.src" @click="loadModal(subimg)">
        <div v-if="index % 2 == 0" style="padding: 20px; max-width: 400px">
        <h2>{{subimg.name}}</h2>
        <p v-if="subimg.date !== undefined">Created on {{subimg.date}}</p>
        <p>{{subimg.desc}}</p>
        </div>
        
        <div v-if="index % 2 !== 0" style="padding: 20px; max-width: 400px">
        <h2>{{subimg.name}}</h2>
        <p v-if="subimg.date !== undefined">Created on {{subimg.date}}</p>
        <p>{{subimg.desc}}</p>
        </div>
        <img v-if="index % 2 !== 0" class="image-logo" :src="subimg.src" @click="loadModal(subimg)">
        
       
        
    </div>
    <modal v-if="displayModal" :image="selected"></modal>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  name: 'ImageWindow',
  props: {
      images: {
      type: Array,
      required: true
    },
  },

  data: function () {
    return {
      displayModal: false,
      selected: {},
    }
  },

  components: {
       'modal': Modal
  },
  mounted: function () {

      
  },

  methods: {
    loadModal(image) {
        this.selected = image;
        this.displayModal = true;
    }
  },
}
</script>