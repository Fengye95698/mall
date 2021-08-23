<template>
  <div>
    <topnav class="boxnav">
      <div slot="left" class="el-icon-arrow-left"  style="font-size:20px"></div>
      <div slot="middle">
        <el-input
          type="text"
          placeholder="搜索"
          class="Searchipt"
          prefix-icon="el-icon-search"
        />
      </div>
      <div slot="right" class="icon"></div>
    </topnav>
    <tabbar></tabbar>
    <el-tabs :tab-position="tabPosition" class="el-tabs">
      <el-tab-pane label="手机">
        <hot-cate></hot-cate>
        <div class="goodsItem">
          <div class="itembox" v-for="item in goodsList" :key="item.id" @click="toDetail(item.id)">
            <img :src="item.url" alt="" />
            <div class="goodstext">{{item.name}}</div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="托运箱">托运箱</el-tab-pane>
      <el-tab-pane label="双肩包">双肩包</el-tab-pane>
      <el-tab-pane label="旅行包">旅行包</el-tab-pane>
      <el-tab-pane label="登机箱">登机箱</el-tab-pane>
      <el-tab-pane label="拉杠箱">拉杠箱</el-tab-pane>
      <el-tab-pane label="糖果">糖果</el-tab-pane>
      <el-tab-pane label="肌肉类零食">肌肉类零食</el-tab-pane>
      <el-tab-pane label="饼干">饼干</el-tab-pane>
      <el-tab-pane label="西式糕点">西式糕点</el-tab-pane>
      <el-tab-pane label="文具">文具</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import HotCate from "../components/hotCate.vue";
import tabbar from "../components/tabbar/tabbar.vue";
import Topnav from "../components/topNav/topnav.vue";
import pic from '@/../static/momentsale/test.jpg'
export default {
  components: { tabbar, Topnav, HotCate },
  data() {
    return {
      tabPosition: "left",
      goodsList: [
        {
          id: 0,
          url: pic,
          name: "思慕尔 专业",
        },
        {
          id: 1,
          url: pic,
          name: "思慕尔 专业",
        },
        {
          id: 2,
          url: pic,
          name: "思慕尔 专业",
        },
        {
          id: 3,
          url: pic,
          name: "思慕尔 专业",
        },
        {
          id: 4,
          url: pic,
          name: "思慕尔 专业",
        },
        {
          id: 5,
          url: pic,
          name: "思慕尔 专业",
        },
      ],
    };
  },
  methods:{
    toDetail(id){
      // console.log(this.$route.query.id);
      this.$router.push({
        path:'/details',
        query:{
          id:id
        }
      })
    }
  }

};
</script>

<style scoped>
/* .iconbox{width: 50%;} */
.icon{width: 39px;height: 44px;background: url('../../static/home/jd-sprites.png') no-repeat  -120px 0;margin:5px 0 0px 15px;transform: scale(0.5);}
.goodstext{font-size: 14px;font-weight: bold;}
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
  justify-content: space-between;
  text-align: center;
}
.Searchipt {
  /* border: 1px solid rgb(167, 163, 163);
  height: 30px;
  width: 250px;
  border-radius: 5px; */
  margin-right: 10px;
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