<template>
    <div class="tag tag-normal" :class="{'tag-close-cli': closable}">
        <slot></slot>
        <div class="tag-line"></div>
        <div class="tag-close" @click="close()"><span>X</span></div>
    </div>

   
</template>

<script>
export default {
    name: 'Tag',
    data() {
        return {
            closable: false 
        }
    },
    methods: {
        close() {
            this.closable = true;
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./tag.less";
</style>
