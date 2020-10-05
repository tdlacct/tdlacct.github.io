<template>
<div >
<div>
<div style="text-align: center; margin: auto;">
 <h3>Photoshop Art</h3>
  <h3>Coming soon!</h3>
 <p style="display: block">This website is being updated regularly with new features and content,
  so check back soon!</p>
  </div>
 
 <!-- <window :images='array'></window> !-->
</div>
</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Digital',
 

  components: {
      
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

