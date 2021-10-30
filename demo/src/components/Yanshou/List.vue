<template>
  <div class="app">

    <div class="header">
        <i class="el-icon-arrow-left"  style="margin-top:15px; margin-left:10px"></i>
        验收菜品
        <el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:10px;"></el-avatar>
    </div>
    
    <ul>
        <li v-for="data in datas" :key="data.type">
            <div class="item">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <div class="type">{{data.type}}</div>
                <div class="price">&yen;{{data.price}}</div>
                <div class="amount">x{{data.amount}}</div>
                
                <div class="status">{{data.status}}</div>
            </div>
        </li>
    </ul>
    <div class="bottom">
        <div class="totalPrice">
        当前总价：
        <span class="totalPriceNum">&yen;{{totalPrice}}</span>
        </div>
        <div class="authorization">
            <button @click="toTable">不合格</button>
            <button @click="toSuccess">合格</button>
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
    toSuccess(){
      this.$router.push("/home_yanshou/table/success");
    },
    handleClick(row) {
      this.$router.push("/home_yanshou/list");
      console.log(row);
    },
  },
  data() {
    return {
      totalPrice: "28",
      datas: [
        {
          type: "芹菜 500g",
          price: "1.00/500g",
          amount: "2",
        }
        // ,{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },{
        //   type: "芹菜 500g",
        //   price: "1.00/500g",
        //   amount: "2",
        // },
      ],
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
}
.price{
    border:1px solid rgb(255,51,0);
    border-radius: 5px;
    color: rgb(255, 51, 0);
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    padding:2px 4px 2px 4px;
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
.totalPrice{
    padding-top:12px;
    margin-left:10px;
    font-size:18px;
    font-weight: bold;
}
.totalPriceNum{
    color:Red;
}
.authorization{
    margin-top:30px;
    display:flex;
    justify-content: space-around;
    height: 60px;
    padding-bottom: 30px;
}
.authorization button{
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