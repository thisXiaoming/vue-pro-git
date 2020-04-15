<template>
    <div class="slider-eg">
        <div>我是外层内容</div>
        <Slider :sliderObj="sliderObj">
            <p>sliderObj配置slider组件的options</p>
        </Slider>
        <div>我是下面内容</div>
    </div>
</template>

<script>
    import Slider from "../../components/slider/slider.vue";
    export default{
        components: {
            Slider
        },
        data() {
            return {
                sliderObj: {
                    btnText: '点击打开/关闭',
                    direction: 'top',//字符串形式，取值left,right,top,bottom, 其他值默认right
                    innerWidth: '',//百分比或像素值，百分比是外层设置relative父元素的宽度比，也可能是窗口宽度的百分比。
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .slider-eg{
        width: 900px;
        height: 900px;
        .content {
            color: #ddd;
        }
    }

</style>

