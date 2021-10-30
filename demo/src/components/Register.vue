<template>
  <div id="app">
      <el-row :gutter="20">
          <el-col :span="8" :offset="8">
              <div class="grid-content"></div>
              
          </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span=24-isPC()*2 :offset=isPC()>
              <el-card shadow="always" >
                  <h1 >注册信息</h1>
                  <el-divider></el-divider>

                <el-form :model="registerValidateForm" :rules="rules" ref="registerValidateForm" label-width="100px">

                    <el-form-item
                        label="姓名"
                        prop="name"
                        :rules="[
                        { required: true, message: '姓名不能为空'},
                        ]"
                    >
                        <el-input type="text" v-model="registerValidateForm.name" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item
                        label="邮箱"
                        prop="email"
                        
                    >
                        <el-input type="text" v-model="registerValidateForm.email" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item
                        label="密码"
                        prop="passWord"
                        
                    >
                        <el-input type="password" v-model="registerValidateForm.passWord" autocomplete="off" show-password></el-input>

                    </el-form-item>

                    <el-form-item
                        label="确认密码"
                        prop="confPassWord"
                        
                    >
                        <el-input type="password" v-model="registerValidateForm.confPassWord" autocomplete="off" show-password></el-input>

                    </el-form-item>

                    <el-form-item
                        label="验证码"
                        prop="veriCode"
                        :rules="[
                        { required: true, message: '验证码不能为空'},
                        ]"
                    >
                        <el-input type="text" v-model="registerValidateForm.veriCode" autocomplete="off"></el-input>

                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('registerValidateForm')">注册</el-button>
                        <el-button @click="loginClick()">返回登录</el-button>
                    </el-form-item>
                    </el-form>

              </el-card>
          </el-col>
      </el-row>
  </div>
</template>

<script>
 import axios from 'axios' 
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value.length < 6) {
          callback(new Error('密码长度最小6位'));
        }else {
          if (this.registerValidateForm.confPassWord !== '') {
            this.$refs.registerValidateForm.validateField('confPassWord');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerValidateForm.passWord) {
          callback(new Error('两次输入密码不一致!'));
        }else if (value.length < 6) {
          callback(new Error('密码长度最小6位'));
        } else {
          callback();
        }
      };

      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请填写邮箱'));
        } else {
          if (value !== '') { 
            var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!reg.test(value)){
              callback(new Error('请输入有效的邮箱'));
            }
          }
          callback();
        }
      };
      return {
        wantLogin: false,
        registerValidateForm: {
          name:'',
          email: '',
          passWord: '',
          confPassWord:'',
          veriCode:''
          

        },
        rules: {
          passWord: [
            { validator: validatePass, trigger: 'blur' },
            { required: true,message:'请输入密码'}
          ],
          confPassWord: [
            { validator: validatePass2, trigger: 'blur' },
            { required: true,message:'请再次输入密码'}
          ],
          email: [
             { validator: validateEmail, trigger: 'blur' },
             { required: true, message:'请填写邮箱'},
          ]
        }
      };
      
    },
    methods: {
      requestRegister(){
        axios.get(
          'http://47.92.155.21:8080/home', {
         params: {
          username: this.registerValidateForm.email,
          password: this.registerValidateForm.passWord
          }
         }
        ).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      isPC(){  
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
        var flag = true;  
          for (var v = 0; v < Agents.length; v++) {  
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
          }  
        if (flag===true){
          return 8;
        }
        else{
          return 2;
        }
         
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.requestRegister();
            this.loginClick();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      loginClick(){
          this.resetForm('registerValidateForm');
          this.wantLogin=true;
          console.log('loginedclicked');
           this.$router.push({path: "/login"});
          //this.$emit('isLoginedEvent',this.wantLogin)
      }
    }
  }
</script>

<style scoped>
#app{
  height: 800px;
  background-color: rgb(235, 235, 235);
}
h1 {text-align: center;}
.el-card{
    border-radius:30px;
}
.grid-content{
    border-radius:4px;
    min-height:80px;
}
.el-row{
    margin-bottom:20px;
}
</style>