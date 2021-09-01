<template>
    
  <div class="tab-box">
        <!-- "isActive?'active':''" -->
    <div
      class="tab-item"
      v-for="(item, index) in tabbarInfo"
      :key="index"

      @click="naviTo(item)"
      :class="{ active: $route.path === item.path }"
    >  
    
    <!--       @click="navTo(index)"
      :class="{active:index==currentIndex}"  -->
      <div :class="item.img" id="icon"></div>        
      <div class="text">{{ item.text }}</div>
    </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex:0,
      tabbarInfo: [
        {
          img: "el-icon-s-home",
          text: "首页",
          path: "/home",
        },
        {
          img: "el-icon-picture-outline-round",
          text: "分类",
          path: "/category",
        },
        {
          img: "el-icon-discover",
          text: "发现",
          path: "/find",
        },
        {
          img: "el-icon-shopping-cart-2",
          text: "购物车",
          path: "/cart",
        },
        {
          img: "el-icon-user",
          text: "我的",
          path: "/me",
        },
      ],
    };
  },
  methods: {
    naviTo(item) {
      this.$router.push(item.path);
    },
    navTo(index){
      this.currentIndex = index;
      // this.$router.push(this.tabbarInfo[index].path)
    }
  },
};
</script>

<style>
.tab-box {
  font-size: 10px;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  position: fixed;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  left: 0;
  right: 0;
  text-align: center;
  z-index: 9;
}
/* .tab-item div:nth-child(2){width: 90px;height: 100%;} */
#icon {
  font-size: 25px;
}
.active {
  color: red;
}
</style>