export default{
    path:"/home",
    name:"home",
    meta:{
        flag:true
    },
    //按需加载引入  路由的懒加载
    component:()=>import("@pages/home")
}