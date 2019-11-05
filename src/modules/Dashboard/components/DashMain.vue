<template>
    <div class="cl-module__content">
        <v-container fluid class="content-body">
            <v-layout row wrap>
                <v-flex md6>
                    <v-card>
                        <v-card-title>
                            <div ><v-icon class="cl-icon__title cl-yellow">chat</v-icon></div> &nbsp; <h3 class="headline mb-0">Mitteilungen / Umfrage</h3>
                        </v-card-title>
                        <v-card-text>
                            <div class="cl-dash-messages">
                                <v-layout row class="cl-message-info">
                                    <v-flex xs1>
                                        <v-icon class="cl-icon">info</v-icon>
                                    </v-flex>
                                    <v-flex xs11>
                                        Im Moment sind noch nicht viele Features verfügbar.<br />Die Modules in dieser Demo-Version werden laufend aktualisiert.
                                    </v-flex>
                                </v-layout>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "DashMain.vue",
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

<style scoped>

</style>