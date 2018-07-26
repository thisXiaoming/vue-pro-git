<template>
  <div class="hello">
    <h1>welcome to My Vue Issues</h1>
    <h2></h2>
    <ul class="chapter-container">
      <li>
        <router-link :to="{name:'VueRouterPage'}">第一章  vue-router的简单配置例</router-link>
      </li>
      <li>
        <router-link :to="{name:'flexEg'}">第二章  flex布局例</router-link>
      </li>
      <li>
        <router-link :to="{name: 'tag'}">第三章 vue基本语法与less使用例</router-link>
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
h1, h2 {
  font-weight: normal;
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
