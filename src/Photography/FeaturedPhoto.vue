<template>
<div>
<div style="text-align: center; margin: auto;">
  <h3>Featured Work</h3>
  <p>Take a look at what has been recently added to the portfolio! Hover over an image to get a closer look</p>
</div>
<featured :images='fullarray'></featured>
</div>
</template>

<script>
import axios from 'axios';
import Featured from '../components/Featured.vue'

export default {
    
  name: 'Logo',
 

  components: {
      'featured': Featured,
  },
  data: function () {
    return {
      digitalarray: [],
      productarray: [],
      psarray: [],
      fullarray: [],
    }
  },
  mounted: function () {
      axios
      .get('/json/photography/digital-photography.json')
      .then(response => {
          this.digitalarray = response.data.sort((a, b) => a.name.localeCompare(b.name));
          this.fullarray = this.fullarray.concat(this.digitalarray);

         axios
        .get('/json/photography/product-photography.json')
        .then(response => {
          this.productarray = response.data.sort((a, b) => a.name.localeCompare(b.name));
          this.fullarray = this.fullarray.concat(this.productarray);

            axios
            .get('/json/photography/photoshop.json')
            .then(response => {
                this.psarray= response.data.sort((a, b) => a.name.localeCompare(b.name));
                this.fullarray = this.fullarray.concat(this.psarray);
                console.log(this.fullarray);

                this.fullarray.sort(function(a,b){
                 return new Date(b.date) - new Date(a.date);
                });

               this.fullarray = this.fullarray.slice(0, 10);
            });
        });
    });
   
    
    
    

      
      
  }
  }
</script>