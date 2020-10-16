<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>C++ Programming</h3>
  <p>I've been programming in C++ for around {{new Date().getFullYear() - 2018}} years. I mainly use C++ for resource-intensive projects such as CUDA simulations.</p>
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
      .get('/json/programming/c.json')
      .then(response => {
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name))
      });
  }
  }


</script>

