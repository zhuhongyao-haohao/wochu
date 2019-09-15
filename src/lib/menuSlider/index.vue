<template>
    <Wochu-Bscroll>
          <div class="slide">
            <div class="slider-item" >
              <div
                class="advice-group" 
                v-for="(item,index) in menu" 
                :key="index">
                  <div class="group-icon" v-for="(item1,index1) in item.labels" :key="index1">
                    <img :src="item1.labelUrl"/>
                  </div>
                  <router-link
                    :to="item.source ? {name:'detail',params:{id:item.source}} : {name:'detail',params:{id:item.goodsGuid}}" 
                    tag="div">
                      <img :src="item.imgUrl || item.picUrl" />
                  </router-link>
                  <div class="group-name ellipsis">
                    <span id="textIcon"></span>{{item.goodsName}}
                  </div>
                  <div class="m-price">
                    <div v-show="item.marketPrice !== item.price">{{item.marketPrice | reverser}}</div>
                  </div>
                  <div class="o-price">{{item.price | reverser}}</div>
                  <div class="add-cart">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png" />
                  </div>
              </div>
            </div>
          </div>
        </Wochu-Bscroll>
</template>

<script>
export default {
    name:"Menu-Slider",
    props:{
        menu:{
            type:Array
        }
    }
}
</script>

<style>
 .slide{
  float: left;
}
.slider-item {
    background: #fff;
    padding: .115rem 0 0 .106667rem;
    /* z-index: 1; */
    box-sizing: border-box;
    height: 1.583333rem;
    display: flex;
    float: left;
}
.advice-group img{
  width: .791667rem;
}
.advice-group{
  /* height: 1.558333rem; */
  margin-right: .15rem;
  width: .841667rem;
  position: relative;
  vertical-align: top;
}
.group-icon {
    position: absolute;
    top: 0;
    left: 0;
    height: .239167rem;
    width: .283333rem;
}
.group-icon img{
  width: 100%;
}
.group-name{
  font-size: .1rem;
  margin-top: .106667rem;
  width: .841667rem; 
}
.ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.m-price{
    height: 0.1058rem;
    margin-top: .058333rem;
    font-size: .1rem;
    color: #bababa;
    text-decoration: line-through;
}
.o-price {
    height: .105833rem;
    margin-top: .044167rem;
    font-size: .1rem;
    color: #001e00;
    line-height: .105833rem;
}
.add-cart {
    position: absolute;
    bottom: .18rem;
    left: .62rem;
    width: .171667rem;
}
.add-cart img{
  width: 100%;
}   
</style>