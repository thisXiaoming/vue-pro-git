# vue-pro-git

> my vue pro

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 过程中涉及到的问题
### 使用less步骤
1. 在build\webpack.base.conf.js加入less-loader的配置
```
    {
        test: /\.less$/,
        use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'less-loader'
        ]
    }
```
2. 安装less-loader
```
npm install less less-loader --save-dev
```
3. 在页面中使用
```
<style lang="less" scoped>
    ul {
        ....
        li {
            ....
        }
    }
</style>
```
### 谷歌浏览器不支持12px以下的文字大小
1. 做到这里发现谷歌浏览器不支持12px以下的文字大小，目前看到好多的论坛都是用transform-scale处理的，但这个不是我想要的方式，初步还是想订用rem，目前正在探索中。。。。。。

### 文件中加入rem适配
1. 在index.html中加入适配的代码文件，已经经过压缩，这个时候已经可以通过代码控制根部font-size的变化，并做到根据屏幕适配，这一步可以在css中通过设置元素大小为（元素px大小/根font-size）rem,来进行适配，但是这样比较麻烦，每次都要计算，而且字体大小一般不用转化，所以使用postcss-px2rem可以解决这一问题，直接设置元素大小为px值，通过屏幕适配编译成rem，注意，假如设计稿字体大小为42px, 代码中要写`font-size:24px;/*!px*/`
2. 安装postcss-px2rem: npm install postcss-px2rem --save
3. 配置postcss-px2rem，在vue-loader.conf.js中加入
```
postcss: [
require('autoprefixer')({
    browsers: ['last 7 versions']
}),
require('postcss-px2rem')({
    remUnit: 75,
    baseDpr: 1,
    forcePxComment: '!px',
    keepComment: '!no'
})
]
```
原理解释： [rem原理](https://www.cnblogs.com/this-xiaoming/p/9056607.html)

配置参考: [postcss-px2rem安装配置](https://www.npmjs.com/package/postcss-px2rem)

###第三章的vue中
此章节涉及了vue的主要语法用法，这是一个tag的组件，可以设置tag的标签样式，通过设置tag-eg.vue中的type可以随时更改component中的tag组件的样式，包含 normal, disabled, small, active四种样式；通过设置tag-eg.vue中的change事件来控制tag组件的点击事件；
并且加入了vuex，来控制tag标签文案的变化。

####配置vuex并使用
1. 安装vuex: npm install --save-dev vuex
2. 在src目录下创建store文件夹
3. store文件夹下文件 index.js,state.js,getters.js,mutations.js,actions.js

index.js文件中需要引入vue 和 vuex,这个文件是主要的vue文件配置
```
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './acions.js';

Vue.use(Vuex);
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
}) 

export default store;
```

4. 在src文件夹下的入口js文件main.js中引入输出的store
```
import store from './store/index.js'
```
并在Vue对象中加入store的配置
```
new Vue({
  el: '#app',
  router,
  store,//加入sotre的配置
  render: h => h(App)
})
```
5.  解释：
在state.js中设置状态值tagMessage;
在constants.js中设置状态值的常量；
在mutations.js中设置函数来为状态值的常量赋值，从而改变状态值，但是此时state的状态值还没有改变；
acions设置函数，使用commit来提交mutations中状态值的改变，但是此时state的状态值还是没有改变，需要通过$dispatch来分配actions；
getters.js中返回了状态值，在vue文件中通过引入mapGetters使用this来调用此state的状态值；
可以在vue文件中通过this.$store.dispatch来分配actions，从而完成state的commit提交，进一步进行状态值state的改变。


