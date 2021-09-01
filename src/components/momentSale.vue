<template>
  <div class="box">
    <div class="title">
      <img src="@/../static/momentsale/jd_skill.png" alt="" />
      <!-- <strong>六点半</strong>  -->
      <!-- <strong>22:20</strong>   -->
      <van-count-down
        millisecond
        :time="time"
        format="HH:mm:ss:SS"
        style="margin:5px"
      />
    </div>
    <div class="goodsbox">
      <div class="itembox" v-for="item in goodSaleInfo" :key="item.id">
        <img :src="item.product_img_url" alt="" />
        <div>￥{{item.product_uprice}}</div>
        <div>￥{{item.product_price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from '../network/request';
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      goodSaleInfo:[]
    };
  },
  mounted() {
    // console.log(this.$refs.swiper.getInfo);
    request({
      url: "/home",
    }).then((res) => {
      console.log(res.data.slice(0,20));
      this.goodSaleInfo = res.data.slice(0,20);
    });
  },
};
</script>

<style scoped>
.box {
  height: 170px;
  box-shadow: 0px 0.2px grey;
}
.title {
  border: 1px solid rgb(235, 229, 229);
  box-shadow: 1px 1px rgb(179, 172, 172);
  display: flex;
}
.title strong {
  height: 100%;
  margin-left: 10px;
  position: relative;
  bottom: 8px;
}
.goodsbox {
  display: flex;
  overflow: hidden;
  overflow-x: auto;
}
.title img {
  width: 70px;
  height: 30px;
}
.itembox {
  margin: 0.5%;
  text-align: center;
}
.itembox img {
  width: 85px;
  height: 80px;
}
.itembox div:nth-child(2) {
  color: rgb(255, 81, 0);
  font-weight: bold;
}
.itembox div:nth-child(3) {
  color: rgb(170, 162, 162);
  text-decoration: line-through;
}
</style>
