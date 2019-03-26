import Vue from 'vue' //导入vue模块

import Vuex from 'vuex' //导入vuex模块

Vue.use(Vuex) //注册vuex中间件

export default new Vuex.Store({     //暴露vuex
    state : {
        msg:1    //定义公共数据(vue全局共享)
    },
    mutations: {
        add(state) {    //定义计算计算公共数据的方法
            state.msg++   
        }
    },
    getters:{
        set(state){
            reurn xxx
        }
    }
    
})

// 在main.js中通过该方法引入
import store from './(vuex的路径)'

// 在main.js中挂在store 这个vuex 


//在全局组件中可以通过如下方法访问公共数据

this.$store.state.msg  

// 在全局组件中通过如下方法调用vuex方法，计算公共数据

this.$store.commit('add')


// getters内部的方法,可以直接通过如下方法调用得到返回值
this.$store.getters.set