<template>
    <div class="icon">
        <router-link :to="{ name: link, params: { id: id }}" v-if="link">
            <v-img
                    :width="width"
                    :src="imagePath + image"
            >
            </v-img>
        </router-link>
        <div v-else>
            <v-img
                    @click="onClickIcon(id)"
                    :width="width"
                    :src="imagePath + image"
            >
            </v-img>
        </div>
        <p v-if="label">{{ label }}</p>
    </div>
</template>

<script>
    export default {
        name: "BaseButton.vue",
        props: {
            id: {
                type: Number,
                default: 0
            },
            image: {
                type: String,
                default: ''
            },
            imagePath: {
                type: String,
                default: ''
            },
            link: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            width: {
                type: String,
                default: ''
            },
            height: {
                type: String,
                default: ''
            },
            showLabel: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            onClickIcon(num) {
                this.$emit('clickedIcon', num);
            }
        }
    }
</script>
<style scoped>
    .icon p {
        margin: 4px 0 0 0;
        padding: 0;
        text-align: center;
        font-size:12px;
        height: 12px;
    }
    .icon .v-image {
        border-radius: 10px;
        cursor: pointer;
        margin: auto;
        width: 50%;
    }
</style>