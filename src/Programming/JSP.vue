<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Javascript / Python</h3>
  <p>I've done a lot of web development and scripting projects using Javascript and Python.</p>
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
          this.array = response.data;
      });
  }
  }


</script>

