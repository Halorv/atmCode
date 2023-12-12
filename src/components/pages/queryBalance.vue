
import ReturnBack from '../returnBack.vue';
<template>
    <div><backGround/></div>
    <form action="" class="queryBalanceForm">
        <label for="">余额：</label>
    </form>
    <van-button class="queryBalanceDeposit" to="deposit">存款</van-button>
    <van-button class="queryBalanceWithdraw" to="withdraw">取款</van-button>
    <returnBack/>
    <van-button class="queryBalanceQueryDetails">查询明细</van-button>
    <van-button class="queryBalanceCardReturn" to="cardReturn">退卡</van-button>
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
.queryBalanceDeposit{
    position:absolute;
    top: 120px;
    right: 1665px;
}
.queryBalanceWithdraw{
    position:absolute;
    top: 246px;
    right: 1665px;
}
.queryBalanceQueryDetails{
    position:absolute;
    top: 120px;
    right: 820px;
}
.queryBalanceCardReturn{
    position: absolute;
    top: 500px;
    right: 820px;
}
</style>