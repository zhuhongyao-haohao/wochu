<template>
  <nav id="wrapper-nav">
    <div id="scroller-nav">
      <ul>
        <li
          @click="handleToggle(index)"
          :class="onIndex == index?'on':''"
          v-for="(item,index) in leftTabs"
          :key="index">
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "LeftTabBar",
  data() {
    return {
      onIndex: 0,
      leftTabs: [
        {
          text: "推荐",
          path: "/tuijianContent"
        },
        {
          text: "我厨优选",
          path: "/wochuContent"
        },
        {
          text: "餐馆名菜",
          path: "/canguan"
        },
        {
          text: "全部净菜",
          path: "/jingcai"
        },
        {
          text: "儿童专区",
          path: "/child"
        },
        {
          text: "蔬菜",
          path: "/sucai"
        },
        {
          text: "水果",
          path: "/fruit"
        },
        {
          text: "肉禽蛋",
          path: "/egg"
        },
        {
          text: "水产海鲜",
          path: "/shuichan"
        },
        {
          text: "乳饮西点",
          path: "/ruyin"
        },
        {
          text: "点心速食",
          path: "/dianxin"
        },
      ]
    };
  },
  methods: {
    handleToggle(index) {
      this.onIndex = index;
      this.$emit("handle", index);
    }
  }
};
</script>

<style scoped>
/* 导航 */
nav {
  position: absolute;
  width: 0.75rem;
  float: left;
  left: 0;
  color: #666;
  font-size: 0.15rem;
  top: 0.4742rem;
  bottom: 0.4167rem;
  overflow-y: scroll;
  background: #fff;
}
nav ul {
  width: 100%;
}
nav ul li.on {
  color: #6eb042;
  font-size: 0.1333rem;
  height: 0.4583rem;
}
nav ul li {
  width: 100%;
  height: 0.4167rem;
  padding: 0.1083rem 0;
  line-height: 0.4167rem;
  text-align: center;
  font-size: 0.1167rem;
}
nav ul li.on p {
  border-left: 0.025rem solid #6eb042;
  
}
nav ul li p {
  height: 0.25rem;
  vertical-align: middle;
}
</style>