<template>
  <div>
    <div class="activity-main" :style="{backgroundImage:'url('+active.backgroundImage+')'}">
      <!-- 上面的图片 -->
      <div v-for="(item,index) in list" :key="index">
        <img
          class="newactivity-position-item"
          :src="item.imageUrl"
          v-if="item.areaType == 6 || item.areaType == 2 || item.areaType == 9"
        />

        <!-- 一园子好菜送到家 -->
        <div class="activity-goods-list1 newactivity-position-item" v-if="item.areaType == 5">
          <router-link
            :to="{name:'detail',params:{id:item.goodsGuid}}"
            tag="a"
            :goodsid="item.goodsGuid"
          >
            <img :src="item.imageUrl" class="goodsdetail" />
          </router-link>
        </div>

        <!-- 三列菜品列表 -->
        <div
          class="newactivity-position-item"
          :data-aid="item.aId"
          v-if="item.areaType == 1 && item.templateType == 3"
        >
          <ul class="newactivity-goods-list newactivity-goods-list-3">
            <li v-for="(key,value) in item.shelveList" :key="value">
              <div class="corner-mark"></div>
              <router-link :to="{name:'detail',params:{id:key.goodsGuid}}" tag="div">
                <img class="goods-img" :src="key.icon" />
              </router-link>
              <div class="goods-info">
                <p class="goods-title">{{key.goodsName}}</p>
                <div class="goods-price-container">
                  <div class="goods-price">
                    <div class="old-price">{{key.marketPrice | reverser}}</div>
                    <div class="current-price">{{key.price | reverser}}</div>
                  </div>
                  <div class="new-add-cart" @tap="addCart(key.goodsGuid)"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 两列菜单列表 -->
        <div
          class="newactivity-position-item"
          :data-aid="item.aId"
          v-if="item.areaType == 1 && item.templateType == 2"
        >
          <ul class="newactivity-goods-list newactivity-goods-list-2">
            <li v-for="(key,value) in item.shelveList" :key="value">
              <div class="corner-mark"></div>
              <router-link :to="{name:'detail',params:{id:key.goodsGuid}}" tag="div">
                <img class="goods-img" :src="key.icon" />
              </router-link>
              <div class="goods-info">
                <p class="goods-title">{{key.goodsName}}</p>
                <div class="goods-price-container">
                  <div class="goods-price">
                    <div class="old-price">{{key.marketPrice | reverser}}</div>
                    <div class="current-price">{{key.price | reverser}}</div>
                  </div>
                  <v-touch class="new-add-cart" @tap="addCart(key.goodsGuid)" tag="div"></v-touch>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- 两列菜单，黄色按钮 -->
        <div class="newactivity-position-item" :data-aid="item.aId" v-if="item.areaType == 3 && item.templateType == 2">
          <ul class="activity-goods-list2 activity-goodss">
            <li v-for="(key,value) in item.shelveList" :key="value">
                <div class="corner-mark"></div>
                <router-link :to="{name:'detail',params:{id:key.goodsGuid}}" tag="div">
                    <img :src="key.icon" />
                </router-link>
                <div class="text-area">
                  <p>优选秋葵（250g）</p>
                  <div class="txt">
                    <div class="num">
                      <span>
                        ￥9.9
                        <i>￥15.9</i>
                      </span>
                    </div>
                  </div>
                  <div class="add-cart" >加入购物车</div>
                </div>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { menuActivityApi, menuActivityATIdApi } from "@api";
export default {
  name: "Activity",
  methods: {
    async getData1() {
      let { aTId } = this.$route.params;
      let data = await menuActivityApi(aTId);
      this.active = data.data;
      this.list = data.data.areaList;
      console.log(typeof aTId);
      console.log(data.data);
    },
    async getData2() {
      let { aTId } = this.$route.params;
      let data = await menuActivityATIdApi(aTId);
      this.active = data.data;
      this.list = data.data.areaList;
      console.log(this.list);
      console.log(data.data);
    }
  },
  created() {
    let { aTId } = this.$route.params;
    aTId = Number(aTId);
    if(aTId<140){
        this.getData1();
    }else{
        this.getData2();
    }
    
    // let data = await menuActivityATIdApi(aTId);
    // this.active = data.data;
    // this.list = data.data.areaList;
  },
  data() {
    return {
      active: "",
      list: []
    };
  }
};
</script>

<style>
.activity-main {
  width: 100%;

  background-size: 100%;
}

.activity-main img {
  font-size: 0;
  width: 100%;
  display: block;
}

.newactivity-goods-list {
  display: flex;
  padding: 0 0.125rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.newactivity-goods-list-3 li {
  display: flex;
  flex-direction: column;
  width: 32%;
  height: 1.666667rem;
}

.newactivity-goods-list-3 li:nth-child(3n + 2) {
  margin: 0 0.035rem;
}

.newactivity-goods-list li .corner-mark {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
  z-index: 1;
  overflow: hidden;
}

.newactivity-goods-list-3 li .goods-img {
  height: 1.008333rem;
  border-radius: 0.041667rem;
}

.newactivity-goods-list li .goods-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  padding: 0.05rem 0.066667rem 0.091667rem 0.066667rem;
}
.goods-info .goods-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.newactivity-goods-list li .goods-info .goods-title {
  font-size: 0.116667rem;
  color: #333;
}
.newactivity-goods-list li .goods-info .goods-price-container {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
}
.goods-info .goods-price {
  flex-direction: column-reverse;
  align-items: flex-start;
}
.newactivity-goods-list li .goods-info .goods-price .current-price {
  font-size: 0.116667rem;
  color: #f96d16;
}
.newactivity-goods-list li .goods-info .goods-price .old-price {
  font-size: 0.1rem;
  color: grey;
  text-decoration: line-through;
}
.newactivity-goods-list li .goods-info .goods-price-container .new-add-cart {
  margin: 0;
  width: 0.2rem;
  height: 0.2rem;
  background: url(https://wmall.wochu.cn/h5/activityTemplate/img/add_cart.png);
  background-size: 100%;
}

.newactivity-goods-list-2 li {
  display: flex;
  flex-direction: column;
  height: 5.17rem;
  width: 49%;
  height: 2.333333rem;
}
.newactivity-goods-list li {
  position: relative;
  margin-bottom: 0.083333rem;
  overflow: hidden;
  background: #ffffff;
  border-radius: 0.041667rem;
}
/* 两列菜单黄色按钮 */
.activity-goods-list2 {
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
}
.activity-goods-list2 li:nth-child(2n+1) {
    padding: 0 .07rem .058333rem .07rem;
}

.activity-goods-list2 li {
    width: 45%;
    float: left;
    text-align: center;
}
.activity-goods-list2 li img {
    width: 100%;
}

.activity-main img {
    font-size: 0;
}
.activity-goods-list2 li a p {
    width: 100%;
    height: .341667rem;
    line-height: .166667rem;
    font-size: .116667rem;
    color: #000;
    padding: .091667rem .183333rem 0 .183333rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.activity-goods-list2 .txt {
    display: table;
    width: 100%;
    line-height: .166667rem;
    margin-top: .06rem;
}
.activity-goods-list2 .add-cart {
    height: .283333rem;
    margin: .1rem auto;
    width: 1.033333rem;
    text-align: center;
    background: #ffe313;
    color: #000;
    font-size: .116667rem;
    border-radius: .166667rem;
    line-height: .283333rem;
    position: initial;
}
</style>