<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Javascript / Python</h3>
  <p>I've used Javascript at my internship to build web apps. In fact, my portfolio itself uses VueJS!</p>
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
      .get('/json/programming/jsp.json')
      .then(response => {
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name))
      });
  }
  }


</script>

