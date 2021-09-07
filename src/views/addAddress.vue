<template>
  <div>
    <topnav class="boxnav">
      <div
        slot="left"
        class="el-icon-arrow-left"
        style="font-size: 23px"
        @click="
          () => {
            this.$router.replace('/address');
          }
        "
      ></div>
      <div slot="middle" style="font-weight: bold">新增收货地址</div>
      <div slot="right" class="icon"></div>
    </topnav>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import topnav from "../components/topNav/topnav.vue";
export default {
  components: { topnav },
  data() {
    return {
      areaList: {
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
        },
      },
      searchResult: [],
    };
  },
  methods: {
    onSave() {
    //   Toast("save");
    this.$router.replace('/address')
    },
    onDelete() {
    //   Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
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