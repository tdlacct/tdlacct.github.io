<template>
<div>
<h2 class="display-type">Graphic Design Projects</h2>
<div style="width: 100%; display: flex">
  <div class="head-header">
    <router-link to="/graphicdesign/featured-graphic-design"  class="navigation-header" >What's New?</router-link>
    <router-link to="/graphicdesign/logos" class="navigation-header">Logos / Emblems</router-link>
    <router-link to="/graphicdesign/typography" class="navigation-header">Typography</router-link>
    <router-link to="/graphicdesign/digital-art" class="navigation-header">Digital Art / Renders</router-link>
    <router-link to="/graphicdesign/motion-graphics" class="navigation-header">Motion Graphics</router-link>
  </div>
</div>
<hr>
<div class="selection-container">
<div  class="selection-div">
<transition name="slide-fade">
<router-view></router-view>
</transition>

</div>
</div>
</div>
</template>

<script>
</script>