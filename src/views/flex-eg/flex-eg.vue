<template>
    <div @click="getData">
        <div class="container">
            <div class="top-container">
                <div>可直接携带身份证乘车</div>
            </div>
            <div class="middle-container">
                <div class="train-num">G112</div>
                <div class="dep-info">
                    <div class="dep-station">

                        北京西

                    </div>
                    <div class="dep-time">08:30</div>
                </div>
                <div class="cross-info">
                    <div class="cross-img"></div>
                    <div class="cross-arrow"></div>
                    <div class="cross-time">4小时8分钟</div>
                </div>
                <div class="arr-info">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'FlexEg',
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

