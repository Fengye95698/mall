<template>
  <div>
    <topnav class="topnav">
      <div slot="left" class="left">
        <span class="background"><div class="icon1"></div></span>
      </div>
      <div slot="middle" class="middle">
        <el-input type="text" placeholder="搜索" prefix-icon="el-icon-search" />
      </div>
      <div
        slot="right"
        class="right"
        @click="
          () => {
            this.$router.push('/login');
          }
        "
      >
        登录
      </div>
    </topnav>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
      <van-swipe-item v-for="item in swiperImg" :key="item">
        <img :src='item' />
      </van-swipe-item>
    </van-swipe>
    <home-cate ref="swiper"></home-cate>
    <moment-sale></moment-sale>
    <recommend />
    <tabbar></tabbar>
  </div>
</template>

<script>
import topnav from "../components/topNav/topnav.vue";
import pic1 from "@/../static/swiper/l1.jpg";
import pic2 from "@/../static/swiper/l2.jpg";
import pic3 from "@/../static/swiper/l3.jpg";
import pic4 from "@/../static/swiper/l4.jpg";
import pic5 from "@/../static/swiper/l5.jpg";
import pic6 from "@/../static/swiper/l6.jpg";
import pic7 from "@/../static/swiper/l7.jpg";
import pic8 from "@/../static/swiper/l8.jpg";
import HomeCate from "../components/homeCate.vue";
import MomentSale from "../components/momentSale.vue";
import Recommend from "../components/recommend.vue";
import Tabbar from "../components/tabbar/tabbar.vue";

export default {
  components: { topnav, HomeCate, MomentSale, Recommend, Tabbar },
  data() {
    return {
      swiperImg: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8],
    };
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  position: relative;
}
.my-swipe .van-swipe-item >img{
  width: 100%;
  height: 100%;
}
.topnav {
  background-color: rgb(21, 93, 201);
  box-shadow: rgb(76, 146, 211) 1px 1px;
}
.left {
  display: flex;
  transform: scale(0.8);
}
span {
  background: url(../../static/home/sprites.png) no-repeat left -219px;
  width: 113px;
  height: 44px;
  display: inline-block;
  margin: 5px;
}
.icon1 {
  background-position: 10px -440px;
}
.middle {
  text-align: center;
  display: flex;
}
/* .backgroundImg{background-image: url(../../static/home/sprites.png);background-position: 240px 10px;width: 20px;height: 40px;display: inline-block;z-index: 5;} */
.middle input {
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  height: 30px;
  width: 100%;
  margin-top: 8px;
}
.right {
  color: white;
  text-align: center;
}
</style>
