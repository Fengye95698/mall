<template>
  <div class="tag">
      <div class="left"><slot name='left' ></slot></div>
      <div class="righttext"><slot name="right"></slot>
  </div></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tag{display: flex;justify-content: space-between;border-bottom: 1px solid rgb(167, 162, 162);align-items: center;margin-top: 10px;}
.tag .left img{width: 18%;margin: 7px;}
.left{display: flex;justify-content: flex-start;margin: 5px 0 0px 0;}
.left span{position: relative;bottom: 25%;font-weight: 600;font-size: 14px;}
.righttext{color: rgb(173, 173, 173);}
</style>