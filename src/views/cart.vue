<template>
  <div>
    <topnav class="boxnav">
      <div
        slot="left"
        class="el-icon-arrow-left"
        @click="
          () => {
            this.$router.push('/category');
          }
        "
        style="font-size: 20px"
      ></div>
      <div slot="middle">购物车</div>
      <div slot="right" class="icon"></div>
    </topnav>
    <div class="login">
      <span>登录后同步电脑与手机购物车中的商品</span>
      <button>登录</button>
    </div>
    <!-- <div class="item">
      <div class="head">
        <el-radio v-model="radio" label="1">分红布娃娃</el-radio>
        <span style="color:red">优惠券></span>
      </div>
      <div class="contentbox">
        <el-radio v-model="radio" label="1">
          <div class="content">
            <img src="@/../static/details/biubiu.jpg" alt="" />
            <div class="goodsdetail">
              <div class="title">卫衣女中款分红大布娃娃预</div>
              <span class="descr">重量:0.45kg 颜色:AT800/16</span>
              <div class="price">
                <span>￥155.00</span>
                <div class="countInfo">
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </div>
              </div>
            </div>
          </div>
        </el-radio>
      </div>
      <div class="foot">
        <img src="@/../static/cart/delete_up.png" alt="" />
        <img src="@/../static/cart/delete_down.png" alt="" />
      </div>
    </div>
    <div class="item">
      <div class="head">
        <el-radio v-model="radio" label="2">分红布娃娃</el-radio>
        <span style="color:red">优惠券></span>
      </div>
      <div class="contentbox">
        <el-radio v-model="radio" label="2">
          <div class="content">
            <img src="@/../static/details/biubiu.jpg" alt="" />
            <div class="goodsdetail">
              <div class="title">卫衣女中款分红大布娃娃预</div>
              <span class="descr">重量:0.45kg 颜色:AT800/16</span>
              <div class="price">
                <span>￥155.00</span>
                <div class="countInfo">
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </div>
              </div>
            </div>
          </div>
        </el-radio>
      </div>
      <div class="foot">
        <img src="@/../static/cart/delete_up.png" alt="" />
        <img src="@/../static/cart/delete_down.png" alt="" />
      </div>
    </div> -->
    <div class="buytabbar">
      <!-- <el-radio v-model="radio" label="3">全选</el-radio> -->
      <van-button type="primary" @click="checkAll">全选</van-button>
      <div class="buyItem">
        <div class="left">
          <h4>合计:￥537</h4>
          <div class="sub">总额:￥537.80 立减:￥0.00</div>
        </div>
        <div class="right">
          <button>去计算</button>
        </div>
      </div>
    </div>
    <van-checkbox-group v-model="result" ref="checkboxGroup" v-show="isAlive" style="height:1500px">
      <van-checkbox :name="item.cart_id" class="item" label-disabled v-for="(item,index) in cartList" :key="item.cart_id" > 
        <div class="head">
          <div class="sty" :class="{ active: isActive }">{{item.shop_name}}</div>
          <span style="color: red">优惠券></span>
        </div>
        <div class="contentbox">
          <div class="sty">
            <div class="content">
              <img :src="item.product_img_url" alt="" />
              <div class="goodsdetail">
                <div class="title">{{item.product_name}}</div>
                <!-- <span class="descr">重量:0.45kg 颜色:AT800/16</span> -->
                <div class="price">
                  <span>￥{{item.product_uprice}}</span>
                  <div class="countInfo">
                    <button @click="addCount(index)">+</button>
                    <span>{{ item.goods_num }}</span>
                    <button @click="subCount(index)">-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="foot" @click.stop="clearGood(index)">
          <img src="@/../static/cart/delete_up.png" alt="" />
          <img src="@/../static/cart/delete_down.png" alt="" />
        </div>
      </van-checkbox>
      <!-- <van-checkbox name="c">复选框 c</van-checkbox> -->
    </van-checkbox-group>
    <div v-show="!isAlive">没有商品啦~~~~~</div>
  </div>
</template>

