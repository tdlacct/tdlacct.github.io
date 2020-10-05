import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import GraphicDesign from '../GraphicDesign.vue'
import DigitalArt from '../GraphicDesign/Digital.vue'
import FeaturedGD from '../GraphicDesign/FeaturedGD.vue'
import Logos from '../GraphicDesign/Logo.vue'
import Typography from '../GraphicDesign/Type.vue'

import Photography from '../Photography.vue'
import DigitalPhoto from '../Photography/DigitalPhoto.vue'
import FeaturedPhoto from '../Photography/FeaturedPhoto.vue'
import Photoshop from '../Photography/Photoshop.vue'
import ProductPhoto from '../Photography/ProductPhoto.vue'

import Programming from '../Programming.vue'
import Contact from '../Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/graphicdesign',
    name: 'Graphic Design',
    component: GraphicDesign,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'featured-graphic-design',
        component: FeaturedGD
      },
      {
        path: 'logos',
        component: Logos
      },
      {
        path: 'typography',
        component: Typography
      },
      {
        path: 'digital-art',
        component: DigitalArt
      },
    ]
  },
  {
    path: '/photography',
    name: 'Photography',
    component: Photography,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'featured-photography',
        component: FeaturedPhoto
      },
      {
        path: 'digital-photography',
        component: DigitalPhoto
      },
      {
        path: 'product-photography',
        component: ProductPhoto
      },
      {
        path: 'photoshop-art',
        component: Photoshop
      },
    ]
  },
  {
    path: '/programming',
    name: 'Programming',
    component: Programming,
    children: [
      
    ]
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    children: [
      
    ]
  },
]

const $router = new VueRouter({
  routes
})

export default $router
