<template>
  <section class="goods-list">
    <ul class="goods-ul">
      <div class="class-item li-on">
        <li v-for="(item,index) in list" :key="index">
          <div class="fl">
            <img :src="item.picUrl" alt />
            <div class="corner-mark"></div>
          </div>
          <div class="fr">
            <p class="goods-name">{{item.goodsName}}</p>
            <div class="goods-intro">{{item.description}}</div>
            <div class="goods-mark"></div>
            <div class="goods-price">
              <div class="price-wrap">
                <span class="real-price">￥{{item.price}}</span>
                <span class="old-price">￥{{item.marketPrice}}</span>
              </div>
              <div class="addTo-cart">
                <img src="http://wmall.wochu.cn/h5/classify/img/icon-listcart-75@3x.png"/>
              </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </section>
</template>
<script>
import { wochuListApi } from "@api";
export default {
  name: "Sucai",
  async created() {
    let { id } = this.$route.query;
    let data = await wochuListApi(id);
    this.list = data.data.categories[5].goods;
  },
  data(){
    return{
      list:[]
    }
  }
};
</script>
<style scoped>
.goods-list {
  font-size: 0.1167rem;
  width: 100%;
  position: absolute;
  top: 1.2285rem;
  height: 4.525rem;
}
.goods-list .goods-ul {
  width: 100%;
  padding-bottom: 0.6467rem;
}
.class-item {
  width: 100%;
  height: auto;
}
.goods-ul li {
  width: 100%;
  height: 1.2583rem;
  padding: 0.0167rem 0.1rem 0.1333rem;
  border-bottom: 1px solid #e5e5e5;
}
.goods-ul li .fl {
  float: left;
  width: 0.9167rem;
  height: 0.9167rem;
  position: relative;
  margin-top: 0.125rem;
}
.goods-ul li .fl img {
  width: 100%;
  height: 100%;
}
.goods-ul li .fl div {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.6rem;
  height: 0.2667rem;
  z-index: 2;
  overflow: hidden;
}
.goods-ul li .fr {
  /* margin-left: 0.0833rem; */
  float: right;
  width: 1.975rem;
  height: 100%;
  margin-top: 0.125rem;
}
.goods-name {
  width: 100%;
  line-height: 0.175rem;
  font-size: 0.125rem;
  font-weight: 800;
  letter-spacing: 0.02rem;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0.0417rem;
}
.goods-intro {
  width: 100%;
  height: 0.1417rem;
  font-size: 0.1rem;
  line-height: 0.1333rem;
  letter-spacing: 0.01rem;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.075rem;
}
.goods-mark {
  overflow: hidden;
  width: 0.9rem;
  height: 0.1667rem;
  margin-bottom: 0.0167rem;
}
.price-wrap {
  float: left;
  line-height: 0.225rem;
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
</style>