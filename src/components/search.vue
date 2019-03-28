<template>
    <div class="search">
        <input type="text" v-model="search"> <button @click="sousuo(search)">搜索</button>
        <h2>在搜索,在这里，手动退出登陆</h2>
        <button @click="exit()">退出登录</button>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    data(){
        return {
            search:""
        }
    },
    methods:{
        sousuo(search){
            let params=new URLSearchParams();
            params.append("search",search);
            params.append("token",localStorage.getItem("token"));
            //传数据
            Axios.post("http://localhost:3000/search",params).then(res=>{
                console.log(res);
                //判断过期，如果过期
                if(res.data.status==false){
                    //过期之后，清除你的token指令牌
                    localStorage.removeItem("token");
                    alert("你的登录时间已过期，请从新登陆");
                    //token过期，跳转至登录路由
                    this.$router.push("/login")
                }
            })
        },
        exit(){
            //拿到localstorage中的token
            localStorage.getItem("token","");
            if(localStorage.getItem("token","")){
                this.$router.push("/login")
            }
        }
    }
}
</script>

<style>

</style>
