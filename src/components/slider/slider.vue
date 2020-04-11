<template>
    <div class="slider">
        <div class="slider-mask">
            <div class="slider-inner" :style="{width:sWidth}">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Slider',
        data() {
            return {
                sWidth: '60%'
            }
        }
    }
</script>

<style lang="less" scoped>
    .slider {
        width: 100%;
        height: 100%;
        .slider-mask {
            position: relative;
            background: #ccc;
            z-index: 100;
            width: 100%;
            height: 100%;
        }
        .slider-inner {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            background: #ddd;
            z-index: 200;
            transform: translate3d(0px, 0px, 0px);
            transition: all 0.2s ease-out 0s;
        }
    }
</style>


