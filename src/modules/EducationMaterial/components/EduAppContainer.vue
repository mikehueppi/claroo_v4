<template>
    <div class="cl-module__content">
        <v-container fluid class="content-body">
            <v-row no-gutters>
                <v-col cols="12" md="12">
                    <Card
                            cardTitle="Quiz App"
                            cardIcon="mdi-earth"
                            cardIconColor="#06c290"
                    >
                        <div>
                            <p>Das Quiz-Game <strong>&laquo;{{ obj.appObj.appTitle }}&raquo;</strong> ist in dieser Version noch nicht verfügbar.</p>
                            <!--<QuizApp :appObj="obj"></QuizApp> -->
                        </div>
                    </Card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    //import QuizApp from './EduQuizApp.vue';
    import Card from '../../../components/ui/BaseCard.vue';
    export default {
        name: "EduApp.vue",
        data() {
            return {
                apps: [],
            }
        },
        components: {
            Card
        },
        props: {
            id: {
                type: Number,
                default: 0
            },
        },
        computed: {
            obj: function () {
                return { appObj: this.apps[this.id - 1] };
            }
        },
        created() {
            let eduObj = JSON.parse(localStorage.getItem('storeEduObj'));
            this.apps = eduObj.apps;
        }
    }
</script>
