// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//做路由拦截处理
router.beforeEach((to,from,next)=>{
  console.log(to);
  //判断 
  if(to.meta.isLogin){
      if(localStorage.getItem("token")){
        next()
      }else{
        alert("请您先登陆");
        next("/login");
      }   
      
  }else{
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// conponment:{template:"<div>我是主页面</div>"}
