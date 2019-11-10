<template>
    <carousel :perPage="4" :navigationEnabled="true">
        <slide v-for="item in items" :key="item.id">
            <img :src="item.image" @click="onClickSlide(item.id)">
            <div class="cl-label">{{ item.label }}</div>
        </slide>
    </carousel>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        name: "BaseSlider.vue",
        props:{
            items: {
                type:Array,
            },
        },
        components: { Carousel, Slide },
        methods: {
            onClickSlide(num) {
                this.$emit('clickedSlide', num);
            }
        }
    }
</script>

<style scoped>
</style>