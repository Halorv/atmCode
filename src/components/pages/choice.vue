<template>
  <div><backGround /></div>
  <van-button class="depositButton" to="deposit">存款</van-button>
  <van-button class="withdrawButton" to="withdraw">取款</van-button>
  <van-button class="card-return" to="cardReturn">退卡</van-button>
  <van-button class="query-balance" to="queryBalance">查询余额</van-button>
  <van-button class="query-details">查询明细</van-button>
  <van-button class="transfer">转账</van-button>
  <van-button class="modify-password">修改密码</van-button>
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
.card-return {
  position: absolute;
  top: 500px;
  right: 1665px;
  /* letter-spacing: 1em; */
}
.query-balance {
  position: absolute;
  top: 120px;
  right: 820px;
}
.query-details{
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
.modify-password{
    position: absolute;
  top: 500px;
  right: 820px;
}
</style>
