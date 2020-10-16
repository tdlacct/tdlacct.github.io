<template>
    <div>

    <div class="selection-image-container-noflex">

    <div class="menu-overlay">

    <button class="button-icon" :class="checkClass('date')" @click="sort('date')">
    <img src="/svg/clock.svg" style="height: 100%; margin: 0; padding: 0;">
    </button>

    <button :class="checkClass('name')" @click="sort('name')">
    <img src="/svg/name.svg" style="height: 100%; margin: 0; padding: 0;">
    </button>

    </div>

    <div class="selection-image-box-nomodal" v-for="(subimg, index) in images" :key="subimg.name">
        
        <div v-if="index % 2 == 0">
       <iframe width="560" height="315" :src="subimg.src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div v-if="index % 2 == 0" style="padding: 20px; max-width: 400px">
        <h2>{{subimg.name}}</h2>
        <p v-if="subimg.date !== undefined">Created on {{subimg.date}}</p>
        <a v-if="subimg.code !== undefined" :href="subimg.code" target="_blank">Source Code on GitHub</a>
        <a v-else>Source Code Not Available</a>
        <p>{{subimg.desc}}</p>
        </div>
        
        <div v-if="index % 2 !== 0" style="padding: 20px; max-width: 400px">
        <h2>{{subimg.name}}</h2>
        <p v-if="subimg.date !== undefined">Created on {{subimg.date}}</p>
        <a v-if="subimg.code !== undefined" :href="subimg.code" target="_blank">Source Code on GitHub</a>
        <a v-else>Source Code Not Available</a>
        <p>{{subimg.desc}}</p>
        </div>
       <div v-if="index % 2 !== 0">
        <iframe width="560" height="315" :src="subimg.src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
       
        
    </div>
    <modal v-if="displayModal" :image="selected"></modal>
    </div>
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
export default {
  name: 'CodeWindow',
  props: {
      images: {
      type: Array,
      required: true
    },
  },

  data: function () {
    return {
      displayModal: false,
      selected: {},
      sortBy: "Name",
    }
  },

  watch: {
    sortBy: function Sort() {
      if (this.sortBy === "name") {
        console.log("name");
        this.images.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (this.sortBy === "date") {
        console.log("date");
        this.images.sort(function(a,b){
          return new Date(b.date) - new Date(a.date);
        });
      }
    }
  },

  components: {
       'modal': Modal
  },
  mounted: function () {
    this.sort('name');
      
  },

  methods: {
    loadModal(image) {
        this.selected = image;
        this.displayModal = true;
    },
  
    sort(type) {
      if (type === "name") {
        this.sortBy = "name";
        this.images.sort((a, b) => a.name.localeCompare(b.name))
      }
      if (type === "date") {
        console.log("date");
        this.sortBy = "date";
        this.images.sort(function(a,b){
          return new Date(b.date) - new Date(a.date);
        });
      }
    },

    checkClass(name) {
      if (name === this.sortBy) {
        return "button-icon-clicked";
      }
      return "button-icon"
    }
    },
}
</script>