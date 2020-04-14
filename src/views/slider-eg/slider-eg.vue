<template>
    <div class="slider-eg">
        <div>我是外层内容</div>
        <Slider>
            <div class="slider-content">
                11111
                <div class="content">22222222</div>
            </div>
        </Slider>
        <div>我是下面内容</div>
    </div>
</template>

<script>
    import Slider from "../../components/slider/slider.vue";
    export default{
        components: {
            Slider
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

