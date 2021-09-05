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
      <div slot="middle" class="loginFont">京东注册</div>
    </topnav>
    <div class="iptBox">
      <input type="text" placeholder="请输入账号" ref="username" />
      <input type="password" placeholder="请输入密码" ref="password" />
      <input type="password" placeholder="请再次输入密码" />
      <button @click="registerInfo">注册</button>
    </div>
  </div>
</template>

<script>
import Topnav from "../components/topNav/topnav.vue";
import { request } from "../network/request";
export default {
  data() {
    return {};
  },
  components: { Topnav },
  methods: {
    registerInfo() {
      request({
        url: "/reg",
        method: "post",
        data: {
          regName: this.$refs.username.value,
          regPasswd: this.$refs.password.value,
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {},
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
  width: 95%;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid rgb(146, 145, 145);
}
button {
  height: 50px;
  width: 95%;
  margin: 10px;
  color: red;
  background-color: #fff;
  border: red 1px solid;
}
</style>