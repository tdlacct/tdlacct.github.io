<template>
<div>
<h2 class="display-type">Photography</h2>
<div style="width: 100%; display: flex">
  <div class="head-header">
    <router-link to="/photography/featured-photography"  class="navigation-header" >What's New?</router-link>
    <router-link to="/photography/digital-photography" class="navigation-header">Digital Photography</router-link>
    <router-link to="/photography/product-photography" class="navigation-header">Product Photography</router-link>
    <router-link to="/photography/photoshop-art" class="navigation-header">Photoshop Art</router-link>
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