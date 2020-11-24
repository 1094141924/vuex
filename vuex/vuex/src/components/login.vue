<template>
    <div>
        用户名：<input type="text" v-model='user.username'>
        密码：<input type="password" name="" v-model='user.pwd'>
        <button @click='submitBtn'>登陆</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            user:{
                username:'',
                pwd:''
            },
            userInfo:{
                userStatus:2,
                userLevel:1
            }
        }
    },
    methods:{
        submitBtn(){
            let me=this;
            if(!me.user.username||!me.user.pwd){
                alert("用户名或密码不能为空");
            }
            else {
                this.$store.commit('login',this.user);
                this.$store.commit('member',this.userInfo);
                this.$router.push('./');
            }
        }
    }
}
</script>