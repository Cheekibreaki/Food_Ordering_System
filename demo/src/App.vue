<template>
    <html>
        <body>
            <div id="app">
                <router-view/>
            </div>
        </body>
    </html>
</template>

<script>
//  <login v-show="inLogin" :dialog_visable="inLogin" @isRegisteredEvent="isRegistered"></login>
// <register  v-show="inRegister" :dialog_visable="inRegister" @isLoginedEvent="isLogined"></register>
import login from './components/Login'
import register from './components/Register'
export default {
    components: {
        login,register
    },
    data() {
        return {
            inLogin: true,
            inRegister: false,
        }
    },
    methods: {
        // isRegistered(wantRegister) {
        //     this.inRegister = wantRegister;
        //     console.log("inRegister");
        //     this.inLogin = !this.inRegister;
        // },
        // isLogined(wantLogin) {
        //     this.inLogin = wantLogin;
        //     console.log("inLogin");
        //     this.inRegister = !this.inLogin;
        // }
    }
}
</script>
<style scoped>
* ,html,body{
    margin:0;
    padding:0;
}
</style>
