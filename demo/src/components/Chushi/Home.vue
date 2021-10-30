<template>
<!-- 目前问题：子good component 可以通过v-model和props取得首页的值,但是在子good改变值无法返回到home中 -->
  <!-- 首页-菜品采购 -->
  <!-- 头部 -->
  <div class="app">
    <div class="header">
      <i
        class="el-icon-arrow-left"
        style="margin-top: 15px; margin-left: 10px"
      ></i>
      菜品采购
      <el-avatar
        icon="el-icon-user-solid"
        :size="30"
        style="margin-top: 10px"
      ></el-avatar>
    </div>

  <!-- 种类栏 -->
    <ul class="product_types">
      <li v-for="data in catagory_datas" :key="data.id">
        <div
          class="product_type_tab"
          :class="{ product_type_tab_active: currentTab === data.id }"
          @click="currentTab = data.id"
        >
          <div class="avatar">
            <el-avatar
              icon="el-icon-user-solid"
              :size="30"
              style="margin-top: 10px"
            ></el-avatar>
          </div>
          <!-- 种类名称 -->
          <div class="product_type_description">{{ data.name }}</div>
        </div>
      </li>
    </ul>

  <!-- 商品栏 -->
    <keep-alive>
      <goods  v-model="currentGoods"></goods>
    </keep-alive>


    <!-- 确定按钮 -->
    <div class="confirm">
      <div class="confirm_button">
        <button @click="toOrder()">确定</button>
      </div>
    </div>

    <div class="bottom">
      <div class="button-group">
        <!-- 首页按钮，已disabled -->
        <button
          class="button1 disabled"
          style="color: coral; border-right: 1px solid grey"
        >
          <div class="home">
            <i class="el-icon-s-home"></i>
            <div class="content">首页</div>
          </div>
        </button>
        <!-- 订单按钮 -->
        <button class="button1" @click="toReceipt()">
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
import goods from "./Goods.vue";

export default {
  computed: {
    currentGoods:{
      get(){
        return this.goods_byCatagory(this.currentTab);
      },
      set(newName){
        return newName;
      }
    }
  },
  watch: {
    goods_datas: {
      // 数据刷新目前失败
      handler(newVal, oldVal) {
      
        console.log(newVal);
      },
    },
  },
  components: {
    goods,
  },
  methods: {
    filter_goods(catagory_Num) {
      return function (item) {
        if (item.catagory === catagory_Num) {
          return true;
        } else {
          return false;
        }
      };
    },
    goods_byCatagory(catagory_Num) {
      return this.goods_datas.filter(this.filter_goods(catagory_Num));
    },

    toOrder() {
      this.$router.push({
        name:"order",
        query:{
          newgoodsDatas:this.goods_datas,
        }
      });
    },
    toReceipt() {
      this.$router.push("/receipt_chushi");
    },
  },
  data() {
    return {
      catagory_datas: [
        {
          id: 1,
          name: "蔬菜豆制品",
          orderNum: 1,
        },
        {
          id: 2,
          name: "肉禽蛋",
          orderNum: 2,
        },
        {
          id: 3,
          name: "海鲜水产",
          orderNum: 3,
        },
        {
          id: 4,
          name: "水果",
          orderNum: 4,
        },
        {
          id: 5,
          name: "粮油调味",
          orderNum: 5,
        },
        {
          id: 6,
          name: "酒水饮料",
          orderNum: 6,
        },
      ],
      goods_datas: [
        {
          id: 1,
          name: "卷心菜",
          catagory: 1,
          price: 0,
          goodsDesc: "",
          goodNum: "",
          unit: "500",
          amount: 0,
        },
        {
          id: 2,
          name: "胡萝卜",
          catagory: 1,
          price: 0,
          goodsDesc: "",
          goodNum: "",
          unit: "500",
          amount: 0,
        },
        {
          id: 3,
          name: "鱼肉",
          catagory: 2,
          price: 0,
          goodsDesc: "",
          goodNum: "",
          unit: "500",
          amount: 0,
        },
        {
          id: 4,
          name: "鸡肉",
          catagory: 2,
          price: 0,
          goodsDesc: "",
          goodNum: "",
          unit: "500",
          amount: 0,
        },
        {
          id: 5,
          name: "鱼",
          catagory: 3,
          price: 0,
          goodsDesc: "",
          goodNum: "",
          unit: "500",
          amount: 0,
        },
        {
          id: 6,
          name: "香蕉",
          catagory: 4,
          price: 0,
          goodsDesc: "",
          goodNum: "",
          unit: "500",
          amount: 0,
        },
      ],

      currentTab: 1,
      VegetableData: "",
      MeatData: "",
      SeafoodData: "",
      FruitData: "",
      Oil_spicesData: "",
      BeveragesData: "",
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
  margin-top: 13vh;
  margin-bottom: 2vh;
  padding-top: 44px;
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
.li {
  height: 90px;
}
.product_types {
  z-index: 2;
  margin: 0;
  padding: 0;
  width: 100%;
  top: 51px;
  right: 0px;
  height: 78px;
  background-color: white;
  position: fixed;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
/* li{
  list-style-type: none;
} */
.product_type_description {
  font-size: 12px;
  -webkit-transform: scale(0.8);
  text-align: center;
}
.avatar {
  display: block;
  text-align: center;
}
.product_type_tab {
  padding-bottom: 15px;
}
.confirm_button {
  z-index: 2;
  position: fixed;
  bottom: 60px;
  right: 0px;
  line-height: 60px;
  width: 100%;
  height: 60px;
  background-color: white;
  border-top: 1px solid #e0e0e0;
}
.confirm_button button {
  width: 25%;
  margin-left: 70%;
  height: 40px;
  font-size: 15px;
  border: 0px solid transparent;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  background-image: linear-gradient(to right, #eb6038, #ea4237);
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
.product_type_tab_active {
  border-bottom: 2px solid red;
}
.button1 .home:hover {
  color: coral;
}
</style>