<template>
  <div>
    <header>
      <div class="search-ctl">
        <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" />
        <router-link to="/search" tag="div" class="search-keyy">
          <div>支持首字母搜索</div>
        </router-link>
      </div>
      <div class="shadowWrap1"></div>
    </header>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
    <LeftTabBar @handle="handleShowPage" />
  </div>
</template>

<script>
import LeftTabBar from "@components/leftTabBar";
import TuijianContent from "@components/nav/tuijianContent";
import WochuContent from "@components/nav/wochuContent";
import CanguanContent from "@components/nav/canguanContent";
import JingcaiContent from "@components/nav/jingcaiContent";
import ChildContent from "@components/nav/childContent";
import SucaiContent from "@components/nav/sucaiContent";
import FruitContent from "@components/nav/fruitContent";
import EggContent from "@components/nav/eggContent";
import ShuichanContent from "@components/nav/shuichanContent";
import MilkContent from "@components/nav/milkContent";
import DianxinContent from "@components/nav/dianxinContent";
export default {
  name: "Sort",
  data() {
    return {
      comName: "tuijianContent"
    };
  },
  components: {
    LeftTabBar,
    TuijianContent,
    WochuContent,
    CanguanContent,
    JingcaiContent,
    ChildContent,
    SucaiContent,
    FruitContent,
    EggContent,
    ShuichanContent,
    MilkContent,
    DianxinContent
  },
  methods: {
    handleShowPage(params) {
      switch (params) {
        case 0:
          this.comName = "tuijianContent";
          break;
        case 1:
          this.comName = "wochuContent";
          break;
        case 2:
          this.comName = "canguanContent";
          break;
        case 3:
          this.comName = "jingcaiContent";
          break;
        case 4:
          this.comName = "childContent";
          break;
        case 5:
          this.comName = "sucaiContent";
          break;
        case 6:
          this.comName = "fruitContent";
          break;
        case 7:
          this.comName = "eggContent";
          break;
        case 8:
          this.comName = "shuichanContent";
          break;
        case 9:
          this.comName = "milkContent";
          break;
        case 10:
          this.comName = "dianxinContent";
          break;
        default:
          this.comName = "tuijianContent";
      }
    }
  }
};
</script>

<style scoped>
.shadowWrap1,
header {
  position: absolute;
  width: 100%;
}
header {
  height: 0.4583rem;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1;
  background: #fff;
}
.search-ctl {
  width: 2.9583rem;
  height: 0.2833rem;
  margin: 0.05rem 0.1rem;
  line-height: 0.2833rem;
  border-radius: 0.0417rem;
  padding: 0 0.1rem;
  border: 0.0083rem solid #ccc;
  overflow: hidden;
}
.search-ctl img {
  width: 0.1667rem;
  height: 0.1667rem;
  float: left;
  margin-top: 0.0583rem;
}
.search-keyy {
  width: 2.55rem;
  height: 0.2583rem;
  padding: 0;
  float: right;
  font-size: 0.1167rem;
  line-height: 0.2583rem;
  color: #ccc;
  border: 0;
}
.shadowWrap1 {
  height: 0.0917rem;
  background: #f4f5f7;
}
</style>
