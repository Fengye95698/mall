<template>
  <div>
    <topnav class="top">
      <div
        slot="left"
        @click="
          () => {
            this.$router.replace('/');
          }
        "
        class="el-icon-arrow-left"
        style="font-size: 20px"
      ></div>
      <div slot="middle" class="loginFont">京东登录</div>
    </topnav>
    <div class="iptBox">
      <input type="text" placeholder="请输入账号" ref="username" />
      <input type="password" placeholder="请输入密码" ref="password" />
      <button @click="login">登录</button>
      <div
        style="text-align: right; color: grey"
        @click="
          () => {
            this.$router.push('/register');
          }
        "
      >
        快速注册
      </div>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/topNav/topnav.vue";
import { request } from "../network/request";
export default {
  components: { Topnav },
  data() {
    return {};
  },
  methods: {
    login() {
      request({
        url: "/login",
        method: "post",
        data: {
          // mObj:{
          //   loginName:this.$refs.username.value,
          //   loginPawd:this.$refs.password.value
          // },
          loginName: this.$refs.username.value,
          loginPawd: this.$refs.password.value,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status === 1) {
          this.$notify({
            type: "success",
            message: "登录成功",
          });
          this.$router.push({
            path:'/',
            query:{
              name:res.data.user_name,
              islogin:true
            }
          });
        } else {
          this.$notify({
            type: "danger",
            message: "账号密码错误",
          });
        }
      });
    },
  },
};
</script>

<style>
.loginFont {
  text-align: center;
}
.top {
  border-bottom: 1px solid rgb(223, 217, 217);
  background-color: rgb(250, 245, 245);
  font-size: 18px;
}
.iptBox {
  padding: 10px;
}
input {
  height: 50px;
  width: 90%;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid rgb(146, 145, 145);
}
button {
  height: 50px;
  width: 90%;
  margin: 10px;
  color: red;
  background-color: #fff;
  border: red 1px solid;
}
</style>