<template>
    <div class="header">
        <div class="logo">
            <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" />
        </div>
        <div class="addr">
            <p class="addr-detail">请填写地址</p>
            <span class="down-arr">
          <img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png" />
        </span>
        </div>
        <div class="search-btn">
            <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name:"Home-Header"
    }
</script>

<style>
    .header {
        position: fixed;
        width: 100%;
        height: .4rem;
        line-height: .4rem;
        padding: 0 .106667rem;
        background: #ffffff;
        z-index: 1000;
        top: 0;
        left: 0;
        box-sizing: border-box;
    }
    .logo{
        float: left;
    }
    .logo img {
        display: block;
        width: .391667rem;
        margin-top: .110833rem;
    }
    .addr {
        display: flex;
        width: 1.55rem;
        float: left;
        color: #1f6117;
        text-align: center;
        align-items: center;
        margin-left: .125rem;
    }
    .header .addr .addr-detail {
        width: .883333rem;
        /* overflow: hidden; */
        color: #1f6117;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
        display: block;
        font-size: .133333rem;
    }
    .header .addr img {
        width: .066667rem;
    }
    .search-btn{
        float: right;
        width: .158333rem;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .search-btn img{
        height: .158333rem;
        line-height: .158333rem;
        /* margin-left: .125rem; */
    }

</style>