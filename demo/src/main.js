import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store/index.js';

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path !== ('/login')) {
    
    let token = window.localStorage.token;
    if (token === 'null' || token === '' || token === undefined){
        next({path: '/login'});
    }
  } else {
    next()
  }
  next();
  // if (to.matched.some(m => m.meta.requireAuth)) {    // 需要登录
  //   // if(window.localStorage.token && window.localStorage.isLogin === '1'){
  //   //   next()
  //   // } 
  //    if (to.path !== '/login') {
  //     let token = window.localStorage.tokens;
  //     if (token === 'null' || token === '' || token === undefined){
  //         next({path: '/login'})
  //         Toast({ message: '检测到您还未登录,请登录后操作！', duration: 1500 })
  //     }
  //   } else {
  //     next()
  //   }
  // } else {   // 不需要登录
  //   next()
  // }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
