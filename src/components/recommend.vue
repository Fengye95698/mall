<template>
  <div class="remBox">
    <div class="title">为你推荐</div>

    <div class="showlist">
      <!-- <div class="item" v-for="item in goodSaleInfo" :key="item.product_id" style="overflow-y:true">
        <img :src="item.product_img_url" alt="" />
        <div class="goodname">
          {{item.product_name}}
        </div>
        <div class="goodprice">
          ￥{{item.product_uprice}}
        </div> 
      </div>
          <p v-if="loading">加载中...</p> -->
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in goodSaleInfo"
        :key="item.product_id"
        class="item"
      >
        <img :src="item.product_img_url" alt="" />
        <div class="goodname">
          {{ item.product_name }}
        </div>
        <div class="goodprice">￥{{ item.product_uprice }}</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { request } from "../network/request";
export default {
  data() {
    return {
      goodSaleInfo: [],
      loading: false,
      // list: [],
      finished: false,
    };
  },
  methods: {
    load() {
      this.loading = true;
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        request({
          url: "/home",
        }).then((res) => {
          console.log(res);
          this.goodSaleInfo = res.data.slice(0,20);
        });
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.goodSaleInfo.length >= 19) {
          this.finished = true;
          console.log("finish");
        }
      }, 2000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  mounted() {
    // console.log(this.$refs.swiper.getInfo);
    // request({
    //   url: "/home",
    // }).then((res) => {
    //   console.log(res);
    //   this.goodSaleInfo = res.data.slice(0, 30);
    // });
  },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  margin-left: 10px;
}
.van-cell {
  display: inline-block;
}
.van-list {
  position: relative;
  margin: 0px auto;
  left: 2%;
}
.van-list img {
  flex: 1;
  width: 180px;
  height: 150px;
}
.item {
  flex: 1;
  /* margin: 0.1%; */
  width: 50%;
  position: relative;
  right: 7px;
}
.goodname {
  font-size: 5px;
  text-align: lefts;
  padding-left: 12px;
}
.goodprice {
  font-size: 15px;
  text-align: left;
  font-weight: bold;
  color: coral;
  padding-left: 10px;
}
</style>