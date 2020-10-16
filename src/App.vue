<template>
  <div class="flex-root" id="app" style="margin: 0">
        <div style="background-color: #171841" class="side">
      
      <div class="col-header">
        <p>Portfolio V3</p>
      </div>

      <div class="col-nav">
      <router-link to="/" style="background-color: #7874b9" :class="setClass('')">
      <span>Home</span>
      </router-link>

      <router-link to="/graphicdesign/featured-graphic-design" style="background-color: #7874b9" :class="setClass('/graphicdesign')" >
      <span >Graphic Design</span>
      </router-link>

    <router-link to="/photography/featured-photography" style="background-color: rgb(110 106 170);" :class="setClass('/photography')">
      <span>Photography</span>
    </router-link>

    <router-link to="/programming/featured-programming" style="background-color: rgb(105 101 160);" :class="setClass('/programming')">
      <span >Programming</span>
    </router-link>

    <router-link to="/contact" style="background-color: rgb(100 97 151)" :class="setClass('/contact')">
    <span >Contact</span>
    </router-link>

  </div>

  <div class="col-footer">
    <p>© Luce 2020</p>
  </div>
   
    </div>
    <div class="embedded" >
    <router-view ></router-view>
    </div>
    
    
  </div>
</template>
<script>
export default {
  name: 'App',

  components: {

  },
  mounted: function () {
      
  },
  data: function () {
    return {
      
    }
  },

  methods: {
    
    setClass(name) {
      if (name === this.$router.currentRoute.matched[0].path) {
        return 'tile-selected'
        
      }
      return 'tile'
    }
  },
}
</script>
<style>

</style>
