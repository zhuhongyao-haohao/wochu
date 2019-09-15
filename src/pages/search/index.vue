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
          <input type="text" class="search-key" v-model="goodsName"/>
        </div>
        <div class="search-btn">
          <span>搜索</span>
        </div>
      </div>
    </header>
    <nav class="wrapper">
      <div class="scroller">
        <div class="hot-search">
          <p>热门搜索</p>
          <ul>
              <router-link 
              tag="li"
              :to="{name:'searchList',params:{name:item.name}}"
              v-for="(item,index) in list" :key="index">{{item.name}}</router-link>
          </ul>
        </div>
        <div class="search-his">
          <p>搜索历史</p>
          <ul></ul>
        </div>
        <div class="clean-his">清空搜索记录</div>
      </div>
    </nav>
  </div>
</template>
<script>
import { searchApi } from "@api";
export default {
  name: "Search",
  async created() {
    let data = await searchApi();
    this.list = data.data;
  },
  data() {
    return {
      list: [],
      goodsName:""
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
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
.search-btn {
  float: right;
  text-align: right;
}
.search-btn span {
  font-size: 0.125rem;
  color: #333;
}
.wrapper {
  position: absolute;
  top: 0.3667rem;
  bottom: 0;
  width: 100%;
  padding: 0 0.0833rem;
  overflow: hidden;
  background: #fff;
}
.scroller {
  padding-bottom: 0.1667rem;
}
.hot-search {
  width: 2.96rem;
  height: 0.98rem;
}
.hot-search p,
.search-his p {
  font-size: 0.125rem;
  color: #333;
  margin-top: 0.0833rem;
}
.hot-search ul {
  background: #f4f5f7;
  width: 100%;
  height: 0.8133rem;
  font-size: 0.1083rem;
  color: #666;
}
.hot-search ul li {
  background: #fff;
  width: auto;
  line-height: 0.2083rem;
  margin: 0.0833rem;
  padding: 0.0167rem 0.0833rem;
  float: left;
  color: #666;
}
.search-his ul {
  width: 100%;
  height: auto;
  font-size: 0.1083rem;
  color: #666;
}
.clean-his {
  width: 100%;
  margin: 0.0833rem 0 0.1667rem;
  font-size: 0.1rem;
  color: #999;
  text-align: center;
}
</style>