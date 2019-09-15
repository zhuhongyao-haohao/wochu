<template>
  <div id="box">

      <!-- 顶部轮播图 -->
    <div class="d-top">
      <div class="swiper">
        <div class="swiper-container-goods swiper-container-horizontal swiper-container-android">
          <Wochu-Swiper :val="loopList"></Wochu-Swiper>
          <!-- 当前轮播第几页 -->
          <!-- <div class="swiper-pagination swiper-pagination-goods swiper-pagination-fraction">
            <span class="swiper-pagination-current">{{loopList}}</span>\
            <span class="swiper-pagination-total">2</span>
          </div> -->
        </div>
      </div>
      <!-- 返回图标 -->
      <div class="d-refer">
        <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/refer.png" alt />
      </div>
    </div>

    <!-- 轮播图下方菜品简介 -->
    <div class="d-main clearfix">
      <div class="sign" v-for="(item,index) in menuDetail.goodsLabel" :key="index">
        <img :src="item.labelUrl" v-if="menuDetail.goodsLabel"/>
      </div>
      <h1 class="ellipsis">
        <span></span>{{menuDetail.goodsName}}
      </h1>
      <h2>{{menuDetail.description}}</h2>
      <div class="price clearfix">
        <div class="o-price">{{menuDetail.price | reverser}}</div>
        <div class="m-price">{{menuDetail.marketPrice | reverser}}</div>
      </div>
    </div>

    <!-- 菜品产地等介绍 -->
    <div class="d-navigation">
      <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/navigation.png" alt />
    </div>
    <div class="d-info">
      <div class="condition">
        <span>产地：</span>{{menuDetail.origin1}}
      </div>
      <div class="condition">
        <span class="width-14">保质期：</span>{{menuDetail.shelfLife}}
      </div>
      <div class="condition condition-top">
        <span>规格：</span>{{menuDetail.specification}}
      </div>
      <div class="condition condition-top">
        <span>储存条件：</span>{{menuDetail.storageCondition}}
      </div>
    </div>
    <!---->
    <div class="d-rate clearfix">
      <span>商品评价</span>
      <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/next.png" alt />
    </div>


    <!-- 猜你喜欢头部 -->
    <div class="d-advice-text">
      <i></i>
      <p>猜你喜欢</p>
    </div>
    <!-- 猜你喜欢图片滑动 -->
    <Menu-Slider :menu="likeList"></Menu-Slider>

    <!-- 菜品的图片介绍 -->
    <div class="detialMain">
      <div v-html="menuDetail.descriptionDetail">
      </div>
    </div>

    <!-- 添加到购物车 -->
    <div class="cart">
      <div class="cart-l">
        <img src="http://wmall.wochu.cn/h5/mall/img/vueimg/catr.png" alt />
        <span>0</span>
      </div>
      <div class="cart-r">加入购物车</div>
    </div>
    <div class="cart-on" style="display: none;">加入购物车</div>
    <div class="pop" style="display: none;"></div>
    <div class="cart-info" style="display: none;">
      <div class="close">
        <img src="img/close.png" alt />
      </div>
      <img
        alt
        class="good"
        src="https://img.wochu.cn/upload/4a5c34f7-95e3-4045-b785-e1826b18a19f.jpg"
      />
      <p>商品售价</p>
      <div class="price">￥12.9</div>
      <span>购买数量</span>
      <div class="addmin">
        <span class="min">
          <img src="img/vueimg/min1.png" alt />
        </span>
        <span class="min"></span>
        <input type="text" maxlength="3" />
        <span class="add">
          <img src="img/vueimg/addreal.png" alt />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {menuDetailApi,menuDetailLoopApi,menuDetailLikeApi} from "@api"
export default {
  name:"Detail",
   methods :{
    async fetchData(){
      let {id} = this.$route.params;
      let data = await menuDetailApi(id);
      console.log(data.data);
      this.menuDetail = data.data;
      let list = await menuDetailLoopApi(id);
      this.loopList = list.data;
      this.loopList.flag = false;
      let like = await menuDetailLikeApi(id);
      this.likeList = like.data.userloving;
    }
  },
   created() {
    this.fetchData();
  },
  data(){
    return{
      menuDetail:{},
      loopList:[],
      likeList:[]
    }
  },
  watch:{
    '$route':"fetchData"
  }
};
</script>

<style>
#box{
    width: 100%;
}
.d-top {
  position: relative;
  width: 100%;
  height: 3.35rem;
  overflow: hidden;
}
.d-top .swiper,
.d-top .swiper .swiper-container-goods {
  height: 100%;
}
.d-top .swiper .swiper-container-goods .swiper-pagination-goods {
  position: absolute;
  width: 0.258333rem;
  height: 0.258333rem;
  border-radius: 50%;
  color: #fff;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.258333rem;
  background: #000;
  bottom: 0.583333rem;
  right: 0.116667rem;
  opacity: 0.3;
}
img {
  display: block;
  width: 100%;
}

