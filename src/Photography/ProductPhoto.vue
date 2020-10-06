<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Product Photography</h3>
  <p>One of my hobbies outside of graphic design is collecting vintage electronics and pop culture items.
  I photograph these items to experiment with product photography.</p>
  </div>
 
  <window :images='array'></window>
</div>
</div>
</template>

<script>

import ImageWindow from '../components/ImageWindow.vue'
import axios from 'axios';

export default {
  name: 'Product',
 
  
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
      .get('/json/photography/product-photography.json')
      .then(response => {
          console.log(response.data);
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name))
      });
  }
  }


</script>

