<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Digital Art / Renders</h3>
  <p>In addition to graphic design, I create 3D renders and digital art in my free time.</p>
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
      .get('/json/digital-art.json')
      .then(response => {
          console.log(response.data);
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name))
      });
  }
  }


</script>

