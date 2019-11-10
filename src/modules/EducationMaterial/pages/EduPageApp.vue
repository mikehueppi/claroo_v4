<template>
    <v-content>
        <div class="cl-module__wrapper" id="cl-app">
            <cl-nav class="cl-app-module__nav" :moduleActive="moduleActive">
            </cl-nav>
            <v-flex xs12>
                <cl-main :class="styleContent" :id=$route.params.id></cl-main>
            </v-flex>
        </div>
    </v-content>
</template>

<script>
    import AppModuleNav from '../../../components/AppModuleNav.vue'
    import EduAppContainer from '../components/EduAppContainer.vue'
    export default {
        name: "EduPageApp.vue",
        components: {
            clNav: AppModuleNav,
            clMain: EduAppContainer
        },
        data () {
            return {
                moduleActive: 0
            }
        },
        computed: {
            styleContent: function () {
                return (this.$vuetify.breakpoint.mdAndUp) ? "cl-content" : "cl-content-mobile";
            }
        },
        mounted () {
            this.$store.commit('setLogged',1);
        }
    }
</script>

<style scoped>

</style>