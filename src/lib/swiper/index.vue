<template>
  <Swiper v-if="val.length > 0" :autoPlay='true' :showIndicator='val.flag'
      interval="5000"
      duration='1000'>
    <Slide
      v-for="(item,index) in val"
      :key="index">
      <ul class="banner"> 
        <li class="bannerLi">
          <router-link 
            :to="item.action ? {name:'activity',params:{aTId:item.action.data.target.split('=')[1]}} : {}" 
            tag="div"  >
            <img :src="item.picUrl"/>
          </router-link>
        </li>
      </ul>
    </Slide>
  </Swiper>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
export default {
  name: "Wochu-Swiper",
  props:{
      val:{
        type:Array,
        required:true
      }
  },
  components: {
    Swiper,
    Slide
  },
};
</script>
<style>
.banner {
  display: flex;
}
.bannerLi {
  float: left;
  width: 100%;
}
.banner .bannerLi img {
  width: 100%;
}
</style>