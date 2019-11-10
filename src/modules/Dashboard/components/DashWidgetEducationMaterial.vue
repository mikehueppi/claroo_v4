<template>
    <Card
            cardTitle="Lernmittel"
            cardIcon="mdi-earth"
            cardIconColor="#06c290"
    >
        <div>
            <v-toolbar flat class="cl-subheader">
                <v-toolbar-title>Quiz Apps</v-toolbar-title>
            </v-toolbar>
            <v-container>
                <v-row wrap>
                    <v-col cols="12" sm="2" v-for="app in apps" :key="app.appID">
                        <Icon
                            :image=app.appIcon
                            :id=app.appID
                            :label=app.appLabel
                            width=90
                            height=90
                            imagePath="/images/apps/"
                            showLabel=false
                            link="Apps"></Icon>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </Card>
</template>

<script>
    import Card from '../../../components/ui/BaseCard.vue';
    import Icon from '../../../components/ui/BaseIcon.vue';
    export default {
        name: "DashWidgetEducationMaterial.vue",
        props:{
            apps: {
                type:Array,
            },
        },
        components: {Card, Icon},
        methods: {
        },
    }
</script>

<style scoped>
    .cl-subheader .v-sheet {
        background-color: #efefef !important;
        color: #444444 !important;
    }
</style>