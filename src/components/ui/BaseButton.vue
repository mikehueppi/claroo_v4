<template>
    <v-btn outlined :disabled="disabled" class="button" color="#444" @click="onClickButton(id)" :width="width">
        <v-icon v-if="icon" dark left>{{ icon }}</v-icon>
        {{ label }}
    </v-btn>
</template>

<script>
    export default {
        name: "BaseButton.vue",
        props: {
            label: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: '#444'
            },
            width: {
                type: String,
                default: ''
            },
            id: {
                type: Number,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            onClickButton(num) {
                this.$emit('clickedButton', num);
            }
        }
    }
</script>

<style scoped>
    .button {
        width: 70%;
        margin: 0 0 10px 0;
        text-align: left;
    }
</style>