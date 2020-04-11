import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'



Vue.use(Router)

let routerPath = '/myFirstCli'
const VueRouterPage = resolve => require(['../views/vue-router-eg/vue-router-eg.vue'], resolve)
const Book1 = resolve => require(['../views/vue-router-eg/book1/book1.vue'], resolve)
const Book2 = resolve => require(['../views/vue-router-eg/book2/book2.vue'], resolve)
const flexEg = resolve => require(['../views/flex-eg/flex-eg.vue'], resolve)
const tag = resolve => require(['../views/tag-eg/tag-eg.vue'], resolve)
const lifecycleHook = resolve => require(['../views/lifecycle-hook/hook-eg.vue'], resolve)
const slider = resolve => require(['../views/slider-eg/slider-eg.vue'],resolve)

export default new Router({
  mode: 'history',//使用history模式，去掉url中自带的#号。
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-router-eg',
      component: VueRouterPage,
      name: 'VueRouterPage',
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
      path: '/flex-eg',
      component: flexEg,
      name: 'flexEg'
    },
    {
      path: '/tag-eg',
      component: tag,
      name: 'tag'
    },
    {
      path: '/lifecycle-hook',
      component: lifecycleHook,
      name: 'hook'
    },
    {
      path: '/slider-eg',
      component: slider,
      name: 'slider'
    }
  ]
})
