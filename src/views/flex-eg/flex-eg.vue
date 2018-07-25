<template>
    <div @click="getData">
        <div class="container">
            <div class="top-container">
                <div class="top-remind">可直接携带身份证乘车</div>
            </div>
            <div class="middle-container">
                <div class="train-num"><span>G112</span></div>
                <div class="dep-info">
                    <div class="dep-station">
                        <div class="dep-type"><span>始</span></div>
                        <div class="dep-station">北京西</div>     
                    </div>
                    <div class="dep-time">08:30</div>
                </div>
                <div class="cross-info">
                    <div class="cross-img"></div>
                    <div class="cross-arrow"></div>
                    <div class="cross-time">4小时8分钟</div>
                </div>
                <div class="arr-info">
                    <div class="arr-station">
                        <div class="arr-type">过</div>
                        <div class="arr-station">西安</div>     
                    </div>
                    <div class="arr-time">18:30</div>
                </div>
            </div>
            <div class="bottom-container">
                <div class="seat-type">商务</div>
                <div class="seat-type">一等</div>
                <div class="seat-type">二等</div>
                <div class="seat-type">软卧</div>
                <div class="seat-type">硬卧</div> 
                <div class="seat-type">硬座</div>
                <div class="seat-type">无座</div>                                                                                                           
            </div>
            <div class="remind-info">暂售至08月17号</div>
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

<style lang="less" scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 10px;
        padding: 10px;
        border: #fff;
        border-radius: 10px;
        background-color: #ddd;
    }

    .middle-container, .bottom-container{
        display: flex;
    }

    .top-container {
        .top-remind {
            margin-bottom: 5px;
            font-size: 12px;
            color: #ff6633;
        }
    }

    .middle-container {
        align-items: flex-start;
        .train-num {
            // line-height: 1.4;
            margin-right: 10px;
            span {
                vertical-align: middle;
            }
        }
        .dep-info {
            .dep-station {
                display: flex; 
                .dep-type {
                    width: 16px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    border-radius: 3px;
                    background-color: #22ba66;
                    span {
                        font-size: 12px;
                        color: #fff;
                    }
                } 
                .dep-station {
                    font-size: 12px;
                }
            }
        }

        .arr-info {
            .arr-station {
                display: flex;
            }
        }
    }
</style>


