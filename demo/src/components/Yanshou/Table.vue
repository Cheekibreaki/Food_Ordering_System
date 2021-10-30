<template>
  <div class="app">
    <div class="header">
        <i class="el-icon-arrow-left"  style="margin-top:15px; margin-left:10px"></i>
        验收菜品
        <el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:10px;"></el-avatar>
    </div>
    <div class="table">
        <textarea maxlength="100" ref="text_area" v-model="text" placeholder="请输入验收不合格原因"  rows="10"></textarea>
        <div class="submission">
            <span class="textNum"><span>{{textsum}}</span>/100</span>
            <button @click="toFail">提交</button>
        </div>

    </div>
  </div>

</template>

<script >
import {autosize} from '../../static/autosize.js'
// src='../../tools/autosize.js'
export default {
    watch:{
        text(){
            this.textsum=this.text.length;
        }
    },
    mounted() {
        autosize(this.$refs.text_area);
    },
  methods: {
    toFail(){
      this.$router.push("/home_yanshou/table/fail");
    },
  },
  data() {
    return {
      text: "",
      textsum:0,
    };
  },
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.app {
  padding-top: 44px;
  padding-bottom:5vh;
  background-color: #f5f6f7;
  min-height: 85vh;
  
}
.header {
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
.table{
    min-height: 200px;
    background-color:white;
    width: 97%;
    margin:0 auto;
    margin-top: 10px;
}
.submission{
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid rgb(223, 223, 223);
    height:61px;
    line-height: 61px;
}
.submission .textNum{
    margin-right: 3%;
    color: rgb(172, 172, 172);
}
textarea{
    width:90%; 
    border:0px solid transparent;
    margin:2% 5% 0% 5%;
}
textarea:focus{
    outline: solid rgb(199, 199, 199) 1px ;
    border:0px solid transparent;
}
button{
    margin-top:13px;
    margin-right: 5%;
    height:31px;
    width:100px;
    border: 0px solid transparent;
    border-radius: 20px;
    color:white;
    font-weight: bold;
    background-image: linear-gradient(to right, #eb6038, #ea4237);
}
button:hover{
    background-image: linear-gradient(to right, #e64114, #eb1c0d);
    cursor: pointer;
}
</style>