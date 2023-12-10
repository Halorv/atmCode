
import ReturnToChoiceButton from '../returnToChoiceButton.vue';
<template>
    <div><backGround/></div>
    <van-button class="oneHundred">100</van-button>
    <van-button class="fiveHundred">500</van-button>
    <van-button class="oneThousand">1000</van-button>
    <returnToChoiceButton/>
    <van-button class="twoThousand">2000</van-button>
    <van-button class="fiveThousand">5000</van-button>
    <van-button class="otherAmount">其他金额</van-button>
    <form action="" class="withdrawForm">
        <label for="">请选择取款金额</label>
    </form>
</template>
<style>
.withdrawForm{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    font-size: 200%;
    color: aliceblue;
}
.oneHundred {
  position: absolute;
  top: 120px;
  right: 1665px;
  /* opacity: 0.02; */
}
.fiveHundred {
  position: absolute;
  top: 246px;
  right: 1665px;
}
.oneThousand {
  position: absolute;
  top: 372px;
  right: 1665px;
}

.twoThousand {
  position: absolute;
  top: 120px;
  right: 810px;
}
.fiveThousand{
    position: absolute;
  top: 246px;
  right: 810px;
}
.otherAmount{
    position: absolute;
  top: 372px;
  right: 810px;
}
</style>