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
        style="font-size:20px"
      ></div>
      <div slot="middle">我的京东</div>
      <div slot="right" class="icon"></div>
    </topnav>
    <div class="userHeader">
      <div class="left">
        <img src="@/../static/mine/my_icon.jpg" alt="" />
      </div>
      <div class="center">
        <div class="username">小猪佩奇</div>
        <div class="info">
          <span>注册会员</span>
          <span>立享特权</span>
        </div>
      </div>
      <div class="right">账号管理></div>
    </div>
    <div class="userAbout">
      <div class="first">
        <div>0</div>
        <div>关注的商品</div>
      </div>
      <div class="first">
        <div>0</div>
        <div>关注的店铺</div>
      </div>
      <div class="first">
        <div>0</div>
        <div>浏览记录</div>
      </div>
    </div>
    <showinfo>
      <div slot="left">
        <img src="@/../static/mine/my_order_icon.png" alt="" />
        <span>我的订单</span>
      </div>
      <div slot="right">全部订单></div>
    </showinfo>
    <div class="second">
      <div class="item">
        <img src="@/../static/mine/waitpay.png" alt="" />
        <div>待付款</div>
      </div>
      <div class="item">
        <img src="@/../static/mine/wuliu.png" alt="" />
        <div>待付款</div>
      </div>
      <div class="item">
        <img src="@/../static/mine/tuihuan.png" alt="" />
        <div>待付款</div>
      </div>
    </div>
    <showinfo>
      <div slot="left">
        <img src="@/../static/mine/mypackage.png" alt="" />
        <span>我的钱包</span>
      </div>
      <div slot="right">全部订单></div>
    </showinfo>
    <div class="second">
      <div class="item">
        <!-- <img src="@/../static/mine/waitpay.png" alt="" /> -->
        <div>0</div>
        <div>账户余额</div>
      </div>
      <div class="item">
        <!-- <img src="@/../static/mine/wuliu.png" alt="" /> -->
        <div>0</div>
        <div>优惠券</div>
      </div>
      <div class="item">
        <!-- <img src="@/../static/mine/tuihuan.png" alt="" /> -->
        <div>0</div>
        <div>京豆</div>
      </div>
      <div class="item">
        <!-- <img src="@/../static/mine/tuihuan.png" alt="" /> -->
        <div>0</div>
        <div>京东卡/E卡</div>
      </div>
    </div>
        <showinfo>
      <div slot="left">
        <img src="@/../static/mine/baitiao1.png" alt="" />
        <span>京东白条</span>
      </div>
      <div slot="right">白条还款、激活获礼包></div>
    </showinfo>
        <showinfo>
      <div slot="left">
        <img src="@/../static/mine/baitiao2.png" alt="" />
        <span>客户服务</span>
      </div>
      <div slot="right">返修/退换货、在线客服></div>
    </showinfo>
        <showinfo>
      <div slot="left">
        <img src="@/../static/mine/bai3.png" alt="" />
        <span>会员plus</span>
      </div>
      <div slot="right">PLUS绝密攻略></div>
    </showinfo>
        <showinfo>
      <div slot="left">
        <img src="@/../static/mine/bai4.png" alt="" />
        <span>京东会员</span>
      </div>
      <div slot="right">会员俱乐部></div>
    </showinfo>
    
    <tabbar></tabbar>
  </div>
</template>

<script>
import Showinfo from "../components/spacebetween/showinfo.vue";
import tabbar from "../components/tabbar/tabbar.vue";
import Topnav from "../components/topNav/topnav.vue";
export default {
  components: { tabbar, Topnav, Showinfo },
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
.userHeader {
  background: url('../../static/mine/userbg.png');
  color: white;
  display: flex;
}
.userAbout {
  background-color: rgb(186, 38, 22);
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-bottom: 10px;
  color: white;
}
.first {
  margin-bottom: 10px;
}
.left img {
  border-radius: 50%;
  width: 70%;
  margin: 10px 0 0 10px;
}
.center {
  margin: 10px 0 0px 10px;
  flex: 2;
  position: relative;
  right: 3%;
}
.info {
  margin: 10px 0 0 0;
  font-size: 13px;
  margin-bottom: 10px;
}
.info span:nth-child(1) {
  margin-right: 10px;
}
.right {
  text-align: center;
  margin: 6%;
  color: rgb(231, 186, 177);
}
.second {
  display: flex;
  justify-content: space-around;
  text-align: center;
  box-shadow: 0 10px rgb(245, 243, 243);
}
.item{
  font-size: 14px;
  color: rgb(155, 152, 152);
}
.item img {
  width: 50%;
  margin-top: 10px;
}
</style>