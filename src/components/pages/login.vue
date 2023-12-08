<template>
<div><backGround/></div>
    <form action="" class="passwordForm">
        <label for="" style="color: aliceblue;">密码:</label>
        <input type="password"/>
        <van-button to="choice">登录</van-button>
    </form>
    <router-view></router-view>
    
  </template>
  <style>
  .passwordForm{
    position:absolute;
    top:40%;
    left:50%;
    transform: translate(-50%);
  }
  </style>
  <script>
  </script>
  
