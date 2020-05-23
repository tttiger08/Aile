<template>
    <div class="page">
        <div class="hd">
            <img src="../assets/images/f.png" alt />
            <span>艾乐教育欢迎您~</span>
        </div>
        <form @submit.prevent = "login" class="form">
            <div class="username">
                <label for="username">账号</label>
                <input type="text" id="username" value="请输入手机号" v-model="model.username">
            </div>
            <div class="password">
                <label for="password">密码 </label>
                <input type="password" id="password" value="请输入手机号" v-model="model.password" v-on:input="changeBg">
            </div>
            <input type="submit"  class="submit" value="登录" ref="submitBtn"> 
        </form>
    </div>
</template>

<style>
</style>
<script>
export default {
    data() {
        return {
            model: {
                username:'',
                password:'',
            }
        }
    },
    methods: {
        async login(){
            console.log(1)
            // const res = await this.$http.post('login', this.model)
            await this.$http.post('login', this.model)
            // sessionStorage.token = res.data.token
            // localStorage.token = res.data.token
            this.$router.push('/')
            this.$message({
                type: 'success',
                message: '登录成功'
            })
        },
        changeBg() {
            if(this.model.username&&this.model.password) {
                this.$refs.submitBtn.style.cssText =
                'background-color:#4CC172';
            } else {
                this.$refs.submitBtn.style.cssText =
                'background-color:#A5E0B8';
            }
        }
    },
};
</script>
<style >
@import "../assets/css/login.css";
</style>
