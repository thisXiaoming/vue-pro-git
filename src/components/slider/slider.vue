<template>
    <div class="slider">
        <button @click="isOpen = !isOpen">{{sliderObj.btnText}}</button>
        <transition name="inner" :enter-class="innerCls.enter" :leave-to-class="innerCls.leaveTo">
            <div class="slider-inner" :class="positionCls" :style="{width:sliderObj.innerWidth || '60%'}" v-show="isOpen">
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
        props: {
            sliderObj: Object
        },
        data() {
            return {
                isOpen: false,
                direction: this.sliderObj.direction || ''
            }
        },
        computed: {
            innerCls() {
                let directionArr = ['left','right','top','bottom'];
                let direction = directionArr.indexOf(this.direction) > -1 ? this.direction : 'right';
                console.log("direction: ",direction)
                return {
                    enter: 'inner-' + direction + '-enter',
                    leaveTo: 'inner-' + direction + '-leave-to'
                }
            },
            positionCls() {
                switch(this.direction) {
                    case 'left' : return {'left-position' : true};
                    case 'top' : return {'top-position' : true};
                    case 'bottom' : return {'bottom-position' : true};
                    default : return {'right-position' : true};
                }
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
            height: 100%;
            background: #cbb;
            z-index: 101;
        }
        .right-position, .top-position {
            top: 0;
            right: 0;
        }
        .left-position {
            top: 0;
            left: 0;
        }
        .bottom-position {
            bottom: 0;
            right: 0;
        }
        .inner-enter-active {
            transition: all .5s ease;
        }
        .inner-leave-active {
            transition: all .3s ease-out;
        }
        .inner-right-enter, .inner-right-leave-to {
            transform: translate3d(100%, 0, 0);
        }
        .inner-left-enter, .inner-left-leave-to {
            transform: translate3d(-100%, 0, 0);
        }
        .inner-top-enter, .inner-top-leave-to {
            transform: translate3d(0, -100%, 0);
        }
        .inner-bottom-enter, .inner-bottom-leave-to {
            transform: translate3d(0, 100%, 0);
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


