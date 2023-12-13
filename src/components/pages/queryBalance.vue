
import ReturnBack from '../returnBack.vue';
<template>
    <div><backGround/></div>
    <form action="" class="queryBalanceForm">
        <label for="">余额：</label>
    </form>
    <van-button class="queryBalanceDepositButton" to="deposit-info" id="depositButton">存款</van-button>
    <van-button class="queryBalanceWithdrawButton" to="withdraw-info" id="withdrawButton">取款</van-button>
    <returnBack/>
    <van-button class="queryBalanceQueryDetailsButton" to="queryDetails-info" id="queryDetailsButton">查询明细</van-button>
    <van-button class="queryBalanceCardReturnButton" to="cardReturn-info" id="queryCardReturnButton">退卡</van-button>
</template>
<style>
.queryBalanceForm{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    font-size: 200%;
    color: black;
}
.queryBalanceDepositButton{
    position:absolute;
    top: 120px;
    right: 1665px;
}
.queryBalanceWithdrawButton{
    position:absolute;
    top: 246px;
    right: 1665px;
}
.queryBalanceQueryDetailsButton{
    position:absolute;
    top: 120px;
    right: 820px;
}
.queryBalanceCardReturnButton{
    position: absolute;
    top: 500px;
    right: 820px;
}
</style>
<script>
var depositButton = document.getElementById(depositButton)
var withdrawButton = document.getElementById(withdrawButton)
var queryCardReturnButton = document.getElementById(queryCardReturnButton)
var queryDetailsButton = document.getElementById(queryDetailsButton)
</script>