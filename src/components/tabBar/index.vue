<template>
  <div id="footer">
    <ul>
      <router-link 
        :to="item.path" 
        v-for="(item,index) in tabs" 
        :key="index" 
        tag="li"
        :class="activeIndex == index ? 'active' : ''">
        <img :src="activeIndex == index ? item.src : item.src1" @click="handleTog(index)">
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      activeIndex:0,
      tabs: [
        {
          src: "http://wmall.wochu.cn/h5/img/vueCommon/index_r.png",
          src1: "http://wmall.wochu.cn/h5/img/vueCommon/index_n.png",
          text: "首页",
          path: "/home"
        },
        {
          src: "http://wmall.wochu.cn/h5/img/vueCommon/shopping_r.png",
          src1: "http://wmall.wochu.cn/h5/img/vueCommon/shopping_n.png",
          text: "分类",
          path: "/sort"
        },
        {
          src: "http://wmall.wochu.cn/h5/img/vueCommon/cart_r.png",
          src1: "http://wmall.wochu.cn/h5/img/vueCommon/cart_n.png",
          text: "购物车",
          path: "/cart"
        },
        {
          src: "http://wmall.wochu.cn/h5/img/vueCommon/my_r.png",
          src1: "http://wmall.wochu.cn/h5/img/vueCommon/my_n.png",
          text: "我的",
          path: "/mine"
        }
      ]
    };
  },
  methods:{
    handleTog(index){
      this.activeIndex = index;
      console.log(this.activeIndex)
    }
  }
};
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
#footer {
  height:.4rem;
  background: #fff;
  border-top: 1px solid #e5e5e5;
  padding: .066667rem 0 .066667rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  margin: 0 auto;
}

#footer ul,
#footer ul li {
  width: 100%;
  height: 100%;
}
.active {
  color: #5d8640;
}
#footer ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#footer ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
}

#footer ul li img {
  width:.25rem;
}

#footer ul li span {
  font-size: .116667rem;
  color: #999;
  line-height: 1;
}



</style>