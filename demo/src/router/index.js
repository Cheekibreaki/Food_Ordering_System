import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '../components/Login.vue'
//import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: 'login'},
  {
    // 登录界面
    path: '/login',
    name:'login',
    component:()=>import('../components/Login.vue')
  },
  {
    path: '/register',
    name:'register',
    component:()=>import('../components/Register.vue')
  },
  {
    // 验收首页
    path: '/home_yanshou',
    name:'home_yanshou',
    component:()=>import('../components/Yanshou/Home.vue')
  },
  {
    //验收员验收界面
    path:'/home_yanshou/list',
    name:'home_yanshou_list',
    component:()=>import('../components/Yanshou/List.vue'),
  },
  {
    //不合格提示
    path:'/home_yanshou/table',
    name:'home_yanshou_table',
    component:()=>import('../components/Yanshou/Table.vue'),
  },
  {
    //已验收订单
    path:'/home_yanshou/table/success',
    name:'home_yanshou_table_success',
    component:()=>import('../components/Yanshou/Success.vue'),
  },
  {
    //订单未通过
    path:'/home_yanshou/table/fail',
    name:'home_yanshou_table_fail',
    component:()=>import('../components/Yanshou/Fail.vue'),
  },
  {
    //首页菜品采购
    path: '/home_chushi',
    name:'home_chushi',
    component:()=>import('../components/Chushi/Home.vue'),
    // redirect:'/home_chushi/vegetable',
      //嵌套路由
    // children:[
    //   {
    //     path:'vegetable',
    //     component:()=> import('../components/Chushi/Home/Vegetable.vue'),
    //   },
    //   {
    //     path:'meat',
    //     component:()=> import('../components/Chushi/Home/Meat.vue'),
    //   },  
    //   {
    //     path:'seafood',
    //     component:()=> import('../components/Chushi/Home/Seafood.vue'),
    //   },
    //   {
    //     path:'fruit',
    //     component:()=> import('../components/Chushi/Home/Fruit.vue'),
    //   },
    //   {
    //     path:'oil_spices',
    //     component:()=> import('../components/Chushi/Home/Oil_spices.vue'),
    //   },
    //   {
    //     path:'beverages',
    //     component:()=> import('../components/Chushi/Home/Beverages.vue'),
    //   },
    // ]
  },
  {
    //确认下单
    path: '/home_chushi/order',
    name:'order',
    component:()=>import('../components/Chushi/Order.vue'),
  },
  {
    //生成订单
    path: '/home_chushi/order_confirmed',
    name:'order_confirmed',
    component:()=>import('../components/Chushi/Order_confirmed.vue'),
  },
  {
    //订单详情
    path: '/receipt_chushi/receipt_detail',
    name:'receipt_detail',
    component:()=>import('../components/Chushi/Receipt_detail.vue'),
  },  
  {
    //订单
    path: '/receipt_chushi',
    name:'receipt_chushi',
    redirect : '/receipt_chushi/all/',
    component:()=>import('../components/Chushi/Receipt.vue'),
    children:[
      {
        // 全部订单
        path:'/receipt_chushi/all/',
        name:"All",
        component:()=> import('../components/Chushi/Receipt/All.vue'),
      },
      {
        // 待接单
        path:'/receipt_chushi/waitlist',
        name:"WaitList",
        component:()=> import('../components/Chushi/Receipt/Waitlist.vue'),
      },  
      {
        // 待审核
        path:'/receipt_chushi/auditlist/',
        name:'AuditList',
        component:()=> import('../components/Chushi/Receipt/Auditlist.vue'),
      },
      {
        // 待验收
        path:'/receipt_chushi/receivelist/',
        name:'ReceiveList',
        component:()=> import('../components/Chushi/Receipt/Receivelist.vue'),
      },
      {
        // 已完成
        path:'/receipt_chushi/completed/',
        name:'Completed',
        component:()=> import('../components/Chushi/Receipt/Completed.vue'),
      },
      {
        // 未通过
        path:'/receipt_chushi/disqualified/',
        name:'Disqualified',
        component:()=> import('../components/Chushi/Receipt/Disqualified.vue'),
      },
    ]
  },
  {
    path: '/home_gongyingshang',
    name:'home_gongyingshang',
    component:()=>import('../components/Gongying/Home.vue')
  },
  {
    path: '/home_houqin',
    name:'home_houqin',
    component:()=>import('../components/Houqin/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login'||to.path === '/register') {
//     next();
//   } else if(to.path === '/home'){
//     let token = localStorage.getItem('Authorization');
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });


export default router
