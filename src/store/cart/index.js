import {menuDetailApi} from "@api";
const state = {
    obj:{},
    cartList:[]
}

const actions = {
    async addCart({commit},source){
        let data = await menuDetailApi(source);
        commit("handleAddCart",data.data);
    }
}

const mutations = {
    handleAddCart(state,params){
        console.log(params);
    }
}



export default {
    state,
    actions,
    mutations,
    namespaced:true
}