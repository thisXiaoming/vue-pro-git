<template>
    <div class="slider-eg">
        <slider>
            <div class="slider-content"></div>
        </slider>
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
        .slider-content {
            width: 100px;
            height: 100px;
            background-color: #333;
        }
    }

</style>

