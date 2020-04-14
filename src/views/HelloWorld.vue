<template>
  <div class="hello">
    <h3>Welcome to My Vue Issues</h3>
    <ul class="chapter-container">
      <li>
        <router-link :to="{name:'VueRouterPage'}">第一章  vue-router的简单配置例</router-link>
      </li>
      <li>
        <router-link :to="{name:'flexEg'}">第二章  flex布局--适用手机端</router-link>
      </li>
      <li>
        <router-link :to="{name: 'tag'}">第三章 vue基本语法与less使用例加之vuex的使用</router-link>
      </li>
      <li>
        <router-link :to="{name: 'hook'}">第四章 vue生命周期钩子加实例详解</router-link>
      </li>
      <li>
        <router-link :to="{name: 'slider'}">第五章 UI组件--含有slider滑动侧边栏的按钮</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello {
    font-size: 16px;/*!px*/
  }
  h3 {
    text-align: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
  .chapter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      display: inline-block;
      margin: 5px 10px;
    }
  }
</style>
