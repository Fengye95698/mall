<template>
  <div class="box" >
    <div class="item" v-for="item in picInfo" :key="item.url" >
      <img :src="item.url" alt="" />
      <div class="title" >{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import p0 from "@/../static/homecate/nav0.png";
import p1 from "@/../static/homecate/nav1.png";
import p2 from "@/../static/homecate/nav2.png";
import p3 from "@/../static/homecate/nav3.png";
import p4 from "@/../static/homecate/nav4.png";
import p5 from "@/../static/homecate/nav5.png";
import p6 from "@/../static/homecate/nav6.png";
import p7 from "@/../static/homecate/nav7.png";
import p8 from "@/../static/homecate/nav8.png";
import p9 from "@/../static/homecate/nav9.png";
export default {
  data() {
    return {
      picInfo: [
        {
          url: p0,
          title: "京东超市",
        },
        {
          url: p1,
          title: "全球购",
        },
        {
          url: p2,
          title: "服装城",
        },
        {
          url: p3,
          title: "京东生鲜",
        },
        {
          url: p4,
          title: "京东到家",
        },
        {
          url: p5,
          title: "充值中心",
        },
        {
          url: p6,
          title: "会赚钱",
        },
        {
          url: p7,
          title: "领券",
        },
        {
          url: p8,
          title: "物流查询",
        },
        {
          url: p9,
          title: "我的关注",
        },
      ],
    };
  },
  methods:{
    getInfo(){
      console.log('子组件的事件');
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  text-align: center;
  overflow: hidden;
  justify-content: center;
  flex-wrap: wrap;
}
.box .item {
  margin: 3%;
}
.item img {
  width: 38px;
  height: 38px;
}
.title {
  font-size: 14px;
  font-weight: 600;
}
</style>