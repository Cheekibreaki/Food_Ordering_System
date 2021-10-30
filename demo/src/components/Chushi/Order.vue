<template>
  <div class="app">

    <div class="header">
        <i class="el-icon-arrow-left"  style="margin-top:15px; margin-left:10px"></i>
        菜品采购
        <el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:10px;"></el-avatar>
    </div>
    
    <ul>
        <li v-for="data in goodsDatas" :key="data.id">
            <div class="item">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <div class="type">{{data.name}} {{data.unit}}g</div>
                <div class="amount">x{{data.amount}}</div>
            </div>
        </li>
    </ul>
    <div class="bottom">
        <div class="authorization">
            <button @click="toOrder_Confirmed()">确认下单</button>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  mounted() {
  },
  methods: {
    toOrder_Confirmed(){
      this.$router.push("/home_chushi/Order_confirmed");
    },
  },
  computed:{
    goodsDatas(){
      return this.$route.query.newgoodsDatas;
    }
  },
  data() {
    return {

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

ul{
    margin: 0 auto;
    width:97%;
    margin-top:13px;
    background-color: white;
}
li{
    list-style:none;
    margin:0 auto;
    width:90%;
}
.item {
    display: flex;
    justify-content: space-around;
    height:40px;
    background-color:rgb(255, 255, 255);
}
li:last-of-type{
    border-bottom: 1px solid #cecece;
}
.icon{
    width:10%;
}
.type{
    width:20%;
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    margin-left:5px;
    margin-right: 60px;
}
.unit{
    width:10%;
    font-size: 15px;
    font-weight: bold;
    margin-top: 11px;
}
.amount{
    width:10%;
    font-size: 15px;
    font-weight: bold;
    margin-top: 11px;
    margin-left:5px;
}
.bottom{
    background-color:white ;
    width:97%;
    margin:0 auto;
}

.authorization{
    padding-top:30px;
    display:flex;
    justify-content: space-around;
    height: 60px;
    padding-bottom: 30px;
}
.authorization button{
    font-size: 15px;
    width:100px;
    border: 0px solid transparent;
    border-radius: 20px;
    color:white;
    font-weight: bold;
    background-image: linear-gradient(to right, #eb6038, #ea4237);
}
.authorization button:hover{
    background-image: linear-gradient(to right, #e64114, #eb1c0d);
    cursor: pointer;
}
</style>