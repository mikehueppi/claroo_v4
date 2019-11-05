<template>
    <div class="cl-module__content">
        <v-container fluid class="content-body">
            <v-row no-gutters>
                <v-col md="6">
                    <DashWidgetMessages :messages=messages />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import DashWidgetMessages from './DashWidgetMessages.vue';
    export default {
        name: "DashMain.vue",
        components: { DashWidgetMessages },
        data() {
            return {
                messages: [],
                tasks: [],
                events: [],
            }
        },
        created() {
            let userObj = JSON.parse(localStorage.getItem('storeUserObj'));
            let messObj = JSON.parse(localStorage.getItem('storeMessObj'));
            let taskObj = JSON.parse(localStorage.getItem('storeTaskObj'));
            this.users = userObj.users;
            this.messages = messObj.messages;
            this.tasks = taskObj.tasks;
        }
    }
</script>


<style scoped lang="scss">

    @import "../../../../scss/_variables.scss";

    #cl-dash .v-card {
        margin: 0 15px 30px 15px;
    }
    #cl-dash .v-card__title {
        color: #ffffff;
        background-color: #c4c4c4;
        padding: 6px 6px 6px 12px;
    }
    #cl-dash .cl-dash .v-card__title {
        color: #ffffff;
        background-color: #fba957;
        padding: 6px 6px 6px 12px;
    }
    #cl-dash .cl-dash-tasks .v-card__title {
        color: #ffffff;
        background-color: #a13a47;
        padding: 6px 6px 6px 12px;
    }
    #cl-dash .cl-dash-topics .v-card__title {
        color: #ffffff;
        background-color: #06c290;
        padding: 6px 6px 6px 12px;
    }
    #cl-dash .v-card__text .cl-task-title {
        color: rgba(0,0,0,.87);
        background-color: #d5d5d5;
        margin: 0 0 10px 0;
        padding: 10px 15px 10px 15px;
    }
    .v-card__text {
        padding: 15px;
    }
    #cl-dash .cl-dash-tasks .v-card__text h3 {
        font-size: 18px;
    }
    .cl-dash-text {
        font-size: 16px;
    }
    .cl-carousel  {
        width: 100%;
        margin: 0px auto;
        text-align: center;
    }
    .cl-carousel, .cl-carousel section.VueCarousel {
        background-color: #ffffff;
    }
    .cl-carousel .cl-label {
    }
    .cl-carousel img {
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        width: 80%;
        margin: 5px 10px 5px 10px;
        border: 6px solid #fba957;
        max-width: 200px;
    }
    .cl-dash-messages .info {
        padding: 10px 15px 10px 15px;
        background-color: #ffeab5;
        color: rgba(0,0,0,.87);
        font-size: 16px;
    }
    .cl-message, .cl-task, .cl-topics {
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
    .cl-message .flex.cl-pr10, .cl-task .flex.cl-pr10, .cl-topics .flex.cl-pr10{
        padding-right: 10px;
    }
    .cl-link {
        color: rgba(0,0,0,.87);
        font-size: 14px;
    }
    .cl-icon {
        font-size: 32px;
        margin: 0 10px 0 0;
    }
    .cl-icon__title {
        font-size: 28px;
        background-color: #ffffff;
        margin: 2px 15px 2px 0;
        border-radius: 50%;
        padding: 6px;
    }
    .cl-topics .card__actions a {
        text-decoration: none;
    }
    .cl-btn-dash {
        padding: 0px 5px 10px 5px;
        margin: 0 15px 0 0;
        color: #666666;
        text-transform: inherit;
    }
    .cl-carousel_nav {
        margin-top: 20px;
    }

</style>
