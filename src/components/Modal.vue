<template>
<div class="vue-modal" @click="closeModal()">
    <div style="display: flex; justify-content: center;">
    <img class="vue-modal-image" :src="image.src">
    <div style="align-self: center; margin: 50px;">
    <h2>{{image.name}}</h2>
    <h3>{{image.date}}</h3>
    <p style="max-width: 360px">{{image.desc}}</p>
    </div>
    </div>

    
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
      image: {
      type: Object,
      required: true
    },
  },

  components: {
     
  },
  data: function () {
    return {
      
    }
  },
  mounted: function () {
     
  },
  methods: {
    
    closeModal() {
        this.$parent.displayModal = false;
        console.log("closed");
    }
  },
  }
</script>