<template>
  <div class="remBox">
    <div class="title">为你推荐</div>
    <div class="showlist">
      <img src="@/../static/momentsale/test.jpg" alt="" />
      <img src="@/../static/momentsale/test.jpg" alt="" />
      <img src="@/../static/momentsale/test.jpg" alt="" />
      <img src="@/../static/momentsale/test.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  font-weight: bold;
  /* margin: 0.5%; */
}
.showlist {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.showlist img {
    flex: 1;
  width: 180px;
  height: 150px;
  margin: 2%;
}
</style>