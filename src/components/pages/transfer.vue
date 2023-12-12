<template>
  <div><backGround /></div>
  <returnBack />
  <van-button class="transferEnsure">确认</van-button>
  <form action="" class="transferForm">
    <input
      type="text"
      name="bankCardNumber"
      class="bankCardNumber"
      placeholder="请输入转账对象银行卡号"
    />
    <br /><br /><br />
    <input
      type="text"
      name="ensureNumber"
      class="ensureNumber"
      placeholder="再次输入转账对象银行卡号"
    />
  </form>
</template>
<style>
.transferForm {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
}
.ensure{
    position: absolute;
    top: 500px;
    right: 820px;
}
.bankCardNumber {
  width: 300px;
  height: 40px;
  text-align: center;
  font-size: 120%;
}
.ensureNumber {
  width: 300px;
  height: 40px;
  text-align: center;
  font-size: 120%;
}
</style>
