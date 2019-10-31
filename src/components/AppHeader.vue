<template>
    <v-toolbar id="cl-main-toolbar">
        <v-toolbar-title class="headline text-uppercase">
        <span @click="$store.commit('setSection',0); $vuetify.goTo('.application', { offset: -100 })">
          <!--<img alt="Logo claroo!" itemprop="logo" src="/images/logo_claroo.png">--> Plattform
        </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <cl-login></cl-login>
    </v-toolbar>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

