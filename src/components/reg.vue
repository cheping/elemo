<template>
    <div class="reg">
        用户名: <input type="text" v-model="phone"><br/>
        密码: <input type="text" v-model="pwd"><br/>
        确认密码: <input type="text" v-model="repwd"><br/>
        <button @click="confirm(phone,pwd,repwd)">确认提交</button>
    </div>
</template>

<script>
// axios传数据
import Axios from "axios";
export default {
    data(){
        return {
            phone:"",
            pwd:"",
            repwd:""
        }
    },
    methods:{
        confirm(phone,pwd,repwd){
            let params=new URLSearchParams();
            params.append("phone",phone);
            params.append("pwd",pwd);
            params.append("repwd",repwd);
            // params.append("token",localStorage.getItem("token"));
            Axios.post("http://localhost:3000/reg",params).then(res=>{
                console.log(res);
            })
        }
    }
}
</script>

<style>

</style>
