<template>
<div><backGround/></div>
    <form action="" class="passwordForm">
        <label class="loginLable" for="" >密码: </label>
        <input type="password" class="inputarea"/>
    </form>
    <van-button to="choice" class="loginButton">登录</van-button>
    <router-view></router-view>
    
  </template>
  <style>
  .passwordForm{
    position:absolute;
    top:40%;
    left:50%;
    transform: translate(-50%);
  }
  .loginButton{
    position:absolute;
    top: 120px;
    right: 1665px;
    z-index: 100;
  }
  .inputarea{
    height: 30px;
    width: 360px;
    font-size: large;
  }
  .loginLable{
    color: aliceblue;
    font-size: 200%;
    position: absolute;
    transform: translate(-130%,-15%);
  }
  </style>
  <script>
  </script>
  
