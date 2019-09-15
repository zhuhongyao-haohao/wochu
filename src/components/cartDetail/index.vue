<template>
  <div id="detail">
    <div class="head">
      <div class="swiper">
        <van-swipe :autoplay="5000" :loop="false" indicator-color="#fff">
          <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="return" @click="handlerBack()">
          <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/refer.png" />
      </div>
    </div>
    <div class="title">
        <div class="sign"></div>
        <h1 class="ellipsis">
            <span></span>
            {{detailObj.goodsName}}
        </h1>
        <h2>{{detailObj.description}}</h2>
        <div class="price">
            <div class="newPrice">{{detailObj.price}}</div>
            <div class="oldPrice">{{detailObj.marketPrice}}</div>
        </div>
    </div>
    <div class="navigation">
      <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/navigation.png">
    </div>
    <div class="info">
      <div class="info1">
        <span>产地：</span>
      </div>
      <div class="info2">
        <span>保质期：</span>
      </div>
      <div class="info3">
        <span>规格：</span>{{detailObj.specification}}
      </div>
      <div class="info4">
        <span>储存条件：</span>{{detailObj.storageCondition}}
      </div>
    </div>
    <div class="evaluate">
      <span>商品评价</span>
      <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/next.png" alt>
    </div>
    <div class="think">
      <i></i>
      <p>猜你喜欢</p>
    </div>
    <div class="lun">
      <div class="lungroup">
        <div class="group-zhan"></div>
        <img src="https://img.wochu.cn/upload/dcda4900-63f0-4cce-ade3-7a4f37c0cc04.jpg">
        <div class="group-name">咪你口袋薏米仁400g</div>
        <div class="oldPrice">￥23.8</div>
        <div class="newPrice">￥19.9</div>
        <div class="add">
          <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/add.png">
        </div>
      </div>
    </div>
    <div class="content">
      <p class="null"><br></p>
      <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/77e84dd0-e970-4ab2-89ad-d905da5fe6d0.jpg">
      <p><img src="https://img.wochu.cn/upload/goodsinfofoot-201811020951.png"></p>
    </div>
    <div class="cart">
      <div class="cart-l">
        <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/catr.png">
        <span>0</span>
      </div>
      <div class="cart-r">加入购物车</div>
    </div>
  </div>
</template>


<script>
import { cartDetailGoodsApi } from "@api";
export default {
  name: "swiper",
  async created() {
    let data = await cartDetailGoodsApi();
    console.log(data.data);
    this.detailObj = data.data;
  },
  data() {
    return {
      detailObj:{},
      SwiperImg: [
        "https://img.wochu.cn/upload/af5dfdb9-657e-4574-b3af-fb7a8e002730.jpg",
        "https://img.wochu.cn/upload/2671f4e6-4113-4e67-ac3c-7f02e17bb0ce.jpg",
        "https://img.wochu.cn/upload/7b4e6d93-2911-46af-92ad-2a3f56c957e3.jpg"
      ]
    };
  },
  components: {},
  methods: {
    handlerBack(){
      this.$router.back();
    }
  }
};
</script>


