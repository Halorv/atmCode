<template>
  <van-button type="primary" class="arrow">1</van-button>
</template>

<style>
.arrow {
  width: 150px;
  height: 50px;
  border: 0;
  background: linear-gradient(
                -135deg,
                transparent 22px,
                #04e6fb 22px,
                #65ff9a 100%
            )
            top right,
              linear-gradient(
                -45deg,
                transparent 22px,
                #04e6fb 22px,
                #65ff9a 100%
            )
            bottom right;
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
</style>