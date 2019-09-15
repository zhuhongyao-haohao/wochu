<template>
  <div class="cartPage">
    <!-- <div class="header"></div>
    <div class="section">
        <router-link to="/login">
          <a class="button">登录</a>
        </router-link>
    </div>-->
    <div class="goods">
      <ul>
        <li>
          <div class="input">
            <input type="checkbox" />
          </div>
          <div class="shopimg">
            <img
              src="https://img.wochu.cn/upload/e32a78c4-5b7f-49bf-a944-0e17e73dd03a.jpg"
            />
          </div>
          <div class="shopinfo">
            <div class="title">洪湖渔家香辣大闸蟹500g</div>
          </div>
          <div class="price">
            <div class="prices">
              <span>￥19.9</span>
              <i>￥39.9</i>
            </div>
            <div class="num">
              <button class="reduce">-</button>
              <input type="text" value="1" class="number" >
              <button class="add">+</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="contain">
      <div class="contain-title"></div>
      <div class="contain-list">
        <div class="contain-item" v-for="(item,index) in suggestGoodsList" :key="index">
          <router-link to="/cartDetail">
            <img class="item-img" :src="item.picUrl" />
          </router-link>

          <div class="item-info">
            <p>{{item.goodsName}}</p>
            <div class="item-info-price">
              <div class="price-contain">
                <div class="price-old">￥{{item.marketPrice}}</div>
                <div class="price-now">￥{{item.price}}</div>
              </div>
              <div class="price-add"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="load-more">没有更多了~</div>
    </div>
  </div>
</template>


<script>
import { cartSuggestGoodsApi } from "@api";
export default {
  name: "Cart",
  async created() {
    let data = await cartSuggestGoodsApi();
    // console.log(data);
    this.suggestGoodsList = data.data.items;
  },
  data() {
    return {
      suggestGoodsList: [],

    };
  }
};
</script>


<style scoped>
body {
  background: #f4f4f4;
}

/* 最上面空白div高度为150px */
.cartPage .header {
  width: 100%;
  height: 1.25rem;
  background: #f4f5f7;
}
.cartPage .section {
  width: 100%;
  height: 0.54rem;
  /* 颜色是#e5e5e5 */
  background: #f4f5f7;
  padding-top: 0.17rem;
}
.cartPage .section .button {
  display: block;
  width: 1rem;
  height: 0.26rem;
  color: #f67d30;
  font-size: 0.13rem;
  text-decoration: none;
  border: 1px solid #f67d30;
  margin: 0 auto;
  text-align: center;
  line-height: 0.26rem;
}
.cartPage .contain {
  width: 100%;

  background: #f4f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.42rem 0.12rem 0.63rem;
}

.contain .contain-title {
  width: 1.97rem;
  height: 0.13rem;
  background: url(http://wmall.wochu.cn/h5/mall/img/recommend.png) center/100%;
  margin: 0 0 0.13rem;
}
.contain .contain-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.contain .contain-list .contain-item {
  width: 32.5%;
  height: 1.63rem;
  display: flex;
  flex-direction: column;
  /* 给了10px */
  margin-bottom: 0.08rem;
  background: green;
}
.contain .contain-list .contain-item:nth-child(3n + 2) {
  margin: 0 0.03rem 0.08rem 0.03rem;
}
.contain .contain-list .contain-item .item-img {
  cursor: pointer;
  width: 100%;
  height: 0.94rem;
}
.contain .contain-list .contain-item .item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: 0.05rem 0.07rem 0.09rem;
  background: #fff;
}
.contain .contain-list .contain-item .item-info p {
  font-size: 0.12rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.contain .contain-list .contain-item .item-info .item-info-price {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
}
.contain
  .contain-list
  .contain-item
  .item-info
  .item-info-price
  .price-contain {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
}
.contain
  .contain-list
  .contain-item
  .item-info
  .item-info-price
  .price-contain
  .price-old {
  font-size: 0.09rem;
  color: grey;
  text-decoration: line-through;
}
.contain
  .contain-list
  .contain-item
  .item-info
  .item-info-price
  .price-contain
  .price-now {
  font-size: 0.12rem;
  color: #f96d16;
}
.contain .contain-list .contain-item .item-info .item-info-price .price-add {
  cursor: pointer;
  width: 0.21rem;
  height: 0.21rem;
  background: url(http://wmall.wochu.cn/h5/mall/img/add_cart.png);
  background-size: 100%;
}
.contain .load-more {
  color: #666;
  font-size: 0.12rem;
}
/* 购物车部分 */
.goods {
  width: 100%;
  background: #fff;
}
.goods ul {
  list-style: none outside none;
}
.goods ul li {
  width: 100%;
  height: 0.93rem;
  font-size: 0.12rem;
  color: #333;
}
.goods ul li:last-child {
  border-bottom: 0;
}
.goods .input {
  float: left;
  line-height: 0.93rem;
}
.goods .shopimg{
  height: 0.92rem;
  width: 0.92rem;
  float: left;
  margin: 0 0.06rem;
}
.goods .shopimg img{
  width: 100%;
}
.goods .shopinfo {
  width: 1.73rem;
  float: right;
  height: 0.25rem;
  padding: 0.06rem 0;
}
.goods .shopinfo .title {
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  height: 0.25rem;
  line-height: 0.13rem;
  font-size: 0.12rem;
  margin-top: 0.02rem;
}
.goods .price {
  display: inline-block;
  width: 1.73rem;
  height: 0.21rem;
}
.goods .price .prices {
  width: 0.9rem;
  float: left;
  margin-top: 0.42rem;
  margin-left: 0.25rem;
}
.goods .price .prices span {
  color: #f96d16;
}
.goods .price .prices i {
  font-size: 0.11rem;
  font-style: normal;
  text-decoration: line-through;
  color: #999;
}
.goods .price .num{
    width: 0.64rem;
    height: 0.21rem;
    float: right;
    text-align: center;
    margin-top:-0.2rem;
}
/* <div class="num">
              <button class="reduce">-</button>
              <input type="text" value="1" class="number" >
              <button class="add">+</button>
            </div> */
.goods .price .num .reduce{
    text-align: right;
    width: 0.18rem;
    height: 100%;
    color: #999;
    float: left;
    background: #f5f5f5;
    font-size: .2rem;
    line-height: .2rem;
}
.goods .price .num .number{
    width: 0.27rem;
    float: left;
    background: #f5f5f5;
    height: 100%;
}
.goods .price .num .add{
    text-align: left;
    width: .18rem;
    height: 100%;
    color: #999;
    float: left;
    background: #f5f5f5;
    font-size: .2rem;
    line-height: .2rem;
}
</style>