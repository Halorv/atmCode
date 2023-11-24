<!-- sign_up -->
<template>
    <div class="container a-container" id="a-container">
        <form class="form" id="a-form" method="" action="">
          <h2 class="form_title title">Create Account</h2>
          <div class="form__icons">
             <img class="form__icon" src=" ">
             <img class="form__icon" src=" ">
             <img class="form__icon" src=" ">
          </div>
          <span class="form__span">or use email for registration</span>
          <input class="form__input" type="text" placeholder="Name">
          <input class="form__input" type="text" placeholder="Email">
          <input class="form__input" type="password" placeholder="Password">
          <button class="form__button button submit">SIGN UP</button>
        </form>
    </div>
</template>
<style scoped>
@import './login.css';
/* 将源码中的css样式单独存放,在各组件中导入就可以。*/
</style>