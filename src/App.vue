<template>
  <div class="flex-root" id="app" style="margin: 0">
        <div style="background-color: #171841" class="side">
      
      <div class="col-header">
        <p>Portfolio V3</p>
      </div>

      <div class="col-nav">
      <router-link to="/" style="background-color: #7874b9" :class="setClass('home')" v-on:click.native="selected='home'">
      <span>Home</span>
      </router-link>

      <router-link to="/graphicdesign/featured-graphic-design" style="background-color: #7874b9" :class="setClass('gd')" v-on:click.native="selected='gd'" >
      <span >Graphic Design</span>
      </router-link>

    <router-link to="/photography/featured-photography" style="background-color: rgb(110 106 170);" :class="setClass('photo')" v-on:click.native="selected='photo'">
      <span>Photography</span>
    </router-link>

    <router-link to="/programming" style="background-color: rgb(105 101 160);" :class="setClass('program')" v-on:click.native="selected='program'">
      <span >Programming</span>
    </router-link>

    <a href="contact.html" style="background-color: rgb(100 97 151)" :class="setClass('contact')" v-on:click.native="selected='contact'">
    <span >Contact</span>
    </a>

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
      selected: 'home',
    }
  },

  methods: {
    setClass(name) {
      if (this.selected === name) {
        return 'tile-selected'
      }
      return 'tile'
    }
  },
}
</script>
<style>

</style>
