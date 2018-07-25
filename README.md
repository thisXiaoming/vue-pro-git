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
1. 在index.html中加入适配的代码文件，已经经过压缩，这个时候已经可以通过代码控制根部font-size的变化，并做到根据屏幕适配，这一步可以在css中通过设置元素大小为（元素px大小/根font-size）rem,来进行适配，但是这样比较麻烦，每次都要计算，而且字体大小一般不用转化，所以使用postcss-px2rem可以解决这一问题，直接设置元素大小为px值，通过屏幕适配编译成rem，注意，假如设计稿字体大小为42px, 代码中要写`font-size:12px;/*!px*/`
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
