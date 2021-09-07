<template>
  <div>
    <topnav class="boxnav">
      <div slot="left" class="el-icon-arrow-left" style="font-size: 23px;" @click="()=>{this.$router.push('/cart')}"></div>
      <div slot="middle" style="font-weight:bold;">
        地址列表
      </div>
      <div slot="right" class="icon"></div>
    </topnav>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import topnav from '../components/topNav/topnav.vue';
export default {
  components: { topnav },
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$toast("新增地址");
      this.$router.push('/addAddress')
    },
    onEdit(item, index) {
      this.$toast("编辑地址:" + index);
    },
  },
};
</script>

<style>
.boxnav {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(209, 207, 207);
  text-align: center;
}
</style>