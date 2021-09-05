<template>
  <div>
    <topnav class="boxnav">
      <div slot="left" class="el-icon-arrow-left" style="font-size: 20px"></div>
      <div slot="middle">
        <el-input
          type="text"
          placeholder="搜索"
          class="Searchipt"
          prefix-icon="el-icon-search"
          ref="search"
          v-model="input"
          @change="getSearch"
        />
      </div>
      <div slot="right" class="icon"></div>
    </topnav>
    <tabbar></tabbar>
    <div class="contentBox">
      <div class="left">
        <van-sidebar v-model="key">
          <van-sidebar-item
            :title="item.category_name"
            v-for="item in categorylist"
            :key="item.category_id"
            style="overflow-y: auto"
            @click="getCateGoods(item.category_id)"
          />
        </van-sidebar>
      </div>
      <div class="right">
        <hot-cate></hot-cate>
        <div class="goodsItem">
          <div
            class="itembox"
            v-for="item in goodsList"
            :key="item.product_id"
            @click="toDetail(item.product_id)"
          >
            <img :src="item.product_img_url" alt="" />
            <div class="goodstext">{{ item.product_name }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HotCate from "../components/hotCate.vue";
import tabbar from "../components/tabbar/tabbar.vue";
import Topnav from "../components/topNav/topnav.vue";
import { request } from "../network/request";
export default {
  components: { tabbar, Topnav, HotCate },
  data() {
    return {
      tabPosition: "left",
      loading: false,
      count: 10,
      goodsList: [],
      categorylist: [],
      input: "",
      activeKey: 3,
      key:0
    };
  },
  methods: {
    getCateGoods(id) {
      request({
        url: "/categorygoods",
        params: {
          mId: id,
        },
      }).then((res) => {
        console.log(res);
        this.goodsList = res.data;
      });
    },
    getSearch() {
      request({
        url: "/search",
        params: {
          kw: this.$refs.search.value,
        },
      }).then((res) => {
        console.log(res);
        this.goodsList = res.data;
      });
    },
 
    toDetail(id) {
      // console.log(this.$route.query.id);
      this.$router.push({
        path: "/details",
        query: {
          mId: id,
        },
      });
    },
  },
  mounted() {
    request({
      url: "/category",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.categorylist = res.data.reverse();
    });
    request({
      url: "/categorygoods",
      params: {
        mId: this.activeKey,
      },
    }).then((res) => {
      this.goodsList = res.data;
    });
  },
};
</script>

<style scoped>
/* .iconbox{width: 50%;} */
.icon {
  width: 39px;
  height: 44px;
  background: url("../../static/home/jd-sprites.png") no-repeat -120px 0;
  margin: 5px 0 0px 15px;
  transform: scale(0.5);
}
.goodstext {
  font-size: 14px;
  font-weight: bold;
}
.goodsItem {
  display: flex;
  flex-wrap: wrap;
}
.itembox {
  margin: 1%;
  text-align: center;
  flex: 3;
}
.itembox img {
  width: 75px;
  height: 70px;
}
.boxnav {
  display: flex;
  /* justify-content: space-between; */
  text-align: center;
}
.Searchipt {
  /* border: 1px solid rgb(167, 163, 163);
  height: 30px;
  width: 250px;
  border-radius: 5px; */
  margin-right: 10px;
}
.contentBox {
  display: flex;
  justify-content: space-between;
}
.left {
  flex: 0;
}
</style>
<style>
.el-tabs--left .el-tabs__item.is-left {
  width: 95px;
  text-align: center;
}
.el-tabs__item {
  padding: 0 10px;
  border: 1px solid rgb(255, 255, 255);
  background-color: rgb(243, 244, 246);
  height: 45px;
}
.el-tabs__item.is-active {
  color: red;
  background-color: #fff;
}
</style>