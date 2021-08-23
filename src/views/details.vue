<template>
  <div>
    <topnav class="boxnav">
      <div slot="left" class="el-icon-arrow-left" @click="()=>{this.$router.push('/category')}" style="font-size:25px"></div>
      <div slot="middle">商品详情</div>
      <div slot="right" class="icon"></div>
    </topnav>
    <!-- {{this.$route.query.id}} -->
    <div class="box">
      <img src="@/../static/details/biubiu.jpg" alt="" />
      <div class="context">
        <h5>九分袖 短款SL546031</h5>
        <div class="price">
          <span>￥379.00</span>
          <button>降价通知</button>
        </div>
      </div>
    </div>
    <div class="content">
        <span>九分袖 短款SL546031九分袖 短款SL546031九分袖 短款SL546031九分袖 短款SL546031九分袖 短款SL546031</span> 
    </div>
    <div class="tabbar">
        <div class="tab-item">
            <!-- <img src="" alt=""> -->
            <div class="el-icon-picture-outline-round" style="font-size:22px"></div>
            <div>卖家</div>
        </div>
        <div class="tab-item">
            <!-- <img src="" alt=""> -->
            <div class="el-icon-apple" style="font-size:22px"></div>
            <div>关注</div>
        </div>
        <div class="tab-item">
            <!-- <img src="" alt=""> -->
            <div class="el-icon-shopping-cart-2" style="font-size:22px"></div>
            <div @click="()=>{this.$router.push('/cart')}">购物车</div>
        </div>
        <button class="add">加入购物车</button>
        <button class="buy">立即购买</button>
    </div>
  </div>
  
</template>

<script>
import Topnav from "../components/topNav/topnav";

export default {
  components: { Topnav },
  mounted() {
    // console.log(this.$route);
  },
};
</script>

<style scoped>
.icon{width: 39px;height: 44px;background: url('../../static/home/jd-sprites.png') no-repeat  -120px 0;margin:5px 0 0px 0px;transform: scale(0.5);}
.boxnav {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(209, 207, 207);
  text-align: center;
}
.box{box-shadow: .9px 10px rgb(243, 240, 240);}
.box img{margin: 2%;}
.context{padding: 10px;}
.context h5{font-size: 18px;}
.price{color: red;font-weight: bold;font-size: 20px;margin-top: 10px;display: flex;justify-content: space-between;}
.price button{width: 82px;height: 35px;background-color: #fff;border: 1px solid rgb(173, 167, 167);border-radius: 5px;}
.content{font-weight: bold;padding: 10px;border-bottom: 1px solid rgb(223, 217, 217);}
.tabbar{display: flex;}
.tab-item{font-size: 15px;font-weight: bold;text-align: center;margin: 2%;margin-left: 20px;}
.tabbar button{width: 90px;border: none;color: white;height: 50px;}
.tabbar .add{background-color: rgb(255,176,63);margin-left: 2%;}
.buy{background-color: rgb(242,48,50);}
</style>