<template>
  <div class="topBox">
      <div class="left">
          <slot name='left'></slot>
      </div>
      <div class="middle">
          <slot name='middle'></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.topBox{display: flex;width: 100%;line-height: 49px;height: 49px;background-color: rgb(255, 255, 255);box-shadow: rgb(255, 255, 255) 1px 1px;}
.left{flex:1;}
.middle{flex: 3.5;}
.right{flex:1;}
</style>