<template>
<ella-Bscroll>
  <nav>
      <ul>
        <li
          @click="handleToggle(index)"
          :class="onIndex == index?'on':''"
          v-for="(item,index) in topTabs"
          :key="index">
          <p>{{item.text}}</p>
        </li>
      </ul>
  </nav>
  </ella-Bscroll>
</template>
<script>
export default {
  name: "CanguanTabBar",
  data() {
    return {
      onIndex: 0,
      topTabs: [
        {
          text: "本帮菜",
        },
        {
          text: "苏/浙菜",
        },
        {
          text: "粤菜",
        },
        {
          text: "川/湘菜",
        },
        {
          text: "北方菜/鲁菜",
        },
        {
          text: "东南亚风味",
        }
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
  font-size: 0.1167rem;
}
nav {
  position: fixed;
  height: 0.425rem;
  top: 0.425rem;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
  z-index: 3;
}
nav ul {
  height: 100%;
  white-space: nowrap;
  box-sizing: content-box;
  transition-duration: 0.3s;
  display: flex;
}
nav ul li {
  flex-shrink: 0;
  display: inline-block;
  height: 0.425rem;
  line-height: 0.425rem;
  text-align: center;
  position: relative;
  /* float: left; */
}
nav ul li p {
  padding: 0 0.125rem;
}
nav ul li.on {
  color: #6eb042;
  border-bottom: 0.0167rem solid #6eb042;
}
</style>