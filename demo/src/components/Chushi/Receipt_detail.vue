<template>
  <!-- 订单详情 -->
  <div class="app">

    <div class="header">
        <i class="el-icon-arrow-left"  style="margin-top:15px; margin-left:10px"></i>
        验收菜品
        <el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:10px;"></el-avatar>
    </div>
    
    <!-- 6种不同菜品品种，key基于菜品名称，目前使用了一致的菜品名称
    所以console 会报错 -->

    <!-- 蔬菜豆制品 -->
    <ul>
        <li v-for="data in vegetableDatas" :key="data.type">
            <div class="item">
                <!-- 菜品样式图片 -->
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <!-- 菜品名称 例：芹菜 500g -->
                <div class="type">{{data.type}}</div>
                <!-- 菜品数量 -->
                <div class="amount">x{{data.amount}}</div>
            </div>
        </li>
    </ul>

    <!-- 肉禽蛋 -->
    <ul>
        <li v-for="data in meatDatas" :key="data.type">
            <div class="item">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <div class="type">{{data.type}}</div>
                <div class="amount">x{{data.amount}}</div>
            </div>
        </li>
    </ul>
    
    <!-- 海鲜水产 -->
    <ul>
        <li v-for="data in seafoodDatas" :key="data.type">
            <div class="item">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <div class="type">{{data.type}}</div>
                <div class="amount">x{{data.amount}}</div>
            </div>
        </li>
    </ul>

    <!-- 水果 -->
    <ul>
        <li v-for="data in fruitDatas" :key="data.type">
            <div class="item">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <div class="type">{{data.type}}</div>
                <div class="amount">x{{data.amount}}</div>
            </div>
        </li>
    </ul>

    <!-- 粮油调味 -->
    <ul>
        <li v-for="data in oilDatas" :key="data.type">
            <div class="item">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <div class="type">{{data.type}}</div>
                <div class="amount">x{{data.amount}}</div>
            </div>
        </li>
    </ul>

    <!-- 酒水饮料 -->
    <ul>
        <li v-for="data in beverageDatas" :key="data.type">
            <div class="item">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:5px;"></el-avatar></div>
                <div class="type">{{data.type}}</div>
                <div class="amount">x{{data.amount}}</div>
            </div>
        </li>
    </ul>

     <!-- 订单状态基于receipt_status的情况而定 
     使用v-if 判断receipt_status情况 并使对应div块可见 -->

    <!-- 待接单 -->
    <div class="footer_daijiedan" v-if="receipt_status==='待接单'">
      <div class="time">下单时间：{{xiadan_time}}</div>
      <div class="receipt_status">{{receipt_status}}</div>
    </div>

    <!-- 待审核 -->
    <div class="footer_daishenhe" v-if="receipt_status==='待审核'">
      <div class="time">
        <div>下单时间：{{xiadan_time}}</div>
        <div>接单时间：{{jiedan_time}}</div>
        <div>总价：&yen;{{28}}</div>
      </div>
      <div class="receipt_status">{{receipt_status}}</div>
    </div>

    <!-- 审核未通过 注意 receipt status 是 ‘审核未通过’ -->
    <div class="footer_shenhe_weitongguo" v-if="receipt_status==='审核未通过'">
      <div class="time">
        <div>下单时间：{{xiadan_time}}</div>
        <div>接单时间：{{jiedan_time}}</div>
        <div class="unpass">审核未通过：{{shenhe_result}}</div>
        <div>总价：&yen;{{28}}</div>
      </div>
      <div class="receipt_status">未通过</div>
    </div>

    <!-- 待验收 -->
    <div class="footer_daiyanshou" v-if="receipt_status==='待验收'">
      <div class="time">
        <div>下单时间：{{xiadan_time}}</div>
        <div>接单时间：{{jiedan_time}}</div>
        <div>审核完成：{{shenhe_time}}</div>
        <div>总价：&yen;{{28}}</div>
      </div>
      <div class="receipt_status">{{receipt_status}}</div>
    </div>

    <!-- 验收未通过 注意 receipt status 是 ‘验收未通过’ -->
    <div class="footer_yanshou_weitongguo" v-if="receipt_status==='验收未通过'">
      <div class="time">
        <div>下单时间：{{xiadan_time}}</div>
        <div>接单时间：{{jiedan_time}}</div>
        <div>审核完成：{{shenhe_time}}</div>
        <div>配送时长：{{peisong_time}}</div>
        <div class="unpass">验收未通过：{{yanshou_result}}</div>
        <div>总价：&yen;{{28}}</div>
      </div>
      <div class="receipt_status">未通过</div>
    </div>

    <!-- 已完成 -->
    <div class="footer_yiwancheng" v-if="receipt_status==='已完成'">
      <div class="time">
        <div>下单时间：{{xiadan_time}}</div>
        <div>接单时间：{{jiedan_time}}</div>
        <div>审核完成：{{shenhe_time}}</div>
        <div>配送时长：{{peisong_time}}</div>
        <div>总价：&yen;{{28}}</div>
      </div>
      <div class="receipt_status">{{receipt_status}}</div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      xiadan_time:"2021-07-19 11:30",
      jiedan_time:"2021-07-19 11:30",
      shenhe_time:"2021-07-19 11:30",
      peisong_time:"01:39:39",

      receipt_status:"验收未通过",
      shenhe_result:'审核未通过原因',
      yanshou_result:'验收未通过原因',
      totalPrice: "28",//总价

      vegetableDatas: [
        {
          type: "芹菜 500g",
          price: "1.00/500g",
          amount: "2",
        }
        ,{
          type: "芹菜 500g",
          price: "1.00/500g",
          amount: "2",
        },{
          type: "芹菜 500g",
          price: "1.00/500g",
          amount: "2",
        },
      ],
      meatDatas: [
        {
          type: "牛肉 500g",
          price: "1.00/500g",
          amount: "2",
        }
        ,{
          type: "牛肉 500g",
          price: "1.00/500g",
          amount: "2",
        },{
          type: "牛肉 500g",
          price: "1.00/500g",
          amount: "2",
        },
      ],
      seafoodDatas: [
        {
          type: "鱼 500g",
          price: "1.00/500g",
          amount: "2",
        }
        ,{
          type: "鱼 500g",
          price: "1.00/500g",
          amount: "2",
        },{
          type: "鱼 500g",
          price: "1.00/500g",
          amount: "2",
        },
      ],
      fruitDatas: [
        {
          type: "西瓜 500g",
          price: "1.00/500g",
          amount: "2",
        }
        ,{
          type: "西瓜 500g",
          price: "1.00/500g",
          amount: "2",
        },{
          type: "西瓜 500g",
          price: "1.00/500g",
          amount: "2",
        },
      ],
      oilDatas: [
        {
          type: "粮油 500g",
          price: "1.00/500g",
          amount: "2",
        }
        ,{
          type: "粮油 500g",
          price: "1.00/500g",
          amount: "2",
        },{
          type: "粮油 500g",
          price: "1.00/500g",
          amount: "2",
        },
      ],
      beverageDatas: [
        {
          type: "可乐 500g",
          price: "1.00/500g",
          amount: "2",
        }
        ,{
          type: "可乐 500g",
          price: "1.00/500g",
          amount: "2",
        },{
          type: "可乐 500g",
          price: "1.00/500g",
          amount: "2",
        },
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
ul:first-of-type{
  margin-top:13px;
}
ul{
    margin: 0 auto;
    width:97%;
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
    padding-right: 60px;
}
.amount{
    width:10%;
    font-size: 15px;
    font-weight: bold;
    margin-top: 11px;
    margin-left:5px;
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
.footer_daijiedan{
  background-color:white ;
  width:97%;
  margin:0 auto;
  height:60px;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
}
.footer_daishenhe{
  background-color:white ;
  width:97%;
  margin:0 auto;
  height:100px;
  display: flex;
  justify-content: space-around;
}
.footer_daishenhe .receipt_status{
  line-height: 60px;
  color:rgb(255, 166, 0);
}
.footer_shenhe_weitongguo{
  background-color:white ;
  width:97%;
  margin:0 auto;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
}
.footer_shenhe_weitongguo .unpass{
  width: 200px;
}
.footer_shenhe_weitongguo .receipt_status{
  padding-top:20px;
  color:rgb(255, 60, 0);
}
.footer_daiyanshou{
  background-color:white ;
  width:97%;
  margin:0 auto;
  display: flex;
  height: 120px;
  justify-content: space-around;
  padding-bottom: 20px;
}
.footer_daiyanshou .receipt_status{
  line-height: 60px;
  color:rgb(7, 202, 176);
}
.footer_yanshou_weitongguo{
  background-color:white ;
  width:97%;
  margin:0 auto;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
}
.footer_yanshou_weitongguo .unpass{
  width: 200px;
}
.footer_yanshou_weitongguo .receipt_status{
  padding-top:20px;
  color:rgb(255, 60, 0);
}
.footer_yiwancheng{
  background-color:white ;
  width:97%;
  margin:0 auto;
  display: flex;
  height: 120px;
  justify-content: space-around;
  padding-bottom: 20px;
}
.footer_yiwancheng .receipt_status{
  line-height: 60px;
  color:rgb(16, 197, 40);
}

.time{
  color: rgb(167, 167, 167);
  font-weight: bold;
}
.footer_daijiedan .receipt_status{
  color:rgb(108, 144, 211);
  font-weight: bold;
}
</style>