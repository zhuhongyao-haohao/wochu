import Header from "./header/index.vue";
import Bscroll from "./bscroll/index.vue";
import Swiper from "./swiper/index.vue";
import MenuSlider from "./menuSlider";

const components = [
    Header,
    Bscroll,
    Swiper,
    MenuSlider
]

const install =(Vue)=>{
    if(Vue){
        components.map(item=>{
            Vue.component(item.name,item);
        })
    }
}

export default install;