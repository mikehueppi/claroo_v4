<template>
    <div class="cl-module__content">
        <v-container fluid class="content-body">
            <v-row no-gutters>
                <v-col cols="12" md="6">
                    <DashWidgetMessages :messages=messages />
                    <DashWidgetEducationMaterial :apps=apps  />
                    <DashWidgetTasks />
                </v-col>
                <v-col cols="12" md="6">
                    <DashWidgetCalendar />
                    <DashWidgetUsers  :users=users />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import DashWidgetMessages from './DashWidgetMessages.vue';
    import DashWidgetEducationMaterial from './DashWidgetEducationMaterial.vue';
    import DashWidgetTasks from './DashWidgetTasks.vue';
    import DashWidgetCalendar from './DashWidgetCalendar.vue';
    import DashWidgetUsers from './DashWidgetUsers.vue';
    export default {
        name: "DashMain.vue",
        components: { DashWidgetMessages, DashWidgetEducationMaterial, DashWidgetTasks, DashWidgetCalendar, DashWidgetUsers },
        data() {
            return {
                messages: [],
                tasks: [],
                events: [],
                apps: [],
            }
        },
        created() {
            let userObj = JSON.parse(localStorage.getItem('storeUserObj'));
            let messObj = JSON.parse(localStorage.getItem('storeMessObj'));
            let taskObj = JSON.parse(localStorage.getItem('storeTaskObj'));
            let eduObj = JSON.parse(localStorage.getItem('storeEduObj'));
            this.users = userObj.users;
            this.messages = messObj.messages;
            this.tasks = taskObj.tasks;
            this.apps = eduObj.apps;
        }
    }
</script>
