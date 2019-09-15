export default{
    path:"/cartDetail",
    name:"cartDetail",
    meta:{
        flag:false
    },
    //按需加载引入  路由的懒加载
    component:()=>import("@pages/cartDetail")
}