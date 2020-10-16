<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
  <h3>Misc Programming</h3>
  <p>There are a few programming projects I've worked on that don't fit into the other categories, mainly because
  they've been written in more obscure languages.</p>
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
      .get('/json/programming/misc.json')
      .then(response => {
          this.array = response.data.sort((a, b) => a.name.localeCompare(b.name))
      });
  }
  }


</script>

