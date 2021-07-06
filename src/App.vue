<template>
  <div class="flex-root" id="app" style="margin: 0">

   
        
     <div style="background-color: #171841" :class="staticNav()">
      
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
    <p>© Luce 2021</p>
  </div>
   
    </div>

    <div>
      <img :src="'/svg/menu-' + sideVisible + '.svg'" :class="hideButton()" @click="sideVisible = !sideVisible" >
    </div>

    <div class="embedded" >
    
    <router-view >
    </router-view>
    
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
      sideVisible: false,
    }
  },

  methods: {
    
    setClass(name) {
      if (name === this.$router.currentRoute.matched[0].path) {
        return 'tile-selected'
        
      }
      return 'tile'
    },

    hideButton() {
     if (this.$router.currentRoute.matched[0].path === '') {
        return 'hidden'
      }
        return 'left-menu'
  }, 
    

    staticNav() {
      if (this.$router.currentRoute.matched[0].path === '') {
        return 'side-static'
        
      }
      if (this.sideVisible === true) {
        return 'side-visible'
      }
        return 'side-hidden'
    }
  },
}
</script>
<style>

</style>
