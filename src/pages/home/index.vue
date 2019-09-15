<template>
  <div class="box">
    <!--头部-->
    <Home-Header />

    <div class="content">
      <!--轮播图-->
      <Wochu-Swiper :val="carousel"></Wochu-Swiper>
    

      <!-- 导航 -->
      <div class="top-nav">
        <ul class="top-nav-ul" v-for="(item,index) in topNav" :key="index">
          <router-link 
            :to="{name:'activity',params:{aTId:item1.source.split('=')[1]}}" 
            tag="div" v-for="(item1,index1) in item.items" :key="index1">
            <!-- <div v-for="(item1,index1) in item.items" :key="index1"> -->
              <img :src="item1.imgUrl" alt />
            <!-- </div> -->
            
          </router-link>
        </ul>
      </div>


      <div class="goods-iitem-list" v-for="(item,index) in list" :key="index">
        <!-- 我厨快报 -->
        <div class="wochu-broadcast" v-if="index==0">
          <div class="broadcast-title">
            <img :src="item.templateImgUrl" />
          </div>
          <div class="broadcast-content">
            <div class="scroll-content">
              <!-- <Broadcast-Swiper :broad="item.items"></Broadcast-Swiper> -->
              <ul class="animate">
                <li class="ellipsis line-height2" v-for="(item1,index1) in item.items" :key="index1" >{{item1.title}}</li>
              </ul>
            </div>
            <div class="show-all">
              <img src="http://wmall.wochu.cn/h5/home/vueimg/down@3x.png" />
            </div>
          </div>
        </div>
        <!-- 我厨快报下面图片 -->
        <div v-if="index==1" >
          <router-link 
            :to="{name:'activity',params:{aTId:item.source.split('=')[1]}}" 
            tag="div" 
            class="img-link" 
            v-for="(item,index) in item.items" 
            :key="index">
            <img :src="item.imgUrl" />
          </router-link>
        </div>
        <!-- 限时特惠 -->
        <div class="temp-list1" v-if="index==2">
          <div class="temp-title">
            <span class="line-rt">
              <p>限时特惠</p>
            </span>
          </div>
          <router-link 
            :to="{name:'detail',params:{id:item1.source}}" 
            tag="div"
            class="temp-content" 
            v-for="(item1,index1) in item.items" 
            :key="index1">
            <div class="img-view" >
              <img :src="item1.imgUrl" />
              <div class="corner-mark" v-for="(item2,index2) in item1.labels" :key="index2">
                <img :src="item2.labelUrl" />
              </div>
            </div>
            <div class="temp-goods-info">
              <p class="temp-goods-name">{{item1.goodsName}}</p>
              <div class="goods-intro">{{item1.description}}</div>
              <div class="temp-goods-price">
                <div class="price-wrap">
                  <div class="real-price">
                    ¥
                    <span class="before-point">{{Math.floor(item1.price)}}</span>
                    <span class="after-point">{{item1.price | toDecimal}}</span>
                  </div>
                  <p class="markt-price" v-show="item1.price !== item1.marketPrice ">{{item1.marketPrice | reverser}}</p>
                </div>
                <div class="add-to-cart">
                  <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" />
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- 菜品滑动 -->
        <Menu-Slider :menu="item.items" v-if="index==3"></Menu-Slider>

        <!-- 图片链接 -->
        <div v-if="index==4 || index==5">
          <router-link 
            :to="{name:'activity',params:{aTId:item.source.split('=')[1]}}" 
            tag="div" class="img-link" 
            v-for="(item,index) in item.items" 
            :key="index" >
            <img :src="item.imgUrl" />
          </router-link>
        </div>
         <!-- 三张链接图 -->
        <div v-if="index==6">
            <div class="group-list3" >
              <div class="left-view">
                <img :src="item.imgUrl"  v-for="(item,index) in item.items" :key="index" v-show="index==0"/>
              </div>
              <div class="right-view" >
                <div class="rt-top-view" >
                  <img :src="item.imgUrl" v-for="(item,index) in item.items" :key="index" v-show="index==1" />
                </div>
                <div v-show="index==2" v-for="(item,index) in item.items" 
                    :key="index" >
                  <router-link 
                    :to="{name:'activity',params:{aTId:item.source.split('=')[1]}}" 
                    tag="div" class="rt-bottom-view"
                    >
                    <img :src="item.imgUrl" />
                  </router-link>
                </div>
                <!-- <router-link 
                  :to="{name:'activity',params:{aTId:item.source.split('=')[1]}}" 
                  tag="div" class="rt-bottom-view" >
                  <img :src="item.imgUrl" v-for="(item,index) in item.items" :key="index" v-show="index==2"/>
                </router-link > -->
              </div>
            </div>
        </div>
        
          <!-- 秒变大厨 -->
        <div class="temp-list1" v-if="index==7">
          <div class="temp-title">
            <span class="line-rt">
              <p>{{item.title}}</p>
            </span>
          </div>
          <router-link  
                :to="{name:'detail',params:{id:item.source}}" 
                 tag="div"  
                 class="temp-content" 
                 v-for="(item,index) in item.items" 
                 :key="index">
            <div class="img-view">
              <img :src="item.imgUrl"/>
              <div class="corner-mark" v-for="(item2,index2) in item.labels" :key="index2">
                <img :src="item2.labelUrl" />
              </div>
            </div>
            <div class="temp-goods-info">
              <p class="temp-goods-name">
                <span></span>{{item.goodsName}}
              </p>
              <div class="goods-intro">{{item.description}}</div>
              <div class="temp-goods-price small-price">
                <div class="price-wrap">
                  <div class="real-price">
                    ¥
                    <span class="before-point">{{Math.floor(item.price)}}</span>
                    <span class="affter-point">{{item.price | toDecimal}}</span>
                  </div>
                  <p class="markt-price">{{item.marketPrice | reverser}}</p>
                </div>
                <div class="add-to-cart">
                  <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" />
                </div>
              </div>
            </div>
          </router-link >
        </div>

        <!-- 菜品滑动 -->
        <Menu-Slider :menu="item.items" v-if="index==8"></Menu-Slider>

        <!-- 本周新菜 -->
        <div v-if="index>8 && index%2 == 1">
          <router-link 
            :to="{name:'activity',params:{aTId:item.source.split('=')[1]}}" 
            tag="div" class="img-link" 
            v-for="(item,index) in item.items" 
            :key="index" >
            <img :src="item.imgUrl" />
          </router-link>
          <!-- <div class="img-link" v-for="(item,index) in item.items" :key="index">
            <img :src="item.imgUrl" />
          </div> -->
        </div>


        <!-- <div v-if="index==4 || index==5">
          <router-link 
            :to="{name:'activity',params:{aTId:item.source.split('=')[1]}}" 
            tag="div" class="img-link" 
            v-for="(item,index) in item.items" 
            :key="index" >
            <img :src="item.imgUrl" />
          </router-link>
        </div> -->
        
        <!-- 本周新菜下面菜品  -->
        <div class="goods-list" v-if="index>9 && index%2 == 0">
          <ul>
            <li v-for="(item,index) in item.items" :key="index">
              <router-link :to="{name:'detail',params:{id:item.source}}" tag="a">
                <img :src="item.imgUrl"/>
                <div class="corner-mark" v-for="(item1,index1) in item.labels" :key="index1">
                  <img :src="item1.labelUrl" />
                </div>
              </router-link>
              <div class="goods-name ellipsis">
                <span class></span>{{item.goodsName}}
              </div>
              <div class="price-cart">
                <div class="price-ctl">
                  <div class="market-price" v-show="item.marketPrice !== item.price">{{item.marketPrice | reverser}}</div>
                  <div class="price" >{{item.price | reverser}}</div>
                </div>
                <v-touch class="addCart" @tap="addCart(item.source)" tag="div">
                  <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" />
                </v-touch>
              </div>
            </li>
          </ul>
        </div>
      
      </div>

    </div>
  </div>
