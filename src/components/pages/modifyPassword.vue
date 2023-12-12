<template>
    <div><backGround/></div>
    <returnBack/>
    <van-button class="modifyPasswordEnsure">确认</van-button>
    <form action="" class="modifyPasswordForm">
        <input type="password" name="newPassword" class="newPassword" placeholder="请输入新密码">
        <br><br><br>
        <input type="password" name="ensurePassword" class="ensurePassword" placeholder="再次输入新密码">
    </form>
</template>
<style>
.modifyPasswordForm{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%);
}
.newPassword{
    width: 300px;
    height: 40px;
    font-size: 120%;
    text-align: center;
}
.ensurePassword{
    width: 300px;
    height: 40px;
    font-size: 120%;
    text-align: center;
}
.modifyPasswordEnsure{
    position: absolute;
    top: 500px;
    right: 820px;
}
</style>