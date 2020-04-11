<template>
    <div class="slider">
        <div class="slider-mask" :style="{height:sHeight}">
            <div class="slider-inner" :style="{width:sWidth}">
                111111111111
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Slider',
        data() {
            return {
                sWidth: '60%',
                sHeight: '796px',
            }
        }
    }
</script>

<style lang="less" scoped>
    .slider-mask {
        background: #ddd;
        z-index: 100
    }
    .slider-inner {
        background: #ccc;
        z-index: 200;
        height: 100%
    }
</style>


