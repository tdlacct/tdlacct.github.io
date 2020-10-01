<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Typography</h3>
  <p>I've done several large projects related to typography, including custom typefaces and type speciman pages.</p>
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
      .get('/json/type.json')
      .then(response => {
          console.log(response.data);
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name));
      });
  }
  }


</script>

