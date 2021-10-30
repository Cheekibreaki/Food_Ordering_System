<template>
  <div class="cart">
    <ul>
      <li v-for="data in newDatas2" :key="data.id">
        <div class="box">
          <el-avatar
            icon="el-icon-user-solid"
            :size="50"
            style="margin-top: 20px; margin-left:2%"
          ></el-avatar>
          <div class="type_name">
              {{data.name}}
              {{data.unit}}
              g
          </div>
           <el-input-number v-model="data.amount" :min="0" :max="99" label="描述文字" style="z-index:1;margin-top:26px;margin-left:2%"></el-input-number>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  model:{
    prop:'newDatas',
    event:'parent_event'
  },
  props:{
    newDatas:Array,
  },
  computed:{
    newDatas2:function(){
       return this.newDatas;
    }
  },
  watch:{
    newDatas:{
      // immediate: true, 
      handler(newVal,oldVal){
        console.log("changed");
        this.$emit('parent_event',newVal);
      },
       deep: true,
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
  padding: 0;
  margin: 0;
}
.box {
  z-index: 0;
  display:flex;
  justify-content: space-around;
  width: 95%;
  margin: 0 auto;
  height: 96px;
  line-height: 96px;
  background-color: white;
  border-radius: 13px;
  margin-bottom:10px;
}
.type_name{
    font-weight: bold;
    margin-right: 10%;
}

li:last-of-type {
  padding-bottom: 110px;
}
</style>