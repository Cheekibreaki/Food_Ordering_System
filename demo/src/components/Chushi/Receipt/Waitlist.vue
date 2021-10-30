<template>
  <ul>
    <li v-for="data in waitDatas" :key="data.id">
      <div class="item" @click="handleClick">
        <div class="icon">
          <el-avatar icon="el-icon-user-solid" :size="30"></el-avatar>
        </div>
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
  methods: {
    handleClick(row) {
      this.$router.push("/home_yanshou/list");
      console.log(row);
    },
  },
  computed: {
    waitDatas: function () {
      let waitList = [];
      this.allDatas.forEach(function (item, index, array) {
        if (item.status === "待接单") {
          waitList.push(item);
        }
      });
      return waitList;
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
  color:rgb(108, 144, 211);
}
li > .item:hover {
  background-color: rgb(196, 196, 196);
}
</style>