<template>
    <div class="box">
        <div class="login-top">
            <img src="http://wmall.wochu.cn/h5/img/vueLogin/loginTop.gif" alt>
            <img src="http://wmall.wochu.cn/h5/img/vueLogin/close.png" alt class="close">
        </div>
        <div class="login-tab">
            <ul>
                <!-- <router-link tag="li" to="/movie/movieNow" class="on">短信登录</router-link>
                <router-link tag="li" to="/movie/movieNow" class="second">密码登录</router-link> -->
                <!-- <router-link tag="li" to="/reg" class="second">密码登录</router-link> -->
                <li class="second">密码登录</li>
            </ul>
        </div>
        <div class="login-main">
            <div class="account border-bottom">
                <input type="text" placeholder="输入账号" maxlength="13">
            </div>
            <div class="code">
                <input type="password" placeholder="输入密码">
            </div>
            <button>登录</button>
            <router-link tag="div" to="/reg" class="forget">免费注册</router-link>
            <!-- <div class="forget">免费注册</div> -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
img, input {
    border: none;
    vertical-align: middle;
}
/* 第一部分 */
.box .login-top{
    width: 3.18rem;
    height: 3.33rem;
    position: relative;
    background: pink;
}
.box .login-top img{
    display: block;
    width: 100%;
}
.box .login-top .close{
    position: absolute;
    top: 0.17rem;
    right: 0.21rem;
    width: 0.2rem;
    height: 0.2rem;
}
/* 第二部分 */
.box .login-tab{
    background: #fff;
    height: 0.41rem;
    padding:0 0.59rem;
}
.box .login-tab ul{
    list-style-type: none;
}
.box .login-tab ul li{
    width: 0.76rem;
    font-size: 0.13rem;
    text-align: center;
    line-height: 0.4rem;
    float: left;
}
.box .login-tab ul .second{
    border-bottom: 0.02rem solid #6eb242;
    color: #6eb242;
    margin-left: 0.5rem;
}
/* 第三部分 */
.box .login-main{
    width: 3.18rem;
    height: 2.13rem;
    background: #fff;
    padding: 0.23rem;
}
.box .login-main .account{
    position: relative;
}
.box .login-main .border-bottom{
    border-bottom: 1px solid #e5e5e5;
}
.box .login-main .account input{
    width: 100%;
    height: 0.47rem;
    font-size: .15rem;
    color: #132d01;
    font-weight: 300;
    outline: 0;
}
.box .login-main .code{
    position: relative;
}
.box .login-main .code input {
    width: 100%;
    height: 0.47rem;
    font-size: .15rem;
    color: #132d01;
    font-weight: 300;
    outline: 0;
}
.box .login-main button{
    display: inline-block;
    width: 2.72rem;
    height: 0.42rem;
    font-size: 0.15rem;
    color: #fff;
    text-align: center;
    line-height: 0.42rem;
    border-radius: 0.08rem;
    background: #c3dcb3;
    outline: 0;
    border: none;
    cursor: pointer;
    margin-top: 0.08rem;
}
.box .login-main .forget{
    float: right;
    margin-top: 0.21rem;
    font-size: 0.13rem;
    color: #668528;
}
</style>