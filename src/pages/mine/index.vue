<template>
  <div class="mine">
    <div class="content">
      <div class="header">
        <img src="http://wmall.wochu.cn/h5/personal/img/header_bg@3x.png" />
        <div class="icon">
          <img src="http://wmall.wochu.cn/h5/personal/img/cust-icon-nologin.png" />
          <p>未登录</p>
        </div>
        <div class="balance">
            <div>
                <div class="balances">
                    <div>0</div>
                    <p>账户余额</p>
                </div>
                <div class="coupon">
                    <div>0</div>
                    <p>优惠券</p>
                </div>
            </div>
            <div class="charge">
                <img src="http://wmall.wochu.cn/h5/personal/img/profile-arrow@3x.png" class="profile">
                <div class="gift">
                    <img src="http://wmall.wochu.cn/h5/personal/img/g-recharge@3x.png">
                    <p>充值立送现金券哦~</p>
                </div>
                <div class="go">
                    马上充值<img src="http://wmall.wochu.cn/h5/personal/img/recharge@3x.png">
                </div>
            </div>
        </div>
      </div>
      <div class="order">
          <ul>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/needtopay@3x.png"/>
                  <p>待付款</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/no-receive@3x.png"/>
                  <p>待收货</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/no-comment@3x.png"/>
                  <p>待评价</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/historyget@3x.png"/>
                  <p>退货/售后</p>
              </li>
              <li class="orders">
                  <img src="http://wmall.wochu.cn/h5/personal/img/myorders@3x.png"/>
                  <p>我的订单</p>
              </li>
          </ul>
      </div>
      <div class="nav">
          <ul class="first">
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/mytg@3x.png">
                  <p>我的团购</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/location@3x.png">
                  <p>收货地址</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/favorite@3x.png">
                  <p>我的收藏</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/aboutus@3x.png">
                  <p>关于我厨</p>
              </li>
          </ul>
          <ul>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/help@3x.png">
                  <p>帮助中心</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/yjfk@3x.png">
                  <p>意见反馈</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/setup@3x.png">
                  <p>设置中心</p>
              </li>
              <li>
                  <img src="http://wmall.wochu.cn/h5/personal/img/kefu@3x.png">
                  <p>客服电话</p>
              </li>
          </ul>
      </div>
      <div class="ad">
          <img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/b51022d5-c9d1-4e11-ae35-328aa7f551e8.gif">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* *, body, html {
    margin: 0;
    padding: 0;
    position: relative;
} */
body{
    overflow-y: scroll;
}
.content {
  width: 100%;
  padding-bottom: 1rem;
}
.content .header {
  width: 100%;
  height: 2.33rem;
}
.content .header img {
  width: 100%;
  height: 1.9rem;
}
.content .header .icon {
  position: absolute;
  width: 100%;
  /* 暂时给了15px */
  top: 0.3rem;
  left: 0;
  text-align: center;
  font-size: 0.1rem;
  color: #fff;
}
.content .header .icon img {
  width: 0.5rem;
  height: 0.47rem;
  border-radius: 0.17rem;
  display: inline-block;
}
.content .header .icon p{
    /* 间距给了20px */
    margin-top: 0.17rem;
}
.content .header .balance{
    position: absolute;
    width: 2.93rem;
    top: 1.2rem;
    left: 50%;
    margin-left: -1.47rem;
    text-align: center;
    border-radius: 0.08rem;
    padding-top: 0.15rem;
    background: #fff;
    box-shadow: 1px -1px 20px rgba(34,34,34,.3);
    /* margin: 0 0 0 -1.47rem; */
}
.content .header .balance .balances{
    width: 50%;
    float: left;
    text-align: center;
    border-right: 1px solid #e5e5e5;
}
.content .header .balance .balances div{
    font-size: 0.17rem;
    color: #001e00;
}
.content .header .balance .balances p{
    font-size: 0.12rem;
    color: #999;
}
.content .header .balance .coupon{
    width: 50%;
    float: right;
    text-align: center;
}
.content .header .balance .coupon div{
    font-size: 0.17rem;
    color: #001e00;
}
.content .header .balance .coupon p{
    font-size: 0.12rem;
    color: #999;
}
.content .header .balance .charge{
    position: relative;
    height: 0.36rem;
    line-height: 0.36rem;
    /* 给了24px */
    margin-top: 0.5rem;
    background: #428b0e;
    color: #fff;
    font-size: 0.12rem;
    border-bottom-left-radius: 0.08rem;
    border-bottom-right-radius: 0.08rem;
}
.content .header .balance .charge .profile{
    position: absolute;
    height: 0.08rem;
    left: 25%;
    margin-left: -.31rem;
    top: -.08rem;
    width: .63rem;
}
.content .header .balance .charge .gift{
    width: 50%;
    float: left;
    padding-left: .2rem;
    height: 0.33rem;
}
.content .header .balance .charge .gift img{
    width: 0.13rem;
    height: 0.15rem;
    margin-right: 0.04rem;
    margin-left: -1.04rem;
    display: inline-block;
    vertical-align: middle;
}
.content .header .balance .charge .gift p{
    margin-left: 0.2rem;
    margin-top: -0.35rem;
}
.content .header .balance .charge .go{
    width: 50%;
    float: right;
    text-align: right;
    padding-right: 0.08rem;
}
.content .header .balance .charge .go img{
    width: 0.06rem;
    height: 0.1rem;
    margin-left: 0.08rem;
    vertical-align: middle;
    display: inline-block;
}
/* 第二部分 */
.content .order{
    margin-top: 0.08rem;
    height: 0.74rem;
    padding: 0.17rem 0;
    /* background: #fff; */
    background: #fff;
}
.content .order ul{
    width: 100%;
    list-style: none outside none;
}
.content .order ul li{
    width: 20%;
    color: #999;
    font-size: 0.1rem;
    float: left;
    text-align: center;
}
.content .order ul li img{
    width: auto;
    height: 0.23rem;
    display: inline-block;
}
.content .order ul li p{
    margin-top: 0.07rem;
}
.content .order ul .orders{
    color: #243a23;
    border-left: 1px solid #ccc;
}
/* 第三部分 */
.content .nav{
    margin-top: .1rem;
    background: #fff;
}
.content .nav .first{
    border-bottom: 1px solid #e5e5e5;
}
.content .nav ul{
    width: 100%;
}
.content .nav ul li{
    width: 25%;
    padding: .1rem 0;
    color: #999;
    font-size: 0.1rem;
    float: left;
    text-align: center;
}
.content .nav ul li img{
    height: 0.23rem;
    width: auto;
    display: inline-block;
}
.content .nav ul li p{
    margin-top: 0.1rem;
}
/* 第四部分 */
.content .ad{
    width: 100%;
    height: 0.63rem;
    text-align: center;
}
.content .ad img{
    width: 2.88rem;
    height: 0.63rem;
    display: inline-block;
}

</style>