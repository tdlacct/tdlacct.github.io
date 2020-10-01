<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Logos and Emblems</h3>
  <p>As a student, I have designed logos for both fictional and real-world brands.</p>
  </div>
 
  <window :images='array'></window>
</div>
</div>
</template>

<script>
import ImageWindow from '../components/ImageWindow.vue'
import axios from 'axios';

export default {
  name: 'Logo',
 

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
      .get('/json/logo.json')
      .then(response => {
          console.log(response.data);
          this.array = response.data;
      });
  }
  }


</script>

