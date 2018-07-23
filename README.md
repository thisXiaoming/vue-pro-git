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

##过程中涉及到的问题
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
