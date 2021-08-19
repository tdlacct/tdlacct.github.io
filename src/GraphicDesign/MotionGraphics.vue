<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Motion Graphics</h3>
  <p>As both part of my internship and for personal learning, I've created motion graphics and animation using Adobe After Effects and Blender.</p>
  </div>
 
  <window :images='array'></window>
</div>
</div>
</template>

<script>
import ImageWindow from '../components/ImageWindow.vue'
import axios from 'axios';

export default {
  name: 'Type',
 

  components: {
      'window': ImageWindow,
  },
  data: function () {
    return {
      array: null,
    }
  },
  mounted: function () {
      axios
      .get('/json/motion.json')
      .then(response => {
          console.log(response.data);
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name));
      });
  }
  }


</script>

