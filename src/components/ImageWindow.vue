<template>
    <div class="selection-image-container-noflex">
    <div class="selection-image-box-nomodal" v-for="(subimg, index) in images" :key="subimg">
        
        <img v-if="index % 2 == 0" class="image-logo" :src="subimg.src">
        <div v-if="index % 2 == 0"style="padding: 20px; max-width: 400px">
        <h2>{{subimg.name}}</h2>
        <p>{{subimg.desc}}</p>
        </div>
        
        <div v-if="index % 2 !== 0"style="padding: 20px; max-width: 400px">
        <h2>{{subimg.name}}</h2>
        <p>{{subimg.desc}}</p>
        </div>
        <img v-if="index % 2 !== 0" class="image-logo" :src="subimg.src">
        
       
        
    </div>
    </div>
</template>

<script>
export default {
  name: 'ImageWindow',
  props: {
      images: {
      type: Array,
      required: true
    },
  },

  components: {

  },
  mounted: function () {
      console.log(this.images);
  }
}
</script>