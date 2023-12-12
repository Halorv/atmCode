<template>
  <div><backGround /></div>
  <van-button class="depositButton" to="deposit">存款</van-button>
  <van-button class="withdrawButton" to="withdraw">取款</van-button>
  <van-button class="cardReturn" to="cardReturn">退卡</van-button>
  <van-button class="queryBalance" to="queryBalance">查询余额</van-button>
  <van-button class="queryDetails" to="queryDetails">查询明细</van-button>
  <van-button class="transfer" to="transfer">转账</van-button>
  <van-button class="modifyPassword" to="modifyPassword">修改密码</van-button>
</template>
<style>
.depositButton {
  position: absolute;
  top: 120px;
  right: 1665px;
  /* letter-spacing: 1em; */
  /* opacity: 0.02; */
}
.withdrawButton {
  position: absolute;
  top: 246px;
  right: 1665px;
  /* letter-spacing: 1em; */
}
.cardReturn {
  position: absolute;
  top: 500px;
  right: 1665px;
  /* letter-spacing: 1em; */
}
.queryBalance {
  position: absolute;
  top: 120px;
  right: 820px;
}
.queryDetails{
    position: absolute;
  top: 246px;
  right: 820px;
}
.transfer{
    position: absolute;
  top: 372px;
  right: 820px;
  /* letter-spacing: 1em; */
}
.modifyPassword{
    position: absolute;
  top: 500px;
  right: 820px;
}
</style>
