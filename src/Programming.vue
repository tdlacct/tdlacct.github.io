<template>
<div>
<h2 class="display-type">Programming</h2>
<div style="width: 100%; display: flex">
  <div class="head-header">
    <router-link to="/programming/featured-programming"  class="navigation-header" >What's New?</router-link>
    <router-link to="/programming/cplusplus" class="navigation-header">C++</router-link>
    <router-link to="/programming/pythonjs" class="navigation-header">JavaScript / Python</router-link>
    <router-link to="/programming/unity" class="navigation-header">Unity3D</router-link>
    <router-link to="/programming/misc" class="navigation-header">Misc</router-link>
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