<template>
  <div class="app">
    <div class="header">
        <i class="el-icon-arrow-left"  style="margin-top:15px; margin-left:10px"></i>
        菜品采购
        <el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:10px;"></el-avatar>
    </div>
    <div class="content">
      <div class="icon"></div>
      <div class="response">
          <h1>已生成订单</h1>
          <h3>下单时间: {{time}}</h3>
          <button>查看此订单</button>
      </div>
  </div>
  </div>

</template>

<script>
export default {
  methods: {
    toTable(){
      this.$router.push("/home_yanshou/table");
    },
  },
  data() {
    return {
      time:"2021-07-09 11:37",
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
.icon{
    width: 100px;
    height: 120px;
    margin:0 auto;
}
h1{
    font-size: 20px;
    width:100px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
}
h3{
    color:rgb(179, 179, 179);
    font-size: 10px;
    width:150px;
    display: block;
    margin: 8px auto 15px auto;
}
.response button{
    height: 32px;
    width:90px;
    line-height: 30px;
    display: block;
    background-color: transparent;
    color:rgb(179, 179, 179);
    border:1px solid rgb(179, 179, 179);
    border-radius: 6px;
    margin:0 auto;
}
.response button:hover{
    background-color: rgb(199, 199, 199);
    color:white;
}
</style>