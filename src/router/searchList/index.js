export default {
    path:"/searchList",
    name:"searchList",
    meta:{
        flag:false
    },
    //按需加载引入 ===》路由的懒加载
    component:()=>import("@pages/searchList")
}