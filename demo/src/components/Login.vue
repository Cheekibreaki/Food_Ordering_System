<template>
  <body>
    <div id="app">
      <div class="header">登录</div>
      <el-form
        :model="userValidateForm"
        :rules="rules"
        ref="userValidateForm"
        style="width: 80%; margin: 0 auto"
      >
        <el-form-item prop="email">
          <div class="input">
            <el-input
              type="text"
              v-model="userValidateForm.email"
              autocomplete="off"
              placeholder="请输入账号"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="passWord">
          <div class="input">
            <el-input
              type="text"
              v-model="userValidateForm.passWord"
              autocomplete="off"
              show-password
              placeholder="请输入密码"
            ></el-input>
          </div>
        </el-form-item>

        <el-form-item>
          <div class="login_button">
            <button 
            :class="{disable: this.isdisable,inactive:this.isdisable, active:!this.isdisable}"
             @click.prevent="submitForm('userValidateForm') ">登录</button>
          </div>
        </el-form-item>
      </el-form>



      <!-- <el-row :gutter="20">
          <el-col :span="8" :offset="8">
              <div class="grid-content"></div>
              
          </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span=24-isPC()*2 :offset=isPC()>
              <el-card shadow="always" >
                  <el-divider></el-divider>

                <el-form :model="userValidateForm" :rules="rules" ref="userValidateForm" label-width="100px">

                    <el-form-item
                        label="邮箱"
                        prop="email"
                        
                    >
                        <el-input type="text" v-model="userValidateForm.email" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item
                        label="密码"
                        prop="passWord"
                        
                    >
                        <el-input type="text" v-model="userValidateForm.passWord" autocomplete="off" show-password></el-input>

                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('userValidateForm')">登录</el-button>
                    </el-form-item>
                    </el-form>

              </el-card>
          </el-col>
      </el-row> -->
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  watch:{
    // userValidateFormNew:{
    //   handler:(val,oldVal)=>{
    //   var reg =/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    //   if (!reg.test(val.email)&&val.passWord.length>=6){
    //     enableButton();
    //   }else{
    //     disableButton();
    //   }
    //   },
    //   deep: true
    // }

    userValidateFormNew:function(val){
    
      var reg =/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (!reg.test(val.email)||val.passWord.length<6){
        this.disableButton();
      }else{
        this.enableButton();
      }
      
    }

    
  },
  computed:{
    userValidateFormNew(){
      return JSON.parse (JSON.stringify(this.userValidateForm));
    }
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6) {
        callback(new Error("密码长度最小6位"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请填写邮箱"));
      } else {
        if (value !== "") {
          var reg =/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的邮箱"));
          }
        }
        callback();
      }
    };
    return {
      isdisable:true,
      userValidateForm: {
        email: "",
        passWord: "",
      },
      userToken: "",
      rules: {
        passWord: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请输入密码" },
        ],
        email: [
          { validator: validateEmail, trigger: "blur" },
          { required: true, message: "请填写邮箱" },
        ],
      },
    };
  },
  methods: {
    enableButton(){
      this.isdisable=false;
    },
    disableButton(){
      this.isdisable=true;
    },
    requestLogin() {
      let userType = "chushi";
          switch (userType) {
            case "houqin":
              this.$router.push("/home_houqin");
              break;
            case "gongyingshang":
              this.$router.push("/home_gongyingshang");
              break;
            case "chushi":
              this.$router.push("/home_chushi");
              break;
            case "yanshou":
              this.$router.push("/home_yanshou");
              break;
          }

      // const json = JSON.stringify({
      //   username: this.userValidateForm.email,
      //   password: this.userValidateForm.passWord,
      // });
      // axios
      //   .post("http://47.92.155.21:8080/login", json)
      //   .then((response) => {
      //     console.log(response.data);
      //     this.userToken = response.data;
      //     this.$store.commit("$_setToken", this.userToken);
      //     let userType = "chushi";
      //     switch (userType) {
      //       case "houqin":
      //         this.$router.push("/home_houqin");
      //         break;
      //       case "gongyingshang":
      //         this.$router.push("/home_gongyingshang");
      //         break;
      //       case "chushi":
      //         this.$router.push("/home_chushi");
      //         break;
      //       case "yanshou":
      //         this.$router.push("/home_yanshou");
      //         break;
      //     }
      //   })
      //   .catch(function (error) {
      //     alert("账号或密码错误");
      //     console.log(error);
      //   });
    },
    // isPC(){
    //   var userAgentInfo = navigator.userAgent;
    //   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    //   var flag = true;
    //     for (var v = 0; v < Agents.length; v++) {
    //       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    //     }
    //   if (flag===true){
    //     return 8;
    //   }
    //   else{
    //     return 2;
    //   }

    // },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.requestLogin();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#app {
  padding-top: 70px;
  padding-bottom: 5vh;
  background-color: #ffffff;
  min-height: 85vh;
}
.header {
  z-index: 2;
  font-weight: bold;
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
  position: fixed;
  font-size: 18px;
  top: 0px;
  right: 0px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  line-height: 50px;
}
.input {
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
}
.input >>> .el-input__inner {
  font-size: 16px;
  border: none;
  border-bottom: 1px solid rgb(212, 212, 212);
}
.login_button {
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
.inactive {
  width: 100%;
  border: none;
  color: rgb(109, 109, 109);
  background: rgb(231, 231, 231);
  font-size: 16px;
  border-radius: 5px;
  height: 45px;
}
.active {
  width: 100%;
  border: none;
  color: rgb(255, 255, 255);
  background: rgb(255, 60, 0);
  font-size: 16px;
  border-radius: 5px;
  height: 45px;
}
el-form-item {
  margin-left: 200px;
}
/* h1 {text-align: center;}
.el-card{
    border-radius:30px;
}
.grid-content{
    border-radius:4px;
    min-height:80px;
}
.el-row{
    margin-bottom:20px;
} */
</style>