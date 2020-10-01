<template>
<div>
<div style="text-align: center; margin: auto;">
  <h3>Featured Work</h3>
  <p>Take a look at what has been recently added to the portfolio! Hover over an image to get a closer look</p>
</div>
<window :images='fullarray'></window>
</div>
</template>

<script>
import axios from 'axios';
import ImageWindow from '../components/ImageWindow.vue'

export default {
    
  name: 'Logo',
 

  components: {
      'window': ImageWindow,
  },
  data: function () {
    return {
      digitalarray: [],
      logoarray: [],
      typearray: [],
      fullarray: [],
    }
  },
  mounted: function () {
      axios
      .get('/json/logo.json')
      .then(response => {
          this.logoarray = response.data.sort((a, b) => a.name.localeCompare(b.name));
          this.fullarray = this.fullarray.concat(this.logoarray);

         axios
        .get('/json/digital-art.json')
        .then(response => {
          this.digitalarray = response.data.sort((a, b) => a.name.localeCompare(b.name));
          this.fullarray = this.fullarray.concat(this.digitalarray);

            axios
            .get('/json/type.json')
            .then(response => {
                this.typearray= response.data.sort((a, b) => a.name.localeCompare(b.name));
                this.fullarray = this.fullarray.concat(this.typearray);

                this.fullarray.sort(function(a,b){
                 return new Date(b.date) - new Date(a.date);
                });
            });
        });
    });
   
    
    
    

      
      
  }
  }
</script>