<style scoped>
a, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, img, li, ol, p, span, table, td, th, ul {
    border: 0;
}
img, input {
    border: none;
    vertical-align: middle;
}
img {
    display: block;
    width: 100%;
}
div{
    display: block;
}
/* 轮播的样式 */
.swiper {
  width: 100%;
  height: 3.4rem;
}
.van-swipe {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff;
  background: #fff;
}
.swiper .van-swipe .van-swipe__track {
  display: flex;
}
/* 头部 */
.head{
    position: relative;
    width: 3.13rem;
    height: 3.13rem;
    overflow: hidden;
}
.head .return{
    width: 0.23rem;
    height: 0.23rem;
    position: absolute;
    top: 0.25rem;
    left: 0.08rem;
    z-index: 1;
}
.head .return img{
    width: 100%;
}
/* 第二部分 */
.title{
    margin: -0.2rem 0 0 0.1rem;
    width: 2.92rem;
    box-shadow: 1px -1px 20px rgba(146, 119, 119, 0.3);
    position: relative;
    border-radius: 0.08rem;
    padding-top: 0.19rem;
    z-index: 2;
    padding-bottom: 0.13rem;
    height: 1.03rem;
}
.title .sign{
    position: absolute;
    top: -.13rem;
    left: .19rem;
    height: .26rem;
}
.title h1{
    font-size: 0.15rem;
    color: #001e00;
    margin: 0 0 0 0.09rem;
    height: 0.19rem;
    line-height: 0.18rem;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title h2{
    font-weight: 400;
    font-size: 0.12rem;
    color: #999;
    margin: 0.1rem 0 0 0.1rem;
    /* 给了15px */
    line-height: 0.13rem;
    display: -webkit-box;
    overflow: hidden;
}
.title .price{
    margin: 0.1rem 0 0 0.1rem;
    font-size: 0;
    float: left;
}
.title .price .newPrice{
    font-size: 0.15rem;
    color: #ff5918;
    float: left;
}
.title .price .oldPrice{
    font-size: 0.11rem;
    color: #ccc;
    margin: 0.02rem 0 0 0.12rem;
    float: left;
    text-decoration: line-through;
}
/* 第三部分 */
.navigation{
    overflow: hidden;
    width: 100%;
    height: 0.42rem;
    background: #f4f4f4;
}
.navigation img{
    margin-top: 0.13rem;
    display: block;
    width: 100%;
    height: 0.15rem;
}
/* 第四部分 */
.info{
    height: 0.78rem;
    background: #fff;
    padding: 0.17rem 0 0 0.1rem;
}
.info .info1{
    float: left;
    font-size: 0.12rem;
    width: 1.46rem;
    color: #001e00;
}
.info .info1 span{
    color: #999;
}
.info .info2{
    float: left;
    font-size: 0.12rem;
    width: 1.46rem;
    color: #001e00;
}
.info .info2 span{
    width: 0.58rem;
    display: inline-block;
    color: #999;
}
.info .info3{
    float: left;
    font-size: 0.12rem;
    width: 1.46rem;
    color: #001e00;
    margin-top: 0.21rem;
}
.info .info3 span{
    color: #999;
}
.info .info4{
    float: left;
    font-size: 0.12rem;
    width: 1.46rem;
    color: #001e00;
    margin-top: 0.21rem;
}
.info .info4 span{
    color: #999;
}
/* 第五部分 */
.evaluate{
    height: 0.38rem;
    line-height: 0.38rem;
    padding: 0 0.1rem;
    font-size: 0.13rem;
    margin-top: 0.09rem;
}
.evaluate span{
    color: #001e00;
    font-size: 0.13rem;
    float: left;
    /* margin-top: 0.13rem; */
}
.evaluate img{
    width: 0.06rem;
    height: 0.11rem;
    float: right;
    margin-top: 0.13rem;
    display: block;
}
/* 第六部分 */
.think{
    position: relative;
    background: #f4f4f4;
    height: 0.38rem;
    line-height: 0.38rem;
    font-size: 0.13rem;
    color: #001e00;
    text-align: center;
}
.think i{
    display: block;
    height: 1px;
    width: 1.96rem;
    position: absolute;
    top: 0.19rem;
    left: .6rem;
    background: #001e00;
}
.think p{
    width: 0.7rem;
    display: inline-block;
    position: relative;
    background: #f4f4f4;
}
/* 第七部分 */
.lun{
    height: 1.52rem;
    padding: 0.11rem 0 0 0.1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    float: left;
    display: inline;
    width: 3.13rem;
    white-space: nowrap;
    font-size: 0;
}
.lun .lungroup{
    display: inline-block;
    margin-right: 0.15rem;
    width: 0.79rem;
    position: relative;
    vertical-align: top;
}
.lun .lungroup .group-zhan{
    position: absolute;
    top: 0;
    left: 0;
    height: 0.23rem;
}
.lun .lungroup .group-name{
    font-size: 0.1rem;
    margin-top: 0.1rem;
    width: 0.79rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.lun .lungroup .oldPrice{
    margin-top: 0.06rem;
    font-size: 0.08rem;
    color: #bababa;
    text-decoration: line-through;
}
.lun .lungroup .newPrice{
    margin-top: 0.06rem;
    font-size: 0.1rem;
    color: #001e00;
}
.lun .lungroup .add{
    position: absolute;
    top: 1.2rem;
    left: 0.65rem;
    width: 0.16rem;
}
.lun .lungroup .add img{
  display: block;
}
/* 第八部分 */
.content{
    width: 100%;
    overflow: hidden;
}
.content .null{
  width: 100%;
  height: 0.42rem;
  background: #F4F4F4;
}
/* 第九部分 */

/* <div class="cart">
      <div class="cart-l">
        <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/catr.png">
        <span>0</span>
      </div>
      <div class="cart-r">加入购物车</div>
    </div> */
.cart{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.42rem;
    z-index: 4;
}
.cart .cart-l{
    float: left;
    width: 0.75rem;
    height: 1rem;
    background: #eb481c;
}
.cart .cart-l img{
    width: 0.17rem;
    height: 0.17rem;
    margin: 0.11rem 0 0 0.28rem;
    display: block;
}
.cart .cart-l span{
    font-size: 0.09rem;
    color: #ff5918;
    background: #fff;
    position: absolute;
    width: 0.13rem;
    height: 0.13rem;
    text-align: center;
    line-height: 0.13rem;
    top: .08rem;
    left: .42rem;
    border-radius: 50% 50% 50% 50%;
}
.cart .cart-r{
    background: #ff5918;
    color: #fff;
    font-size: 0.13rem;
    text-align: center;
    width: 2.375rem;
    height: 0.42rem;
    line-height: 0.42rem;
    float: left;
}
</style>