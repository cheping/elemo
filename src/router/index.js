import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from "@/components/login"
import search from "@/components/search"
import reg from "@/components/reg"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path:"/login",
      meta:{
        isLogin:false
      },
      component:login
    },
    {
      path:"/search",
      meta:{
        isLogin:true
      },
      component:search
    },
    {
      path:"/reg",
      msg:{
        isLogin:false
      },
      component:reg
    }
  ]
})

