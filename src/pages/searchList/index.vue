<template>
  <div>
    <header>
      <div class="search-view">
        <v-touch tag="div" @tap="handleBack()" class="back">
          <img
            src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628"
          />
        </v-touch>
        <div class="search-ctl">
          <img src="http://wmall.wochu.cn/h5/classify/img/search-icon.png"/>
          <input type="text" class="search-key" />
        </div>
        <div class="go-cart">
          <img src="http://wmall.wochu.cn/h5/classify/img/cart.png?v=1a30f75f80"/>
        </div>
      </div>
    </header>
    <section class="search-result">
      <div>
        <div class="result-desc">我厨为您找到“牛排”的相关结果12个</div>
        <ul class="goods-list">
          <li v-for="(item,index) in list" :key="index">
            <div class="fl">
              <img :src="item.icon"/>
              <div class="corner-mark"></div>
            </div>
            <div class="fr">
              <p class="goods-name">{{item.goodsName}}</p>
              <div class="goods-intro"></div>
              <div class="goods-mark"></div>
              <div class="goods-price">
                <div class="price-wrap">
                  <span class="real-price">￥{{item.price}}</span>
                  <span class="old-price">￥{{item.marketPrice}}</span>
                </div>
                <div class="addTo-cart">
                  <img src="http://wmall.wochu.cn/h5/classify/img/icon-listcart-75@3x.png" alt />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { searchListApi } from "@api";

export default {
  name: "searchList",
  async created() {
    // let {keyword} = this.$route.params;
    let data = await searchListApi();
    this.list = data.data.items;
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  },
  data(){
      return{
          list:[]
      }
  }
};
</script>
<style scoped>
header {
  position: absolute;
  width: 100%;
  height: 0.3667rem;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1;
  background: #fff;
}
.search-view {
  width: 2.9583rem;
  height: 0.2417rem;
  margin: 0.0625rem 0.0833rem;
  line-height: 0.2417rem;
  font-size: 0.125rem;
  color: #333;
}
.back,
.search-btn {
  height: 100%;
  width: 0.3333rem;
  float: left;
}
.back img,
.search-btn img {
  width: 0.2417rem;
}
img {
  width: 100%;
}
.search-ctl {
  width: 2.2917rem;
  height: 0.2417rem;
  background: #f1f2f6;
  border-radius: 0.1167rem;
  float: left;
}
.search-ctl img {
  width: 0.2417rem;
  height: 0.2417rem;
  float: left;
}
.search-key {
  width: 1.9333rem;
  height: 0.2417rem;
  padding: 0;
  float: left;
  background: #f1f2f6;
  border: 0;
}
input {
  font-size: 0.1083rem;
  border: none;
  vertical-align: middle;
  outline: none;
}
.go-cart {
  float: left;
  text-align: right;
}
.back,
.go-cart {
  height: 100%;
  width: 0.3333rem;
}
.go-cart img {
  width: 0.2417rem;
  margin-left: 0.0833rem;
}
img {
  font-size: 0.1083rem;
}
.search-result {
  position: absolute;
  top: 0.3667rem;
  bottom: 0;
  width: 100%;
  padding: 0 0.0833rem;
  background: #fff;
  overflow-y: scroll;
}
.result-desc {
  width: 100%;
  height: 0.2917rem;
  line-height: 0.2917rem;
  text-align: center;
  font-size: 0.1rem;
  color: #666;
}
.goods-list {
  font-size: 0.28rem;
  width: 100%;
}
.goods-list li {
  width: 100%;
  height: 1.2167rem;
  padding: 0.1667rem 0 0.1333rem;
  border-bottom: 0.0083rem solid #e5e5e5;
}
.goods-list li .fl {
  float: left;
  width: 0.9167rem;
  height: 0.9167rem;
  position: relative;
}
.goods-list li .fl div {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.5833rem;
  height: 0.2583rem;
  z-index: 2;
  overflow: hidden;
}
.goods-list li .fr {
  margin-left: 0.0833rem;
  float: right;
  width: 1.9167rem;
  height: 100%;
}
.goods-name {
  width: 100%;
  line-height: 0.175rem;
  font-size: 0.125rem;
  font-weight: 600;
  letter-spacing: 0.0083rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.0417rem;
}
.goods-intro {
  width: 100%;
  height: 0.1417rem;
  font-size: 0.1rem;
  line-height: 0.1333rem;
  letter-spacing: 0.0083rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-bottom: 0.18rem;
}
.goods-mark {
  overflow: hidden;
  width: 0.875rem;
  height: 0.1667rem;
  margin-bottom: 0.0167rem;
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
img {
  font-size: 0.1083rem;
}
</style>