<template>
  <!-- 订单 -->
  <div class="app">
    <div class="header">
      <i
        class="el-icon-arrow-left"
        style="margin-top: 15px; margin-left: 10px"
      ></i>
      订单
      <el-avatar
        icon="el-icon-user-solid"
        :size="30"
        style="margin-top: 10px"
      ></el-avatar>
    </div>

    <!-- 使用了嵌套路由的6种订单情况 -->
    <div class="product_types">
      <!-- 使用routerlink达成嵌套路由 -->
      <router-link 
        to="/receipt_chushi/all"
        tag="div"
      >
        <div class="product_type_description">全部订单</div>
      </router-link>

       <router-link to="/receipt_chushi/waitlist" tag="div">
        <div class="product_type_description">待接单</div>
      </router-link>

      <router-link
        to='/receipt_chushi/auditlist/'
        tag="div"
      >
        <div class="product_type_description">待审核</div>
      </router-link>

      <router-link
        to='/receipt_chushi/receivelist/'
        tag="div"
      >
        <div class="product_type_description">待验收</div>
      </router-link>
      <router-link
        to='/receipt_chushi/completed/'
        tag="div"
      >
        <div class="product_type_description">已完成</div>
      </router-link>
      <router-link
        to='/receipt_chushi/disqualified/'
        tag="div"
      >
        <div class="product_type_description">未通过</div>
      </router-link>
    </div>
    <router-view></router-view>
    <div class="bottom">
      <div class="button-group">
        <button class="button1" style="border-right: 1px solid grey" @click="toHome()">
          <div class="home1">
            <i class="el-icon-s-home"></i>
            <div class="content">首页</div>
          </div>
        </button>

        <button class="button1 disabled">
          <div class="home">
            <i class="el-icon-document-copy"></i>
            <div class="content">订单</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.waitDatas);
  },
  methods: {
    // handleClick(row) {
    //   this.$router.push("/home_yanshou/list");
    //   console.log(row);
    // },
    toHome(){
      this.$router.push("/home_chushi");
    }
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
      ],
    };
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
    auditDatas: function () {
      let auditList = [];
      this.allDatas.forEach(function (item, index, array) {
        if (item.status === "待审核") {
          auditList.push(item);
        }
      });
      return auditList;
    },
    receiveDatas: function () {
      let receivedList = [];
      this.allDatas.forEach(function (item, index, array) {
        if (item.status === "待验收") {
          receivedList.push(item);
        }
      });
      return receivedList;
    },
    completedDatas: function () {
      let completedList = [];
      this.allDatas.forEach(function (item, index, array) {
        if (item.status === "已完成") {
          completedList.push(item);
        }
      });
      return completedList;
    },
    disqualifiedDatas: function () {
      let disqualifiedList = [];
      this.allDatas.forEach(function (item, index, array) {
        if (item.status === "未通过") {
          disqualifiedList.push(item);
        }
      });
      return disqualifiedList;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.app {
  padding-top: 80px;
  background-color: #f5f6f7;
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
.product_types {
  border-bottom: 1px solid rgb(212, 212, 212);
  z-index: 2;
  margin: 0;
  padding: 0;
  width: 100%;
  top: 51px;
  right: 0px;
  height: 30px;
  line-height: 30px;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-around;
}
.product_type_description {
  font-size: 12px;
  -webkit-transform: scale(0.8);
  text-align: center;
}
.avatar {
  display: block;
  text-align: center;
}

.bottom {
  z-index: 2;
  width: 100%;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 60px;
  text-align: center;
  line-height: 50px;
}
.button-group {
  display: flex;
  justify-content: space-around;
}
.button1 {
  width: 50%;
  margin-top: 10px;
  background-color: Transparent;
  border-style: none;
  outline: none;
}
.router-link-exact-active {
  border-bottom: 2px solid red;
}
.button1 .home {
  color: coral;
}
.home1:hover {
  color: coral;
}
</style>