<template>
    <div class="slider">
        <button @click="isOpen = !isOpen">点击</button>
        <transition name="inner">
            <div class="slider-inner" :style="{width:sWidth}" v-show="isOpen">
                <slot></slot>
            </div>
        </transition>
        <transition name="mask">
            <div class="slider-mask" @click="isOpen = false" v-show="isOpen"></div>
        </transition>
    </div>
</template>

<script>
    export default{
        name: 'Slider',
        data() {
            return {
                sWidth: '60%',
                isOpen: false
            }
        }
    }
</script>

<style lang="less" scoped>
    button {
        cursor: pointer;
    }
    .slider {
        .slider-mask {
            position: absolute;
            top: 0;
            background: #ccc;
            z-index: 99;
            width: 100%;
            height: 100%;
            opacity: 0.5;
        }
        .slider-inner {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            background: #cbb;
            z-index: 101;
        }
        .inner-enter-active {
            transition: all .3s ease;
        }
        .inner-leave-active {
            transition: all .3s ease-out;
        }
        .inner-enter, .inner-leave-to {
            transform: translate3d(100%, 0, 0);
        }
        .mask-enter-active {
            transition: all .3s ease;
        }
        .mask-leave-active {
            transition: all .3s ease-out;
        }
        .mask-enter, .mask-leave-to {
            opacity: 0;
        }
    }
</style>


