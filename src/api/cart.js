import http from "@utils/http.js"

export const getGoods = ()=>http({
    method:"get",
    url:"/api/goodsList"
})