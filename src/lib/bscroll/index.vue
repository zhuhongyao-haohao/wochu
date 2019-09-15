<template>
    <div class="slider" ref="slider">
        <slot></slot>
    </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
    name:"Wochu-Bscroll",
    mounted(){
        this.scroll = new BScroll(this.$refs.slider,{
            //开启下拉刷新
            pullDownRefresh:true,
            //开启上拉加载更多
            pullUpLoad:true,
            scrollX:true,
            click:true
        });
    },
    // methods:{
    //     //下拉刷新
    //     handlepullingDown(cb){
    //         this.scroll.on("pullingDown",()=>{
    //             cb()
    //         })
    //     },
    //     //下拉刷新后通过bscroll可以做下一次请求，
    //     handlefinishPullDown(){
    //         this.scroll.finishPullDown();
    //         //并且重新计算滚动区域的高度
    //         this.scroll.refresh();
    //     },
    //     //上拉加载更多
    //     handlepullingUp(cb){
    //         this.scroll.on("pullingUp",()=>{
    //             cb();
    //         })
    //     },
    //     //上拉加载更多后通过bscroll可以做下一次请求
    //     handlefinishPullUp(){
        
    //         this.scroll.finishPullUp();
    //         //并且重新计算滚动区域的高度
    //         this.scroll.refresh();
         
    //     }
    // }
}
</script>

<style>
    .slider{
        height: 100%;
        float: left;
        width: 100%;
        background: #ffffff;
        overflow: hidden;
    }
</style>