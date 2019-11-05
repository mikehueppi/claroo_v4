<template>
    <v-content>
        <div class="cl-module__wrapper" id="cl-dash">
            <cl-nav class="cl-app-module__nav" :moduleActive="moduleActive">
            </cl-nav>
            <v-flex xs12>
                <cl-main :class="styleContent"></cl-main>
            </v-flex>
        </div>
    </v-content>
</template>

<script>
    import AppModuleNav from '../../../components/AppModuleNav.vue'
    import DashMain from '../components/DashMain.vue'
    export default {
        name: 'DashIndex',
        components: {
            clNav: AppModuleNav,
            clMain: DashMain
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
            //this.$vuetify.goTo('.application', {offset: -100});
            this.$store.commit('setLogged',1);
        }
    }
</script>


