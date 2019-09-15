<template>
  <div>
    <header>
      <div class="search-ctl">
        <v-touch tag="div" @tap="handleBack()" class="back">
          <img
            src="http://wmall.wochu.cn/h5/classify/img/back.png?v=7c8bfcd628"
          />
        </v-touch>
        <div class="parent-name">
          <p>
            <span>我厨优选</span>
          </p>
        </div>
        <div class="go-cart">
          <img src="http://wmall.wochu.cn/h5/classify/img/icon-cart-60@3x.png" />
          <p class="cart-count">2</p>
        </div>
        <div class="search-key">
          <router-link to="/search">
            <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" />
          </router-link>
        </div>
      </div>
    </header>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
    
      <WochuListTabBar @handle="handleShowPage" />
    <div class="three-class">
      <div class="privilege">
        <span class="choose">特惠</span>
      </div>
      <span class="dev-line"></span>
      <div class="price-up">
        <span>
          价格
          <em>
            <!-- <img src="http://wmall.wochu.cn/h5/classify/img/icon-fenlei-arrow@3x.png" alt /> -->
          </em>
        </span>
      </div>
    </div>
    <div class="shadowWrap"></div>
  </div>
</template>
<script>
import { wochuListApi } from "@api";
import WochuListTabBar from "@components/wochuListTabBar";
import WochuListSucai from "@components/wochulistTabPage/sucai";
import WochuListEgg from "@components/wochulistTabPage/egg";
import WochuListRou from "@components/wochulistTabPage/rou";
import WochuListXianhuo from "@components/wochulistTabPage/xianhuo";
import WochuListLengdong from "@components/wochulistTabPage/lengdong";
import WochuListBX from "@components/wochulistTabPage/bx";
export default {
  name: "Wochulist",
  data() {
    return {
      comName: "WochuListSucai"
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleShowPage(params) {
      switch (params) {
        case 0:
          this.comName = "WochuListSucai";
          break;
        case 1:
          this.comName = "WochuListEgg";
          break;
        case 2:
          this.comName = "WochuListRou";
          break;
        case 3:
          this.comName = "WochuListXianhuo";
          break;
        case 4:
          this.comName = "WochuListLengdong";
          break;
        case 5:
          this.comName = "WochuListBX";
          break;
      }
    }
  },
  components: {
    WochuListTabBar,
    WochuListSucai,
    WochuListEgg,
    WochuListRou,
    WochuListXianhuo,
    WochuListLengdong,
    WochuListBX
  }
};
</script>
<style scoped>
header {
  /* position: relative; */
  width: 100%;
  /* height: 0.425rem; */
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
  /* z-index: 1; */
  background: #fff;
}
.search-ctl {
  width: 3.0583rem;
  height: 0.25rem;
  margin: 0.0647rem 0.0833rem;
  line-height: 0.25rem;
  font-size: 0.15rem;
  color: #333;
}
.back {
  width: 0.6rem;
  float: left;
}
header img {
  height: 0.2667rem;
  width: auto;
}
.parent-name {
  width: 1.825rem;
  float: left;
  text-align: center;
}
.parent-name span {
  font-size: 0.15rem;
  vertical-align: middle;
  text-align: center;
}
.search-key {
  margin-right: 0.125rem;
}
.go-cart,
.search-key {
  width: 0.2417rem;
  float: right;
}
.search-key img {
  width: 0.1833rem;
  height: 0.1833rem;
  margin-top: 0.0417rem;
  margin-left: -0.0417rem;
}
.go-cart img {
  width: 0.1917rem;
  height: 0.1917rem;
  margin-top: 0.0417rem;
  margin-left: -0.0833rem;
}
.cart-count {
  position: absolute;
  height: 0.125rem;
  width: 0.125rem;
  top: 0.0667rem;
  right: 0.0667rem;
  font-size: 0.1rem;
  background: #ee7c1b;
  border-radius: 50%;
  line-height: 0.125rem;
  color: #fff;
  text-align: center;
}

.three-class {
  /* display: none; */
  width: 100%;
  height: 0.3rem;
  position: fixed;
  background: #fff;
  z-index: 3;
  top: 0.85rem;
  font-size: 0.1167rem;
  color: #001e00;
  display: flex;
  justify-content: space-between;
}
.three-class div {
  flex: 1;
  text-align: center;
  line-height: 0.3rem;
}
.three-class div .choose {
  color: #6eb042;
}
.three-class div > span {
  display: inline-block;
  width: 0.6417rem;
  height: 0.2417rem;
  border-radius: 0.0042rem;
  line-height: 0.2417rem;
}
.three-class .dev-line {
  display: inline-block;
  width: 0.0083rem;
  height: 0.2333rem;
  background: #e5e5e5;
  margin-top: 0.0333rem;
}
.three-class div > span em img {
  position: absolute;
  left: 0;
  top: 0.01rem;
}
img {
  width: 100%;
}
.shadowWrap {
  position: fixed;
  z-index: 3;
  top: 1.15rem;
  width: 100%;
  height: 0.0667rem;
  background: #f4f5f7;
  /* display: block; */
}
</style>