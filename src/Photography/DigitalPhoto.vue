<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Digital Photography</h3>
  <p>As a side business, I produce prints of digital photographs. I often experiment with different
  combination of camera lenses and settings.</p>
  </div>
 
  <window :images='array'></window>
</div>
</div>
</template>

<script>
import ImageWindow from '../components/ImageWindow.vue'
import axios from 'axios';

export default {
  name: 'Digital',
 

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
      .get('/json/photography/digital-photography.json')
      .then(response => {
          console.log(response.data);
          this.array = response.data;
      });
  }
  }


</script>

