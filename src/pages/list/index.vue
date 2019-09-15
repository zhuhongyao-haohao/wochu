<template>
    <div>
       <header>
           <v-touch tag="div" @tap="handleBack()" class="back">
               <img src="http://wmall.wochu.cn/h5/hotlist/img/back.png?v=d0c1db9a95">
           </v-touch>
           <div class="parent-name">时令蔬果专区</div>
           <div class="go-cart">
               <img src="http://wmall.wochu.cn/h5/hotlist/img/icon-cart-60@3x.png?v=80ccbcf8e7">
                <p class="cart-count">1</p>
           </div>
       </header>
       <ul class="goods-list">
           <li>
               <div class="fl">
                   <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/e1dd2a5c-e459-4c2c-8e53-14ae67eb9e1b.jpg" alt="">
               </div>
               <div class="fr">
                   <p class="goods-name">蒜苔250g</p>
                   <div class="goods-mark"></div>
                   <div class="goods-price">
                       <div class="price-wrap">
                           <span class="real-price">￥3.9</span>
                            <span class="old-price">￥6.9</span>
                       </div>
                       <div class="addTo-cart">
                           <img src="http://wmall.wochu.cn/h5/hotlist/img/icon-listcart-75@3x.png?v=24d2b0ab1a" alt="">
                       </div>
                   </div>
               </div>
           </li>
       </ul>
       <div class="load-more">没有更多了~</div>
    </div>
</template>
<script>
export default {
    name:"List",
    methods: {
    handleBack() {
      this.$router.back();
    }
  }
}
</script>
<style scoped>
   header {
    /* position: fixed; */
    width: 100%;
    height: 0.3833rem;
    line-height: 0.3833rem;
    color: #333;
    font-size: 0.125rem;
    padding: 0 0.1rem;
    background: #fff;
    z-index: 1;
    top: 0;
    left: 0;
    border-bottom: 1px solid #e5e5e5;
}
.back {
    width:0.6rem;
    float: left;
}
header img {
    height: 0.2667rem;
    width: auto;
    margin-top: 0.0833rem
}
.parent-name {
    width: 1.8167rem;
    float: left;
    text-align: center;
}
.go-cart {
    float: left;
    text-align: right;
    margin-left: 0.25rem;
    margin-top: 0.025rem
}
.go-cart img {
    width: 0.1833rem;
    height:0.1833rem;
    margin-right: 0.0417rem;
}
.cart-count {
    position: absolute;
    height: 0.125rem;
    width: 0.125rem;
    top: 0.0833rem;
    right: 0.1333rem;
    font-size: 0.1rem;
    background: #ee7c1b;
    border-radius: 50%;
    line-height: 0.125rem;
    color: #fff;
    text-align: center;
}
.goods-list {
    font-size: 0.1167rem;
    width: 100%;
    top: 0.375rem;
    overflow-y: scroll;
    background: #fff;
    margin-bottom: 0.375rem;
}
.goods-list li {
    width: 3.2333rem;
    height: 1.2583rem;
    padding: 0.1667rem 0.1rem 0.1333rem;
    border-bottom: 1px solid #e5e5e5;
}
.goods-list li .fl {
    float: left;
    width: 0.9167rem;
    height:  0.9167rem;
    position: relative;
}
.goods-list li .fl img {
    width: 100%;
    height: 100%;
}
.goods-list li .fr {
    margin-left: 0.0833rem;
    float: left;
    width: 1.975rem;
    height: 100%;
}
.goods-name {
    width: 100%;
    height: 0.35rem;
    line-height: 0.175rem;
    font-size: 0.125rem;
    font-weight: 600;
    letter-spacing: 0.0167rem;
    overflow: hidden;
    margin-bottom: 1px;
}
.goods-mark {
    overflow: hidden;
    width: 0.9rem;
    height: 0.1667rem;
    margin-bottom: 0.0333rem;
    margin-top: 0.125rem;
}
.price-wrap {
    float: left;
    line-height: 0.2083rem;
}
.real-price {
    font-size: 0.1333rem;
    color: #ff5918;
    margin-right: 0.0833rem;
}
.old-price {
    font-size: 0.1rem;
    text-decoration: line-through;
    color: #ccc;
}
.addTo-cart {
    float: right;
    width: 0.2167rem;
    height: 0.2167rem;
}
.addTo-cart img {
    width: 100%;
    height: 100%;
}
.load-more {
    background: #fff;
    color: #666;
    font-size: 0.1167rem;
    text-align: center;
    /* line-height: 0.0083rem; */
    margin-top: -0.25rem
}
</style>