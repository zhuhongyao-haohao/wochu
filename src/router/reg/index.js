export default{
    path:"/reg",
    name:"reg",
    meta:{
        flag:false
    },
    //按需加载引入  路由的懒加载
    component:()=>import("@pages/reg")
}