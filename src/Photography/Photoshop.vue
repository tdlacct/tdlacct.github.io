<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Photoshop Art</h3>
  <p>While I do basic color correction to my regular photography in Photoshop, these compositions are
  exaggerated and surreal.</p>
  </div>
 
  <window :images='array'></window>
</div>
</div>
</template>

<script>

import ImageWindow from '../components/ImageWindow.vue'
import axios from 'axios';

export default {
  name: 'Photoshop',
 
  
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
      .get('/json/photography/photoshop.json')
      .then(response => {
          console.log(response.data);
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name))
      });
  }
  }


</script>

