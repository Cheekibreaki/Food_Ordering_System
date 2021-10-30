<template>
<!-- 订单-全部订单 -->
  <ul>
    <!-- 使用v-for遍历所有在allDatas中的对象(订单)，key为订单的id, 
    id也被使用在了订单详情页的动态路由地址中 -->
    <li v-for="data in allDatas" :key="data.id">
      
      <!-- 点击前往动态路由 -->
      <div class="item" @click="to_Receipt_Detail(data.id)">
        <!-- 订单图标 -->
        <div class="icon">
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
        </div>
        <!-- 订单内容 -->
        <div class="description">
          <div class="type">{{ data.type }}</div>
          <div class="time">下单时间：{{ data.time }}</div>
          <div class="price">总价:&yen;{{ data.price }}</div>
        </div>
        <!-- 订单状态，不同状态通过method给予不同颜色 -->
        <div class="status" :class="{red:status_WeitongguoColor(data.status),
                                    blue:status_DaijiedanColor(data.status), 
                                    orange:status_DaishenheColor(data.status),
                                    green:status_YiwanchengColor(data.status),
                                    cyan:status_DaiyanshouColor(data.status),
                                    }">{{ data.status }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    status_DaishenheColor(status){
      if(status==="待审核"){
        return true;
      }
    },
    status_DaiyanshouColor(status){
      if(status==="待验收"){
        return true;
      }
    },
    status_WeitongguoColor(status){
      if(status==="未通过"){
        return true;
      }
    },
    status_YiwanchengColor(status){
      if(status==="已完成"){
        return true;
      }
    },
    status_DaijiedanColor(status){
      if(status==="待接单"){
        return true;
      }
    },
    status_DaiyanshouColor(status){
      if(status==="待验收"){
        return true;
      }
    },
    to_Receipt_Detail(id) {
      this.$router.push("/receipt_chushi/receipt_detail");
      console.log(row);
    },
  },
  data() {
    return {
      allDatas: [
        {
          id: 0,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待接单",
        },
        {
          id: 1,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待审核",
        },
        {
          id: 2,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待验收",
        },
        {
          id: 3,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "已完成",
        },
        {
          id: 4,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "未通过",
          isCheck:true,
        }, 
        {
          id: 5,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "未通过",
        },
        {
          id: 6,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待验收",
        },
        {
          id: 7,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待验收",
        },
        {
          id: 8,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待验收",
        },
      ],
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.item {
  display: flex;
  justify-content: space-around;
  height: 96px;
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid #e0e0e0;
}
.icon {
  width: 13%;
  padding: 25px 0px 0px 4%;
}
.description {
  width: 60%;
}
.status {
  width: 20%;
}
.type {
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  margin-left: 5px;
}
.time {
  font-size: 12px;
  color: rgb(75, 75, 75);
}
.price {
  font-size: 12px;
  color: rgb(75, 75, 75);
}
.status {
  line-height: 96px;
  text-align: center;
  font-size: 14px;
  
}
li > .item:hover {
  background-color: rgb(196, 196, 196);
}
li:last-of-type{
  padding-bottom:7vh ;
}
.red{
  color:rgb(255, 60, 0);
}
.orange{
  color:rgb(255, 166, 0);
}
.green{
  color:rgb(16, 197, 40);
}
.blue{
  color:rgb(108, 144, 211);
}
.cyan{
  color:rgb(7, 202, 176);
}
</style>