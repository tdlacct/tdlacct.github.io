<template>
<div>
<div style="text-align: center; margin: auto;">
  <h3>Welcome to Pacific Data Mall</h3>
  <p>Pacific Data Mall is a virtual reality art portfolio created as a senior project. It will be completed in the spring of 2022.</p>
</div>
<featured :images='fullarray'></featured>
</div>
</template>

<script>
import axios from 'axios';
import FeaturedProgram from '../components/FeaturedProgram.vue'

export default {
    
  name: 'Mall',
 

  components: {
      'featured': FeaturedProgram,
  },
  data: function () {
    return {
      carray: [],
      jsparray: [],
      unityarray: [],
      misc: [],
      fullarray: [],
    }
  },
  mounted: function () {
      axios
      .get('/json/programming/c.json')
      .then(response => {
          this.carray = response.data.sort((a, b) => a.name.localeCompare(b.name));
          this.fullarray = this.fullarray.concat(this.carray);

         axios
        .get('/json/programming/jsp.json')
        .then(response => {
          this.jsparray = response.data.sort((a, b) => a.name.localeCompare(b.name));
          this.fullarray = this.fullarray.concat(this.jsparray);

            axios
            .get('/json/programming/unity.json')
            .then(response => {
                this.unityarray= response.data.sort((a, b) => a.name.localeCompare(b.name));
                this.fullarray = this.fullarray.concat(this.unityarray);

                axios
                .get('/json/programming/misc.json')
                .then(response => {
                  console.log(response);
                  this.misc= response.data.sort((a, b) => a.name.localeCompare(b.name));
                  this.fullarray = this.fullarray.concat(this.misc);

                   this.fullarray.sort(function(a,b){
                 return new Date(b.date) - new Date(a.date);
                });

               this.fullarray = this.fullarray.slice(0, 6);
              });
        });            
      });
    });
   
    
    
    

      
      
  }
  }
</script>