<template>
    <v-toolbar id="cl-main-toolbar" height="72px">
        <v-toolbar-title class="headline text-uppercase">
        <span @click="$store.commit('setSection',0); $vuetify.goTo('.application', { offset: -100 })">
          <!-- <img alt="Logo claroo!" itemprop="logo" src="/images/logo_claroo.png"> -->
            Plattform
        </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <AppLogin/>
    </v-toolbar>
</template>

<script>
    import AppLogin from '../components/AppLogin.vue'
    export default {
        name: "AppHeader",
        components: {AppLogin},
    }
</script>

