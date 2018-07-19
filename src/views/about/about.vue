<template>
    <div @click="getData">
        注意注意
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'About',
        methods: {
            getData: function() {
                debugger;
                var root = 'http://jsonplaceholder.typicode.com';
                axios.Get({
                    url: root + '/posts/1',
                    // data: params
                }).then(function (data) {
                    debugger;
                    
                })
            }
            
        }
    }
</script>

