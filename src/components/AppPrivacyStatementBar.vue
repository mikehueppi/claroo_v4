<template>
    <v-snackbar v-model="snackbar" :timeout="sbTimeout" :multi-line=true>
        {{ sbText }}
        <v-btn dark @click="snackbar = false"> &nbsp; OK  &nbsp;</v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: "AppPrivacyStatementBar",
        data: () => ({
            snackbar: false,
            sbTimeout: 6000000,
            sbText: 'Diese Webseite benutzt Cookies, um den bestmöglichen Service zu bieten. Weitere Informationen sind in unserer AGB und in der Datenschutzerklärung zu finden.'
        }),

    }
</script>

<style scoped>
</style>