.d-main {
  background: #fff;
  margin: -0.416667rem auto 0;
  width: 2.858333rem;
  box-shadow: 1px -1px 20px rgba(34, 34, 34, 0.3);
  position: relative;
  border-radius: 10px;
  padding-top: 0.208333rem;
  z-index: 2;
  padding-bottom: 0.141667rem;
}
.clearfix {
  zoom: 1;
}
.d-main .sign {
  position: absolute;
  top: -0.116667rem;
  left: 0.166667rem;
  height: 0.233333rem;
}
.d-main .sign img {
  width: 0.3rem;
  float: left;
  margin-left: 0.033333rem;
}
.d-main h1 {
  font-size: 0.133333rem;
  color: #001e00;
  margin: 0 0 0 0.108333rem;
  height: 0.2167rem;
  line-height: 0.2167rem;
}
.d-main h2 {
    font-weight: 400;
    font-size: .116667rem;
    color: #999;
    margin: 0.1rem 0 0 0.1rem;
    line-height: .133333rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.d-main .price {
  margin: 0.1rem 0 0 0.108333rem;
  font-size: 0;
  display: flex;
}
.d-main .price .o-price {
  font-size: 0.15rem;
  color: #ff5918;
  line-height: 1;
}
.d-main .price .m-price {
  font-size: 0.1rem;
  color: #ccc;
  margin: 0.025rem 0 0 0.141667rem;
  float: left;
  text-decoration: line-through;
}
/* 返回按钮 */
.d-top .d-refer {
    width: .25rem;
    height: .25rem;
    position: absolute;
    top: .258333rem;
    left: .108333rem;
    z-index: 1;
}
/* 菜品产地等介绍 */
.d-navigation {
  overflow: hidden;
  width: 100%;
  height: 0.416667rem;
}
.d-navigation img {
  margin-top: 0.158333rem;
}
.d-info {
  height: 0.583333rem;
  background: #fff;
  padding: 0.208333rem 0 0 0.116667rem;
}
.d-info .condition {
  font-size: 0.116667rem;
  width: 50%;
  color: #001e00;
  float: left;
}
.d-info .condition-top {
  margin-top: 0.125rem;
}
.d-rate {
  background: #fff;
  height: 0.45rem;
  line-height: 0.45rem;
  padding: 0 0.116667rem;
  font-size: 0.133333rem;
  margin-top: 0.108333rem;
}
.d-rate img {
  width: 0.066667rem;
  float: right;
  margin-top: 0.125rem;
}
/* 猜你喜欢 */
.d-advice-text,
.d-advice-text p {
  position: relative;
  background: #f4f4f4;
  width: 0.833333rem;
  left: 30%;
}
.d-advice-text {
  height: 0.45rem;
  line-height: 0.45rem;
  font-size: 0.133333rem;
  color: #001e00;
  text-align: center;
}
.d-advice-text i {
  display: block;
  height: 1px;
  width: 2.375rem;
  position: absolute;
  top: 0.25rem;
  left: -0.5rem;
  background: #001e00;
}
.d-advice-info {
  background: #fff;
  padding: 0.125rem 0 0.041667rem 0.116667rem;
  /* overflow-x: scroll; */
  /* overflow-y: hidden; */
  /* float: left; */
  display: inline-block;
  height: 1.575rem;
  /* width: 100%; */
  white-space: nowrap;
  font-size: 0;
  box-sizing: border-box;
}
.d-advice-info .advice-group {
  display: inline-block;
  margin-right: 0.175rem;
  width: .8rem;
  position: relative;
  vertical-align: top;
}
.d-advice-info .advice-group .group-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 0.266667rem;
}
.d-advice-info .advice-group .group-name {
  font-size: 0.1rem;
  margin-top: 0.1rem;
  width: 115px;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.d-advice-info .advice-group .m-price {
  margin-top: .041667rem;
  font-size: 0.1rem;
  color: #bababa;
  text-decoration: line-through;
}
.d-advice-info .advice-group .o-price {
  margin-top: 0.05rem;
  line-height: 1;
  font-size: 0.1rem;
  color: #001e00;
}
.d-advice-info .advice-group .add-cart {
  position: absolute;
  top: 1.208333rem;
  left: .583333rem;
  width: 0.166667rem;
}
/* 菜品图片介绍 */
.detialMain {
  padding-bottom: 0.575rem;
}
/* 添加到购物车 */
.cart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.416667rem;
  z-index: 6;
  display: flex;
}
.cart .cart-l {
  width: 0.908333rem;
  height: 0.5rem;
  background: #eb481c;
  position: relative;
}
.cart .cart-l img {
  width: 0.208333rem;
  margin: 0.125rem 0 0 0.341667rem;
}
.cart .cart-l span {
  font-size: 0.016667rem;
  color: #ff5918;
  background: #fff;
  position: absolute;
  width: 0.15rem;
  height: 0.15rem;
  text-align: center;
  line-height: 0.15rem;
  top: 0.116667rem;
  left: 0.5rem;
  border-radius: 50% 50% 50% 50%;
}
.cart-on,
.cart .cart-r {
  background: #ff5918;
  color: #fff;
  font-size: 0.133333rem;
  text-align: center;
  height: 0.416667rem;
  line-height: 0.416667rem;
}
.cart .cart-r {
  text-align: center;
  float: left;
  flex: 1;
}
</style>