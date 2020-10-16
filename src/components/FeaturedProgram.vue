<template>
    <div class="selection-image-container-flex">
    <div v-for="(subimg) in images" :key="subimg.name">
        
         <iframe width="560" height="315" :src="subimg.src" frameborder="0" allowfullscreen></iframe>
         <h3>{{subimg.name}} — {{subimg.date}}</h3>
        
       
        
    </div>
    <modal v-if="displayModal" :image="selected"></modal>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  name: 'Featured',
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