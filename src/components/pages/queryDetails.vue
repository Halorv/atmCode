import { Loading } from 'vant';
<template>
  <div><backGround /></div>
  <returnBack />
  <van-button class="queryDetailsCardReturn" to="cardReturn-info" id="queryCardReturnButton">退卡</van-button>
  <!-- <showList/> -->
  <form action="" class="detailsForm">
    <!-- 明细展示，待修改 -->
    <textarea name="" id="" cols="35" rows="10">132132</textarea>
  </form>
</template>
<style>
.queryDetailsCardReturn {
  position: absolute;
  top: 500px;
  right: 820px;
}
/* .vanlist{
    position: absolute;
    top: 50%;
    right: 50%;
} */
.detailsForm {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  opacity: 0.7;
}
</style>
<script>
  var queryCardReturnButton = document.getElementById(queryCardReturnButton)
</script>