</template>
<script>
import {homeAddressApi,homeHeaderApi,homeContentApi} from "@api";
import {mapState,mapActions} from "vuex";
import http from "@utils/http";
export default {
  name:"Home",
  async created() {
    let address = await homeAddressApi();
    this.adr = address;
    let data = await homeHeaderApi();
    this.carousel = data.data.carousel;
    this.topNav = data.data.recommendedContent;
    let data1 = await homeContentApi();
    this.list = data1.data.acts;
    console.log(this.list)
  },
  data() {
    return {
      adr:"",
      carousel:[],
      topNav: [],
      list: [],
    };
  },
  methods: {
    ...mapActions({
      addCart:"cart/addCart"
    })
  },
};
</script>

<style>
.box {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 0.4rem;
}
.content {
  width: 100%;
  margin-bottom: 0.683333rem;
}
/* 导航 */
.top-nav {
  width: 100%;
  box-sizing: border-box;
}
.top-nav-ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0.058333rem 0 0.083333rem 0.058333rem;
  background: #fff;
  box-sizing: border-box;
}
.top-nav-ul li {
  margin: 0.125rem 0;
}
.top-nav-ul img {
  width: 0.755rem;
  height: 0.755rem;
}
.goods-iitem-list{
  width: 100%;
}
/* 我厨快报 */
.broadcast{
  width:100%;
}
.wochu-broadcast {
  border-top: .008333rem solid #e5e5e5;
  display: flex;
  flex: 1;
  justify-content: space-between;
  background: #fff;
}
.broadcast-title {
  width: .3725rem;
  float: left;
  padding: .106667rem 0 0 .106667rem;
}
.broadcast-title img {
  /* width: .258333rem; */
  height: .266667rem;
  border-right: .008333rem solid #e5e5e5;
  padding-right: .106667rem;
}
.broadcast-content {
  width: 100%;
  display: flex;
  position: relative;
}
.scroll-content {
  width: 100%;
  overflow: hidden;
}
.scroll-content .animate {
  width: 100%;
  height: .508333rem;
  overflow: hidden;
}
.scroll-content li {
  width: 100%;
  height: .5rem;
  padding: .106667rem 0 .106667rem .115rem;
  color: #001e00;
  font-size: .133333rem;
  line-height: 1.14rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.show-all {
  position: absolute;
  top: 40%;
  right: 5%;
}
.show-all img {
  width: .133333rem;
  height: .066667rem;
  line-height: .066667rem;
}
/* 我厨快报下面图片 */
.img-link {
  width: 100%;
}
.img-link img {
  width: 100%;
}
/* 限时特惠 */
.temp-list1 {
  width: 100%;
  padding-top: 0.133333rem;
  background: #f4f4f4;
  position: relative;
}
.temp-title {
  background: #fff;
  padding: 0.133333rem 0;
  border-bottom: 0.008333rem solid #e5e5e5;
  text-align: center;
}
.line-rt {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 0.008333rem;
  background: #000000;
}
.temp-title p {
  line-height: .15rem;
  color: #001e00;
  font-size: 0.133333rem;
  font-weight: 600;
  width: 0.833333rem;
  position: absolute;
  top: -0.083333rem;
  left: 35%;
  background: #ffffff;
  z-index: 2;
}
.temp-list1 .temp-content {
  width: 100%;
  height: 1.358333rem;
  padding: 0.125rem 0.106667rem;
  background: #ffffff;
  display: flex;
  flex: 1;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
}
.img-view {
  width: 1.15rem;
  height: 1.15rem;
  position: relative;
}
.img-view img {
  width: 100%;
}
.corner-mark {
  width: 0.291667rem;
  position: absolute;
  top: 0;
  left: 0;
}
.corner-mark img {
  width: 100%;
}
.temp-goods-info {
  padding-left: 0.088333rem;
}
.temp-goods-name {
  width: 1.833333rem;
  font: 0.133333rem/1.2 "";
  font-weight: 700;
  margin-top: 0.125rem;
  color: #666666;
}
.temp-goods-price {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.price-wrap {
  display: flex;
}
.real-price {
  float: left;
  color: #ff5918;
  font-size: 0.116667rem;
}
.before-point {
  font-size: 0.166667rem;
}
.after-point {
  font-size: 0.116667rem;
}
.markt-price {
  float: left;
  font-size: 0.1rem;
  text-decoration: line-through;
  color: #999;
  margin-left: 0.083333rem;
  line-height: 0.233333rem;
  padding-top: 0.025rem;
}
.add-to-cart {
  width: 0.2308rem;
  height: 0.230833rem;
}
.add-to-cart img {
  width: 100%;
}
/* 菜品滑动 */
.slide{
  float: left;
}
.slider-item {
    background: #fff;
    padding: .115rem 0 0 .106667rem;
    /* z-index: 1; */
    box-sizing: border-box;
    height: 1.583333rem;
    display: flex;
    float: left;
}
.advice-group img{
  width: .791667rem;
}
.advice-group{
  /* height: 1.558333rem; */
  margin-right: .15rem;
  width: .841667rem;
  position: relative;
  vertical-align: top;
}
.group-icon {
    position: absolute;
    top: 0;
    left: 0;
    height: .239167rem;
    width: .283333rem;
}
.group-icon img{
  width: 100%;
}
.group-name{
  font-size: .1rem;
  margin-top: .106667rem;
  width: .841667rem; 
}
.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-price{
    height: 0.1058rem;
    margin-top: .058333rem;
    font-size: .1rem;
    color: #bababa;
    text-decoration: line-through;
}
.o-price {
    height: .105833rem;
    margin-top: .044167rem;
    font-size: .1rem;
    color: #001e00;
    line-height: .105833rem;
}
.add-cart {
    position: absolute;
    bottom: .18rem;
    left: .62rem;
    width: .171667rem;
}
.add-cart img{
  width: 100%;
}

/* 图片链接 */
.img-link {
  background: #f8f8f8;
  /* margin-top: .041667rem; */
}
.group-list3 {
  padding: 0.133333rem 0.083333rem 0;
  background: #f4f4f4;
  display: flex;
}
.left-view,
.right-view {
  background: #fff;
  width: 1.558333rem;
  height: 2.316667rem;
  border-radius: 0.025rem;
  float: left;
}
.left-view {
  margin-right: 0.0417rem;
}
.left-view img {
  border-radius: 0.025rem;
  width: 100%;
  height: 100%;
}
.right-view .rt-top-view {
  height: 1.15rem;
  border-bottom: 1px solid #e5e5e5;
}
.right-view .rt-bottom-view {
  height: 1.15rem;
  margin-top:.041667rem;
}
.rt-top-view img,
.rt-bottom-view img {
  width: 100%;
  height: 100%;
}

/* 秒变大厨 */
.temp-list1 {
  padding-top: 0.1333rem;
  background: #f4f4f4;
}
.temp-goods-info .goods-intro {
  width: 1.833333rem;
  height: 0.25rem;
  font-size: 0.116667rem;
  line-height: 0.25rem;
  letter-spacing: 0.01rem;
  padding-top: 0.166667rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.small-price {
  margin-top: 0.083333rem;
}
/* 本周新菜下面图片 */
 .goods-list {
    padding: 0 .083333rem .166667rem .125rem;
    position: static;
    display: flex;
    background: #fff;
 }
.goods-list ul li {
    width: .95rem;
    height: 1.458333rem;
    margin-top: .125rem;
    /* margin-right: .033333rem; */
    float: left;
    box-sizing: border-box;
    position: relative;
}
.goods-list ul li a img {
    width: 100%;
    /* height: 1.008333rem; */
}
.goods-list ul li .goods-name {
    width: 100%;
    height: .25rem;
    font-size: .1rem;
    line-height: .25rem;
    padding-top: .033333rem;
    color: #333;
}
.goods-list ul li .price-cart {
    height: .283333rem;
    margin-top: .033333rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.goods-list ul li .price-cart .price-ctl .price {
    height: 0.1333rem;
    font-size: 0.1333rem;
    color: #f96d16;
    line-height: 0.1333rem;
    margin-top: 0.0333rem;
}
.goods-list ul li .price-cart .price-ctl .market-price {
    height: .1rem;
    font-size: .1rem;
    color: #999;
    text-decoration: line-through;
    line-height: .1rem;
    height: auto;
}
.price-cart .addCart {
    width: .291667rem;
    height: .233333rem;
    line-height: .233333rem;
    float: right;
    text-align: center;
}
.price-cart .addCart img {
    width: .208333rem!important;
    height: .208333rem!important;
    float: left;
}
</style>