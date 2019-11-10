<template>
    <v-card>
        <v-card-title>
                <v-icon v-if="cardIcon" class="cl-icon__title" :style="style">
                    {{ cardIcon }}
                </v-icon>
                <h3 class="headline mb-0 bc-title">
                    {{ cardTitle }}
                </h3>
        </v-card-title>
        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "BaseCard.vue",
        props: {
            cardTitle: {
                type: String,
                default: ''
            },
            cardIcon: {
                type: String,
                default: ''
            },
            cardIconColor: {
                type: String,
                default: ''
            }
        },
        computed: {
            style () {
                return 'color: ' + this.cardIconColor;
            }
        },
    }
</script>

<style scoped>
    .v-card {
        margin: 0 15px 30px 15px;
    }
    .v-card__title {
        color: #ffffff;
        background-color: #c4c4c4;
        padding: 6px 6px 6px 12px;
    }
    .v-card__text {
        padding: 15px;
    }
    .cl-icon__title {
        font-size: 28px;
        background-color: #ffffff;
        margin: 2px 15px 2px 0;
        border-radius: 50%;
        padding: 6px;
    }
</style>