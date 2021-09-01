<template>
  <div class="remBox">
    <div class="title">为你推荐</div>
    
    <div class="showlist">
      <div class="item" v-for="item in goodSaleInfo" :key="item.product_id" style="overflow-y:true">
        <img :src="item.product_img_url" alt="" />
        <div class="goodname">
          {{item.product_name}}
        </div>
        <div class="goodprice">
          ￥{{item.product_uprice}}
        </div> 
      </div>
          <p v-if="loading">加载中...</p>
    </div>
  </div>
</template>

<script>
import { request } from "../network/request";
export default {
  data() {
    return {
      goodSaleInfo: [],
      loading:false
    };
  },
  methods:{
    load(){
      this.loading = true
    }
  },
  mounted() {
    // console.log(this.$refs.swiper.getInfo);
    request({
      url: "/home",
    }).then((res) => {
      console.log(res);
      this.goodSaleInfo = res.data.slice(0, 30);
    });
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  /* margin: 0.5%; */
}
.showlist {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.showlist img {
  flex: 1;
  width: 180px;
  height: 150px;
  margin: 10px;
}
.item {
  flex: 1;
  /* margin: 0.1%; */
  width: 50%;
}
.goodname{font-size: 5px;padding: 5px;text-align: lefts;}
.goodprice{font-size: 15px;text-align: left;font-weight: bold;color: coral;}
</style>