import ReturnToChoiceButton from '../returnToChoiceButton.vue';
<template>
  <div><backGround /></div>
  <van-button class="oneHundredButton" id="oneHundredButton">100</van-button>
  <van-button class="fiveHundredButton" id="fiveHundredButton">500</van-button>
  <van-button class="oneThousandButton" id="oneThousandButton">1000</van-button>
  <returnBack />
  <van-button class="twoThousandButton" id="twoThousandButton">2000</van-button>
  <van-button class="fiveThousandButton" id="fiveThousandButon">5000</van-button>
  <van-button class="otherAmountButton" id="otherAmountButton">其他金额</van-button>
  <form action="" class="withdrawForm">
    <label for="">请选择取款金额</label>
  </form>
</template>
<style>
.withdrawForm {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  font-size: 200%;
  color: aliceblue;
}
.oneHundredButton {
  position: absolute;
  top: 120px;
  right: 1665px;
  /* opacity: 0.02; */
}
.fiveHundredButton {
  position: absolute;
  top: 246px;
  right: 1665px;
}
.oneThousandButton {
  position: absolute;
  top: 372px;
  right: 1665px;
}

.twoThousandButton {
  position: absolute;
  top: 120px;
  right: 820px;
}
.fiveThousandButton {
  position: absolute;
  top: 246px;
  right: 820px;
}
.otherAmountButton {
  position: absolute;
  top: 372px;
  right: 820px;
}
</style>
<script>
var oneHundredButton = document.getElementById(oneHundredButton);
var fiveHundredButton = document.getElementById(fiveHundredButton);
var oneThousandButton = document.getElementById(oneThousandButton);
var twoThousandButton = document.getElementById(twoThousandButton);
var otherAmountButton = document.getElementById(otherAmountButton);
var fiveThousandButon = document.getElementById(fiveThousandButon);
</script>
