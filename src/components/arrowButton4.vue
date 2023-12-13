<template>
  <!-- <arrowButtonOrientRight id="button4"/> -->
  <van-button id="button4" @click="handleClick"></van-button>
</template>

<style>
#button4 {
  width: 133px;
  height: 80px;
  border: 0;
  background-image: url("../assets/realButton_80.png");
  position: absolute;
  top: 500px;
  right: 1865px;
}
#button4:active {
  background-image: url("../assets/pressedButton_80.png");
}
</style>
<script>
function handleClickReturnBack() {
  returnBackButton.click();
}
function handleClickCardReturn() {
  cardReturnButton.click();
}
export default {
  methods: {
    handleClick() {
      if (
        (this.$route.path == "/withdraw-info") |
        (this.$route.path == "/queryBalance-info") |
        (this.$route.path == "/queryDetails-info") |
        (this.$route.path == "/transfer-info") |
        (this.$route.path == "/modifyPassword-info") |
        (this.$route.path == "/cardReturn-info")
      ) {
        handleClickReturnBack();
      } else if (this.$route.path == "/choice-info") {
        handleClickCardReturn();
      }
    },
  },
};
</script>
