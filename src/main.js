import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import store from './store'
import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)

const router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/dashboard', component: Dashboard},
        {path : '/signin', component: Signin},
        {path: '/signup', component: Signup}
        ]
})


firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        store.dispatch('signIn', user)
        router.push('/dashboard')
    }else{
       router.replace('/signin')
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h=> h(App)
})