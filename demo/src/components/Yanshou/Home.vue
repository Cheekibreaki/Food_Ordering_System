<template>
  <div class="app">

    <div class="header">
        <i class="el-icon-arrow-left"  style="margin-top:15px; margin-left:10px"></i>
        验收菜品
        <el-avatar icon="el-icon-user-solid" :size="30" style="margin-top:10px;"></el-avatar>
    </div>
    
    <ul>
        <li v-for="data in datas" :key="data.id">
            <div class="item" @click="handleClick">
                <div class="icon"><el-avatar icon="el-icon-user-solid" :size="30"></el-avatar></div>
                <div class="description">
                    <div class="type">{{data.type}}</div>
                    <div class="time">下单时间：{{data.time}}</div>
                    <div class="price">总价:&yen;{{data.price}}</div>
                </div>
                <div class="status">{{data.status}}</div>
            </div>
        </li>
    </ul>
    <div class="bottom">
      <div class="button-group">
        <button
          class="button1 disabled"
          style="color: coral; border-right: 1px solid grey"
        >
          <div class="home">
            <i class="el-icon-s-home"></i>
            <div class="content">首页</div>
          </div>
        </button>

        <button class="button1">
          <div class="home">
            <i class="el-icon-document-copy"></i>
            <div class="content">订单</div>
          </div>
        </button>

      </div>
    </div>

  </div>
  <!-- <div id="app">
    
        <el-row>
    
        <div class="grid-content">
            <h1 >验收菜品</h1>
            <el-col :span="22" :offset="1">
    
                
                <div class="clickable">
                <el-table 
                    :data="tableData"  
                    height="450px" 
                    style="width: 100%;font-size: 10px " 
                    
                    
                    @cell-click="handleClick"
                >
                    <template slot="empty">
                        <el-empty description="暂无订单"></el-empty>
                    </template>
    
                    <el-table-column prop="type" label="菜品种类" min-width="25%">
    
                    </el-table-column>
    
                    <el-table-column prop="time" label="下单时间" min-width="20%">
    
                    </el-table-column>
    
                    <el-table-column prop="price" label="总价" min-width="20%">
    
                    </el-table-column>

                    <el-table-column prop="status" label="状态" min-width="20%">
                        
                    </el-table-column> 

                    
                </el-table>
                </div>
                <el-row justify="center" type="flex">
                   <el-col :span="20" >
                                <div class="button-group">
                                    <button class="button1 disabled" style="color:coral; border-right:1px solid grey;">
                                        <div class="home">
                                            <i class="el-icon-s-home"></i>
                                            <div class="content">首页</div>
                                        </div>
                                    </button>
                                    <button class="button1">
                                        <div class="home">
                                            <i class="el-icon-document-copy"></i>
                                            <div class="content">订单</div>
                                        </div>
                                    </button>
                                </div>
                   </el-col>
                </el-row>

                
    
    
    
    
    
            </el-col>
    
        </div>
        </el-row>
    <router-view></router-view>
    </div> -->
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      this.$router.push("/home_yanshou/list");
      console.log(row);
    },
  },
  data() {
    return {
      datas: [
        {
          id:0,
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待验收",
        },{
          type: "肉禽蛋/海鲜水产",
          time: "2021-08-21 11:30",
          price: "228.78",
          status: "待验收",
        },
        //{
        //   type: "肉禽蛋/海鲜水产",
        //   time: "2021-08-21 11:30",
        //   price: "228.78",
        //   status: "待验收",
        // },{
        //   type: "肉禽蛋/海鲜水产",
        //   time: "2021-08-21 11:30",
        //   price: "228.78",
        //   status: "待验收",
        // },{
        //   type: "肉禽蛋/海鲜水产",
        //   time: "2021-08-21 11:30",
        //   price: "228.78",
        //   status: "待验收",
        // },{
        //   type: "肉禽蛋/海鲜水产",
        //   time: "2021-08-21 11:30",
        //   price: "228.78",
        //   status: "待验收",
        // },{
        //   type: "肉禽蛋/海鲜水产",
        //   time: "2021-08-21 11:30",
        //   price: "228.78",
        //   status: "待验收",
        // },{
        //   type: "肉禽蛋/海鲜水产",
        //   time: "2021-08-21 11:30",
        //   price: "228.78",
        //   status: "待验收",
        // },
      ],
    };
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
.bottom{
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 60px;
  text-align: center;
  line-height: 50px;
}
.button-group{
    display: flex;
    justify-content: space-around;
}
.button1{
    width:50% ;
    margin-top:10px;
     background-color: Transparent; 
    border-style: none;     
    outline: none;    
}
li{
    list-style:none;
}
.item {
    display: flex;
    justify-content: space-around;
    height:96px;
    background-color:rgb(255, 255, 255);
    border-bottom: 1px solid #e0e0e0;
}
.icon{
    width:13%;
    padding:25px 0px 0px 4%;
}
.description{
    width:60%;
}
.status{
    width:20%;
}
.type{
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
    margin-left:5px;
}
.time {
    font-size:12px;
    color:rgb(75, 75, 75)
}
.price{
    font-size:12px;
    color:rgb(75, 75, 75)
}
.status{
    line-height: 96px;
    text-align: center;
    font-size: 14px;
    color: rgb(28, 136, 131);
}
li>.item:hover{
    background-color:rgb(196, 196, 196);
}

</style>