<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <router-link to="/login">登陆</router-link>
    <router-link to="/search">搜索</router-link>
    <router-link to="/reg">注册</router-link>
    <!-- <router-link to="/reg">注册</router-link> -->
    <router-view></router-view>
    <!-- <login></login> -->
  </div>
</template>

<script>
// import login from "./components/login"

export default {
  name: 'App',
  // components:{
  //   login
  // }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
