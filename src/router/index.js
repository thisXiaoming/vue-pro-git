import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'



Vue.use(Router)

let routerPath = '/myFirstCli'
const Home = resolve => require(['../views/home/home.vue'], resolve)
const Book1 = resolve => require(['../views/book1/book1.vue'], resolve)
const Book2 = resolve => require(['../views/book2/book2.vue'], resolve)
const About = resolve => require(['../views/about/about.vue'], resolve)

export default new Router({
  mode: 'history',//使用history模式，去掉url中自带的井号。
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: Home,
      name: 'Home',
      children: [
        {
          name: 'Book1',
          path: routerPath + '/book1',
          component: Book1
        },
        {
          name: 'Book2',
          path: routerPath + '/book2',
          component: Book2
        }
      ]
    },
    {
      path: '/about',
      component: About,
      name: 'About'
    }
  ]
})
