<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "@components/tabBar"
export default {
    name:"App",
    components:{
      [TabBar.name]:TabBar
    }
}
</script>
