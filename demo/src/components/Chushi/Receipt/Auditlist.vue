<template>
<!-- 订单-待审核 -->
  <!-- 和‘订单-全部订单’基本一致 -->
  <ul>
    <!-- 使用v-for遍历所有在allDatas中的对象(订单)，key为订单的id, 
    id也被使用在了订单详情页的动态路由地址中 -->

    <li v-for="data in auditDatas" :key="data.id">

      <!-- 点击前往动态路由 -->
      <div class="item" @click="handleClick">

        <!-- 订单图标 -->
        <div class="icon">
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
        </div>

        <!-- 待审核订单内容 -->
        <div class="description">
          <div class="type">{{ data.type }}</div>
          <div class="time">下单时间：{{ data.time }}</div>
          <div class="price">总价:&yen;{{ data.price }}</div>
        </div>

        <div class="status">{{ data.status }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed:{
    // 将所有待审核的订单提取
    auditDatas: function () {
      let auditList = [];
      this.allDatas.forEach(function (item, index, array) {
        if (item.status === "待审核") {
          auditList.push(item);
        }
      });
      return auditList;
    },
  },
  methods: {
    handleClick(row) {
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
li:last-of-type{
  padding-bottom:7vh ;
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
  color:rgb(255, 166, 0);
}
li > .item:hover {
  background-color: rgb(196, 196, 196);
}
</style>