<script>
import topnav from "../components/topNav/topnav.vue";
import { request } from '../network/request';
export default {
  data() {
    return {
      result: [],
      isChoose: true,
      isActive: false,
      num: 1,
      isAlive: true,
      cartList:[]
    };
  },
  computed:{
    getTotal(count,price){
      return count*price;
    }
  },
  methods: {
    checkAll() {
      this.$refs.checkboxGroup.toggleAll(this.isChoose);
      this.isChoose = !this.isChoose;
    },
    clearGood(index) {
      // console.log(index);
      for(let i = 0;i<this.cartList.length;i++){
        if(i === index && this.cartList.length >0){
          this.cartList.splice(i,1);
          // console.log();
          if(this.cartList.length == 0){
            this.isAlive = !this.isAlive; 
          }
        }
        //  
      }
      
    },
    addCount(index) {
      // console.log(index);
      for(let i = 0;i<this.cartList.length;i++){
        if(i == index){
          this.cartList[i].goods_num += 1
          this.num+=1
        }
      }
      
    },
    subCount(index) {
      if (this.num >= 1) {
        for(let i = 0;i<this.cartList.length;i++){
        if(i == index && this.cartList[i].goods_num>1){
          this.cartList[i].goods_num -= 1
          this.num -=1
        }
      }
      }
    },
  },
  components: { topnav },
  mounted(){
    request({
      url:'/cart'
    }).then(res=>{
      console.log(res);
      this.cartList = res.data;
      console.log(this.cartList);
    })
  }
};
</script>

<style scoped>
.van-button {
  margin: 10px;
  background-color: rgb(255, 123, 0);
  border: none;
  border-radius: 5px;
}
.icon {
  width: 39px;
  height: 44px;
  background: url("../../static/home/jd-sprites.png") no-repeat -120px 0;
  margin: 5px 0 0px 0px;
  transform: scale(0.5);
}
.buytabbar {
  border-top: 1px solid gray;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  z-index: 20;
  /* top: 200px; */
  background-color: #fff;
}
.buyItem {
  display: flex;
  padding: 15px;
}
.left {
  flex: 3;
  width: 180px;
}
.sub {
  font-size: 5px;
  color: rgb(192, 185, 185);
}
.right button {
  width: 70px;
  height: 100%;
  background-color: red;
  color: white;
  border: none;
}
.item {
  padding: 5px;
  box-shadow: 0px 2px rgb(211, 208, 208);
  height: 190px;
}
.head {
  display: flex;
  justify-content: space-between;
}
.content {
  display: flex;
  justify-content: center;
}
.content img {
  width: 30%;
  height: 30%;
}
.goodsdetail {
  margin-left: 3%;
}
.title {
  font-weight: bold;
  font-size: 15px;
  word-wrap: break-word;
  margin-bottom: 10px;
}
.descr {
  color: rgb(194, 190, 190);
}
.price {
  display: flex;
  justify-content: space-between;
  margin-top: 0%;
}
.price span:nth-child(1) {
  color: red;
  font-size: 15px;
  font-weight: bold;
}
.countInfo {
  margin-left: 10px;
  /* z-index: 10; */
}
.countInfo button {
  width: 25px;
  height: 20px;
  border-radius: 1px;
  border: 1px solid rgb(209, 203, 203);
  background-color: #fff;
}
.countInfo span {
  border: none;
  border-radius: 1px;
  display: inline-block;
  width: 25px;
  text-align: center;
  height: 15px;
}
.foot {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 86%;
  margin-top: 5px;
  /* top: 3%; */
}
.foot img:nth-child(1) {
  margin-bottom: -10%;
}
.foot img {
  width: 55%;
}
.boxnav {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(209, 207, 207);
  text-align: center;
}
.login {
  color: rgb(168, 169, 171);
  padding: 15px;
  border-bottom: 1px solid rgb(209, 207, 207);
  font-size: 15px;
  text-align: center;
}
.login button {
  width: 55px;
  height: 30px;
  background-color: rgb(241, 84, 83);
  color: white;
  border: none;
  margin-left: 10px;
}
</style>
<style>
.active {
  color: red;
}
.sty {
  padding-top: 5%;
  padding-left: 5%;
  font-weight: bold;
}
.van-checkbox-group {
  overflow-y: auto;
  overflow: hidden;
}
</style>