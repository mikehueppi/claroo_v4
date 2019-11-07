<template>
    <carousel :perPage="3" :navigationEnabled="true">
        <slide v-for="item in items" :key="item.id">
                <div @click="onClickSlide(item.id)">klick</div>
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