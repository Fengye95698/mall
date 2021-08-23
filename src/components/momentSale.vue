<template>
  <div class="box">
    <div class="title">
      <img src="@/../static/momentsale/jd_skill.png" alt="" />
      <strong>六点半</strong> 
      <strong>22:20</strong>  
    </div>
    <div class="goodsbox">
      <div class="itembox">
        <img src="@/../static/momentsale/test.jpg" alt="" />
        <div>￥378</div>
        <div>￥400</div>
      </div>
      <div class="itembox">
        <img src="@/../static/momentsale/test.jpg" alt="" />
        <div>￥378</div>
        <div>￥400</div>
      </div>
      <div class="itembox">
        <img src="@/../static/momentsale/test.jpg" alt="" />
        <div>￥378</div>
        <div>￥400</div>
      </div>
      <div class="itembox">
        <img src="@/../static/momentsale/test.jpg" alt="" />
        <div>￥378</div>
        <div>￥400</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.box {
  height: 170px;
  box-shadow:0px 0.2px grey;
}
.title {
  border: 1px solid rgb(235, 229, 229);
  box-shadow: 1px 1px rgb(179, 172, 172);
}
.title strong{height: 100%;margin-left: 10px;position: relative;bottom: 8px;}
.goodsbox {
  display: flex;
}
.title img {
  width: 70px;
  height: 30px;
}
.itembox {
  margin: 1%;
  text-align: center;
}
.itembox img {
  width: 85px;
  height: 80px;
}
.itembox div:nth-child(2){color: rgb(255, 81, 0);font-weight: bold;}
.itembox div:nth-child(3){color: rgb(170, 162, 162);text-decoration: line-through;}
</style>