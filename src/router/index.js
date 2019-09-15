import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import sort from "./sort";
import cart from "./cart";
import mine from "./mine";
import Detail from "./detail";
import activity from "./activity";
import search from "./search"
import searchList from "./searchList"
import list from "./list"
import wochulist from "./wochulist"
import canguanlist from "./canguanlist"
import login from "./login"
import reg from "./reg"

Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home",
        },
        home,
        sort,
        cart,
        mine,
        Detail,
        activity,
        search,
        searchList,
        list,
        wochulist,
        canguanlist,
        login,
        reg,
    ]
})


export default router;