<template>
  <div>
      <div>
        <h1>{{message}}</h1>
        <p @click="seeAnswer()">ASK: {{ask}}</p>
        <p v-if="able">ANSWER: {{answer}}</p>
        <p>Do you agree with this statement? Input your answer:</p>
        <input v-model="answer"></input>
      </div>
      <div class="ex-text">
          <h1>解释：</h1>
          <p>对于 vue的this；this.seeAnswer方法；el；data；message；answer</p>
          <p>
              beforeCreate: 此状态之前，所有都是undefined，是vue的实例初始化，计算属性还没有被绑定，例如data属性和绑定的事件；
          </p>
          <p>
              created：这时候,vue的实例已经初始化创建完成，属性已经被绑定了，此时data属性和绑定的事件都可以获取到，但是DOM还没有被渲染，el还是undefined；
          </p>
          <p>beforeMount： 模板编译/挂载之前，这时候打印出来的el仍然是undefined，其他属性仍然有值</p>
          <p>mounted： 模板编译/挂载之后，这时候el模板已经被渲染完成，data的属性值也已经在模板中生效</p>
          <p>beforeUpdate： 组件更新状态之前，通过打印vue绑定元素的innerHtml可以看出，beforeUpdate状态的时候，answer部分还是隐藏的。</p>
          <p>updated: 组件更新状态之后，通过打印vue绑定元素的innerHtml可以看出，updated状态的时候，answer部分已经有展示了。ps:如果只打印$el结果是一样的，看不出变化，是因为打印出来的$el对象都已经是变化后的对象了</p>
          <p>
              beforeDestroy： 确认删除组件吗？ destroyed ：组件已被删除
          </p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'life is so beautiful, why are you going to die ?',
            ask: 'Is life always this hard, or is it just when you are a kid ?  Click this to see the answer.',
            answer: 'Always like this.',
            able: false
        }
    },
    beforeCreate() {
        console.group("beforeCreate 创建前 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this);
        console.log("this.seeAnswer:  ", this.seeAnswer);                        
        console.log("el:  ", this.$el);
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    created() {
        console.group("created 创建完毕 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this);   
        console.log("this.seeAnswer:  ", this.seeAnswer);              
        console.log("el:  ", this.$el);      
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    beforeMount() {
        console.group("beforeMount 挂载前 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this); 
        console.log("this.seeAnswer:  ", this.seeAnswer);                
        console.log("el:  ", this.$el);  
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    mounted() {
        console.group("mounted 挂载后 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this); 
        console.log("this.seeAnswer:  ", this.seeAnswer);                
        console.log("el:  ", this.$el);
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    beforeUpdate() {
        console.group("beforeUpdate 状态更新前 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this);   
        console.log("this.seeAnswer:  ", this.seeAnswer);              
        console.log("el:  ", this.$el);
        console.log("this.$el.innerHTML: ",this.$el.innerHTML)
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    updated() {
        console.group("updated 状态更新后 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this);  
        console.log("this.seeAnswer:  ", this.seeAnswer);               
        console.log("el:  ", this.$el);
        console.log("this.$el.innerHTML: ",this.$el.innerHTML)        
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    beforeDestroy() {
        console.group("beforeDestroy 销毁前状态 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this);  
        console.log("this.seeAnswer:  ", this.seeAnswer);               
        console.log("el:  ", this.$el);
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    destroyed() {
        console.group("beforeDestroy 销毁前状态 el data message answer 的状态 ———————————————— ")
        console.log("this:  ", this); 
        console.log("this.seeAnswer:  ", this.seeAnswer);                
        console.log("el:  ", this.$el);
        console.log("data:  ", this.$data);
        console.log("message:  ", this.message);
        console.log("answer:  ", this.answer);
    },
    methods: {
        seeAnswer() {
            this.able = true;
        }
    }
}
</script>

<style lang="less" scoped>
    input {
        width: 500px;
        height: 50px;
        color: #2c3e50;
        font-size: 16px;/*!px*/
        border: 1px solid #2c3e50;
        padding: 5px;
    }
    .ex-text {
        margin: 20px;
        text-align: left;
    }
</style>




