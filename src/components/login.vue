<template>
    <div class="login">
        用户名: <input type="text" v-model="phone"><br/>
        密码: <input type="text" v-model="pwd"><br/>
        <button @click="login(phone,pwd)">登陆</button>
        
    </div>
</template>

<script>
import Axios from "axios";
export default {
   data(){
       return {
           phone:'',
           pwd:''
       }      
   },
   methods:{
       login(phone,pwd){
            let params=new URLSearchParams();
            params.append("phone",phone);
            params.append("pwd",pwd);
           //传用户名和密码

           Axios.post("http://localhost:3000/login",params).then(res=>{
               console.log(res);
               alert(res.data.success);
                //将token放进浏览器缓存中，相当于咱们前端的小数据库
                localStorage.setItem("token",res.data.token);
                //将id抓到，放到localstorage
                localStorage.setItem("id",res.data.id);
                
           })
       }
       
   }
}
</script>

<style>
    /* div.login{
        font-size: 36px;
    } */
</style>
