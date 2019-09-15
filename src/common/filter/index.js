import Vue from "vue";

Vue.filter("toDecimal",(value)=>{
    if(typeof value != "string"){
        value = value+"";
    }

    let m = value.indexOf(".");
    let m1 = value.length;
    
    return value.slice(m,m1);
})

Vue.filter("reverser",(value)=>{

    return "￥"+value;
})