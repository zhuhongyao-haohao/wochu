import http from "@utils/http.js"

// 首页头部选择地址
export const homeAddressApi = ()=> http({
    method:"get",
    url:"/jog/client/v1/sameday/getLoadHomeSameDayInfo",
    data:{
      
    }
})

// 首页的头部导航
export const homeHeaderApi = ()=> http({
    method:"get",
    url:"/jog/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D",
    data:{
    }
})

// 首页内容
export const homeContentApi = ()=>http({
    method:"get",
    url:"/jog/api/app/acts?version=20.0.0&source=H",
    data:{
        
    }
})

// 详情页数据
export const menuDetailApi = (goodsGuid)=>http({
    method:"get",
    url:"/jog/api/goods/goods/detail",
    data:{
        goodsGuid:goodsGuid
    }
})

// 详情页轮播图
export const menuDetailLoopApi = (goodsGuid)=>http({
    method:"get",
    url:"/jog/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%22"+goodsGuid+"%22%7D",
    data:{
        goodsGuid:goodsGuid
    }
})

// 详情页猜你喜欢
export const menuDetailLikeApi = (goodsGuid)=>http({
    method:"get",
    url:"/jog/client/v1/goods/getGoodsRelevantList?parameters=%7B%22goodsGuid%22:%22"+goodsGuid+"%22%7D",
    data:{
        goodsGuid:goodsGuid
    }
})

// active详情页内容
export const menuActivityApi = (aTId)=>http({
    method:"get",
    url:"/jog/client/v1/goods/newactivityTemplate",
    data:{
        aTId:aTId
    }
})

//用aTId请求的active详情页内容
export const menuActivityATIdApi = (aTId)=>http({
    method:"get",
    url:"/act/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A"+aTId+"%7D",
    data:{
        aTId:aTId
    }
})

//推荐
export const  tuijianApi= ()=> http({
    method:"get",
    url:"/jog/client/v1/goods/GetCategoryRecommendList"
})

// 我厨优选
export const  wochuApi= ()=> http({
    method:"get",
    url:"/jog/client/v1/goods/GetCategoryListByMenuId?parameters=%7B%22menu%22%3A0%7D"
})


// 搜索
export const  searchApi= ()=> http({
    method:"get",
    url:"/jog/client/v1/goods/SearchByTag"
})
// 搜索列表
export const  searchListApi= ()=> http({
    method:"get",
    url:"/jog/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=%E7%89%9B%E6%8E%92",
})

// 左侧详情列表
export const  wochuListApi= (categoryId,orderId)=> http({
    method:"get",
    url:"/jog/api/goods/getcategoryandgoods",
    data:{
        categoryId:categoryId,
        orderId:orderId
    },
})

//购物车推荐商品
export const cartSuggestGoodsApi = ()=>http({
    method:"get",
    url:"/jog/client/v1/goods/GoodsRecommendList?parameters=%7B%22pageSize%22%3A9%2C%22pageIndex%22%3A+1%2C%22type%22%3A%221%22%7D"
})
//购物车详情获取数据
export const cartDetailGoodsApi = ()=>http({
    method:"get",
    url:"/jog/api/goods/goods/detail?goodsGuid=d286e55e-9b05-494e-9192-9ab4653a88c1"
})