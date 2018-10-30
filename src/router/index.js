import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Bgimage from '@/components/Home/Bgimage'
import User from '@/components/User/User'
import Login from '@/components/User/Login'
import Setting from '@/components/User/Setting'
import Readme from '@/components/User/Readme'
import Info from '@/components/User/Info'
import SongPlay from '@/components/SongPlay/SongPlay'
import Featured from '@/components/Featured/Featured'
import Like from '@/components/Like/Like'
import LikeSongPlay from '@/components/Like/LikeSongPlay'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/bgimage',
    component: Bgimage
  }, {
    path: '/user',
    component: User
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/setting',
    component: Setting
  }, {
    path: '/readme',
    component: Readme
  }, {
    path: '/info',
    component: Info
  }, {
    path: '/songplay',
    component: SongPlay
  }, {
    path: '/featured',
    component: Featured
  }, {
    path: '/like',
    component: Like
  }, {
    path: '/likesongplay',
    component: LikeSongPlay
  }]
})
