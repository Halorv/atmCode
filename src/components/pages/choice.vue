<template>
  <div><backGround /></div>
  <van-button class="depositButton" to="deposit-info" id="depositButton">存款</van-button>
  <van-button class="withdrawButton" to="withdraw-info" id="withdrawButton">取款</van-button>
  <van-button class="cardReturnButton" to="cardReturn-info" id="cardReturnButton">退卡</van-button>
  <van-button class="queryBalanceButton" to="queryBalance-info" id="queryBalanceButton">查询余额</van-button>
  <van-button class="queryDetailsButton" to="queryDetails-info" id="queryDetailsButton">查询明细</van-button>
  <van-button class="transferButton" to="transfer-info" id="transferButton">转账</van-button>
  <van-button class="modifyPasswordButton" to="modifyPassword-info" id="modifyPasswordButton">修改密码</van-button>
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
.cardReturnButton {
  position: absolute;
  top: 500px;
  right: 1665px;
  /* letter-spacing: 1em; */
}
.queryBalanceButton {
  position: absolute;
  top: 120px;
  right: 820px;
}
.queryDetailsButton{
    position: absolute;
  top: 246px;
  right: 820px;
}
.transferButton{
    position: absolute;
  top: 372px;
  right: 820px;
  /* letter-spacing: 1em; */
}
.modifyPasswordButton{
    position: absolute;
  top: 500px;
  right: 820px;
}
</style>

<script>
var depositButton = document.getElementById(depositButton)
var cardReturnButton = document.getElementById(cardReturnButton)
var withdrawButton = document.getElementById(withdrawButton)
var modifyPasswordButton = document.getElementById(modifyPasswordButton)
var transferButton = document.getElementById(transferButton)
var queryDetailsButton = document.getElementById(queryDetailsButton)
var queryBalanceButton = document.getElementById(queryBalanceButton)
</script>

