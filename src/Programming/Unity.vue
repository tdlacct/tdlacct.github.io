<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Unity3D</h3>
  <p>More than just a 3D game engine, I've used Unity for Kinect demos, simulations, and VR work.</p>
  </div>
 
  <window :images='array'></window>
</div>
</div>
</template>

<script>

import CodeWindow from '../components/CodeWindow.vue'
import axios from 'axios';

export default {

  name: 'Product',
 
  
  components: {
     'window': CodeWindow,
  },
  data: function () {
    return {
      array: null,
    }
  },
  mounted: function () {
      axios
      .get('/json/programming/unity.json')
      .then(response => {
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name))
      });
  }
  }


</script>

