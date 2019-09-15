export default {
    path:"/detail/:id",
    name:"detail",
    meta:{
        flag:false
    },
    component:()=>import("@pages/detail")
}