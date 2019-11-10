<template>
  <BaseCard
            cardTitle="Mitteilungen / Umfragen"
            cardIcon="mdi-message-text"
            cardIconColor="#fba957"
    >
        <div>
            <v-row no-gutters class="cl-message-info">
                <v-col cols="1" >
                    <v-icon class="cl-icon">mdi-information</v-icon>
                </v-col>
                <v-col>
                    Im Moment sind noch nicht viele Features verfügbar.<br />Die Modules in dieser Demo-Version werden laufend aktualisiert.
                </v-col>
            </v-row>
            <v-row no-gutters class="cl-message">
                <v-col cols="1" >
                    <v-icon class="cl-icon">mdi-message-alert</v-icon>
                </v-col>
                <v-col>
                    <p><strong>{{ messages[1].messTitle }}</strong><br />
                        {{ messages[1].messContent[0].messContentText }}</p>
                </v-col>
            </v-row>
        </div>
    </BaseCard>
</template>

<script>
    import BaseCard from '../../../components/ui/BaseCard.vue';
    export default {
        name: "DashWidgetMessages.vue",
        props:{
            messages: {
                type:Array,
            },
        },
        components: {BaseCard}
    }
</script>

<style scoped>
    .v-card {
        font-size: 36px;
    }
    .cl-message {
        padding: 10px 15px 0 15px;
        background-color: #efefef;
        color: rgba(0,0,0,.87);
        font-size: 14px;
    }
    .cl-message-info {
        margin: 0 0 15px 0;
        padding: 10px 15px 15px 15px;
        background-color: #fba957;
        color: rgba(0,0,0,.87);
        font-size: 16px;
        font-weight: 500;
    }
</style>