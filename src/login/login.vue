<template>
    <div class="body">
        <div class="main">
            adad
        </div>
    </div>
</template>
 
<script setup lang="ts">
 
</script>
 
<style scoped >
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }
 
.body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    background-color: #ecf0f3;
    color: #a0a5a8;
  }
  
.main {
    position: relative;
    width: 1000px;
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 20px;
    overflow: hidden;
  }
  @media (max-width: 1200px) {
    .main {
      transform: scale(0.7);
    }
  }
  @media (max-width: 1000px) {
    .main {
      transform: scale(0.6);
    }
  }
  @media (max-width: 800px) {
    .main {
      transform: scale(0.5);
    }
  }
  @media (max-width: 600px) {
    .main {
      transform: scale(0.4);
    }
  }
</style>