<template>
        <p>Das Quiz-Game {{ appObj.appTitle }}ist in dieser Version noch nicht verfügbar.</p>
</template>

<script>
    export default {
        name: 'EduQuizApp',
        props:{
            appObj: {
                type:Object,
            },
        },
        data () {
            return {
                dialog: false,
                appAnswer: '',
                appAnswers: ['A', 'B', 'C', 'D'],
                quizStarted: 0,
                n: 0,
                appMessage: '',
                appAnswerSelected: false,
                appAnswerChecked: false,
                appAnswerRight: undefined,
                countAnswersRight: 0
            }
        },
    }
</script>

<style scoped>
</style>
