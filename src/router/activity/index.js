export default {
    path:"/activity/:aTId",
    name:"activity",
    meta:{
        flag:false
    },
    component:()=>import("@pages/activity")
}