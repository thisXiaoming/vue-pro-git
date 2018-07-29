<template>
    <div class="tag" :class="calTagClass" v-on:click="changeState()">
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
    props: {
        tagType: {
            type: String,
            default: "normal"
        }
    },
    computed: {
        calTagClass() {
            return {
                "tag-close-cli": this.closable,
                "tag-normal": this.tagType == "normal" ? true : false,
                "tag-small": this.tagType == "small" ? true : false,
                "tag-disable": this.tagType == "disable" ? true : false,
                "tag-active": this.tagType == "active" ? true : false
            }
        }
    },
    methods: {
        close() {
            this.closable = true;
        },
        changeState() {
            console.log("222222: ",this.tagType)            
            this.$emit('change')
            // this.tagType = "active"
        }
    }
}
</script>

<style lang="less" scoped>
    @import "./tag.less";
</style>
