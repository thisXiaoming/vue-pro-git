<template>
    <tag :tagType="type" v-on:change="active">{{tagMessage}}</tag>
</template>

<script>
import Tag from "../../components/tag/tag.vue"
import { mapGetters } from 'vuex';
export default {
    components: {
        Tag
    },
    data() {
        return {
           type: "normal" 
        }
    },
    computed: {
        ...mapGetters({
            tagMessage: 'tagMessage',
        }),
    },
    methods: {
        active: function() {
            if (this.type == 'normal') {
                this.type = 'active'  
                this.$store.dispatch('setTagMessage', 'selected')                              
            } else if (this.type == "active") {
                this.type = 'normal'
                this.$store.dispatch('setTagMessage', 'hello')                
            }
            // this.$emit('change')
        }
    }
}
</script>
