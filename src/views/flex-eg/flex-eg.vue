<template>
    <div @click="getData">
        <div class="container">
            <div class="top-container">
                <div class="top-remind">可直接携带身份证乘车</div>
            </div>
            <div class="middle-container">
                <div class="train-num"><span>G112</span></div>
                <div class="trip-info">
                    <div class="trip-station">
                        <div class="trip-type"><span>始</span></div>
                        <div class="trip-station-name">北京西</div>     
                    </div>
                    <div class="trip-time">08:30</div>
                </div>
                <div class="cross-info">
                    <div class="cross-img"></div>
                    <div class="cross-arrow">
                        <i></i><i></i>
                    </div>
                    <div class="cross-time">4小时8分钟</div>
                </div>
                <div class="trip-info">
                    <div class="trip-station">
                        <div class="trip-type"><span>过</span></div>
                        <div class="trip-station-name">西安</div>     
                    </div>
                    <div class="trip-time">18:30</div>
                </div>
            </div>
            <div class="bottom-container">
                <div class="seat-type">商务: 142张</div>
                <div class="seat-type">一等: 142张</div>
                <div class="seat-type">二等: 142张</div>
                <div class="seat-type">软卧: 142张</div>
                <div class="seat-type">硬卧: 142张</div> 
                <div class="seat-type">硬座: 142张</div>
                <div class="seat-type">无座: 142张</div>                                                                                                           
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

    .top-container {
        .top-remind {
            margin-bottom: 5px;
            font-size: 12px;/*!px*/
            color: #ff6633;
        }
    }

    .middle-container {
        display: flex;
        align-items: center;
        margin: 10px 20px;
        .train-num {
            align-self: flex-start;
            // line-height: 1.4;
            margin-right: 20px;
            span {
                font-size: 20px;/*!px*/
                vertical-align: middle;
            }
        }
        .trip-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .trip-station {
                display: flex; 
                align-items: center;
                .trip-type {
                    width: 28px;
                    height: 28px;
                    line-height: 28px;
                    margin-right: 5px;
                    text-align: center;
                    border: 1px solid #22ba66;
                    border-radius: 3px;
                    background-color: #22ba66;
                    span {
                        font-size: 10px;/*!px*/
                        color: #fff;
                    }
                } 
                .trip-station-name {
                    font-size: 20px;/*!px*/
                }
            }
            .trip-time {
                margin-top: 10px;
                font-size: 16px;/*!px*/
            }
        }
        .cross-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
            margin: 0 20px;
            .cross-arrow {
                display: flex;
                position: relative;
                width: 100%;
                i {
                    display: block;
                    flex: 1;
                    border-bottom: thin solid #999;                  
                }
                i:last-child :after{
                    content: "";
                    display: block;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    border-style: solid;
                    border-color: transparent transparent transparent #999;
                }
            }
        }

        .arr-info {
            .arr-station {
                display: flex;
            }
        }
    }

    .bottom-container {
        /* width: 100%; */
        display: flex;
        align-items: center;
        flex: 1;
        flex-wrap: wrap;
        /* justify-content: space-around; */
        margin: 0 20px;
        .seat-type {
            margin: 0 20px 5px 0;
        }
    }

    .remind-info {
        margin-top: 5px;
        font-size: 12px;/*!px*/
        color: #22ba66;
    }
</style>


