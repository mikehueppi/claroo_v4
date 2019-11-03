<template>
    <v-layout row>
        <v-flex xs12 sm10 offset-sm1>
            <div class="headline"><h1>{{ sectionTitle }}</h1></div>
            <v-card>
                <v-card-text>
                    <v-flex xs12>
                        <v-tabs show-arrows light slider-color="grey">
                            <v-tab v-for="title in contTitles" :key="title" class="cl-tab_title">
                                {{ title }}
                            </v-tab>
                            <v-tab-item v-for="comp in contComponents" :key="comp" class="cl-tab_content">
                                <component :is=comp></component>
                            </v-tab-item>
                        </v-tabs>
                    </v-flex>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import WebPlaDigital from '../content/WebPlaDigital.vue'
    import WebPlaPlatform from '../content/WebPlaPlatform.vue'
    import WebPlaFokus from '../content/WebPlaFokus.vue'
    export default {
        name: "WebPlatform",
        data: () => ({
            sectionTitle: "Digitale Plattform für Schulen",
            contTitles: ['Digitaler Wandel','Plattform und Ökosystem','Fokus'],
            contComponents: ['clTab1','clTab2','clTab3']
        }),
        components: {
            clTab1: WebPlaDigital,
            clTab2: WebPlaPlatform,
            clTab3: WebPlaFokus
        }
    }
</script>
