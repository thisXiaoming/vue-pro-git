<template>
    <tag :tagType="type" v-on:change="active">文案文案</tag>
</template>

<script>
import Tag from "../../components/tag/tag.vue"
export default {
    components: {
        Tag
    },
    data() {
        return {
           type: "normal" 
        }
    },
    methods: {
        active: function() {
            console.log("aaaaaaaa")
            if (this.type == 'normal') {
                this.type = 'active'                
            } else if (this.type == "active") {
                this.type = 'normal'
            }
            // this.$emit('change')
        }
    }
}
</script>
