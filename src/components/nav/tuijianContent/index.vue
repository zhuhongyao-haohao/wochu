<template>
    <section id="wrapper">
      <div class="class-item tj class-item-on">
        <div class="title-wrap">
          <div class="float-wrap">
            <span class="fl"></span>
            <p class="label">我厨优选</p>
            <span class="fr"></span>
          </div>
        </div>
        <ul>
          <router-link 
          to="/list"
          tag="li"
          v-for="(item0,index0) in listFirst" 
          :key="index0">
            <a>
              <img :src="item0.imgUrl" />
              <p>{{item0.name}}</p>
            </a>
          </router-link>
        </ul>
        <div class="under"></div>
      </div>
      <div class="class-item tj class-item-on">
        <div class="title-wrap">
          <div class="float-wrap">
            <span class="fl"></span>
            <p class="label">品牌专区</p>
            <span class="fr"></span>
          </div>
        </div>
        <ul>
          <li v-for="(item1,index1) in listTwo" :key="index1">
            <a>
              <img :src="item1.imgUrl"/>
              <p>{{item1.name}}</p>
            </a>
          </li>
        </ul>
        <div class="under"></div>
      </div>
    </section>
</template>

<script>
import { tuijianApi } from "@api";
export default {
  name: "TuijianContent",
  async created() {
    let data = await tuijianApi();
    this.list = data.data;
    this.listFirst = this.list[0].children;
    this.listTwo = this.list[1].children;
  },
  data() {
    return {
      list: [],
      listFirst: [],
      listTwo: []
    };
  }
};
</script>
<style scoped>
/* 右侧 */

section {
  position: absolute;
  width: 2.375rem;
  float: right;
  right: 0;
  top: 0.4583rem;
  bottom: 0.4167rem;
  overflow-y: scroll;
  border-left: 0.0083rem solid #e5e5e5;
  background: #fff;
}

.class-item-on {
  display: block !important;
}
.class-item {
  width: 100%;
  display: none;
}
.class-item .title-wrap {
  width: 100%;
  height: 0.375rem;
  background: #fff;
  text-align: center;
  overflow: hidden;
}
.class-item .title-wrap .float-wrap {
  display: inline-block;
  height: 100%;
}
.class-item .title-wrap .fl {
  float: left;
  margin-right: 0.0833rem;
}
.class-item .label {
  float: left;
  display: block;
  height: 0.375rem;
  color: #011e00;
  font-size: 0.1167rem;
  line-height: 0.375rem;
  text-align: center;
  font-weight: 550;
}
.class-item .title-wrap .fr {
  float: left;
  margin-left: 0.0833rem;
}
.class-item .title-wrap span {
  display: block;
  height: 0.2167rem;
  width: 0.2083rem;
  border-bottom: 1px solid #e5e5e5;
}
.class-item.classify ul,
.class-item ul {
  width: 100%;
  padding: 0.0833rem 0.0083rem 0 0.0917rem;
  background: #fff;
  height: 1.9167rem;
}
.class-item ul li {
  width: 0.6583rem;
  margin-right: 0.0917rem;
  height: 0.9167rem;
  text-align: center;
  float: left;
}
.class-item ul li a {
  overflow: hidden;
}
.class-item ul li img {
  width: 0.4167rem;
  border-radius: 50%;
  height: 0.4167rem;
  margin: 0 auto;
}
.class-item ul li p {
  width: 0.4167rem;
  height: 0.3583rem;
  font-size: 0.1rem;
  color: #666;
  line-height: 0.3583rem;
  padding-top: 0.0833rem;
  margin-left: 0.1208rem;
  overflow: hidden;
  /* background: red; */
  text-align: center;
}
.under {
  width: 100%;
  height: 0.0917rem;
  background: #f4f5f7;
}
</style>