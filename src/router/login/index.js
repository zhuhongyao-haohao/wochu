export default{
    path:"/login",
    name:"login",
    meta:{
        flag:false
    },
    //按需加载引入  路由的懒加载
    component:()=>import("@pages/login")
}