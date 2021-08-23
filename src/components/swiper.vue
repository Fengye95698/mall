<template>
<div class="block">
    <el-carousel height="150px" :interval='5000'>
      <el-carousel-item v-for="item in picList" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
export default {
    props:['picList']
}
</script>

<style scoped>
.block{height: 150px;}
  .el-carousel__item h3 {
    /* color: #475669; */
    font-size: 14px;
    /* opacity: 0.75; */
    line-height: 150px;
    margin: 0;
  }
 img{height: 100%;width: 100%;}
</style>