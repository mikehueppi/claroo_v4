<template>
    <BaseCard
            cardTitle="Kalender"
            cardIcon="mdi-calendar-month"
            cardIconColor="#fba957"
    >
        <div>
            <full-calendar :events="events" :config="configCal" style="min-height: 360px;"></full-calendar>
        </div>
    </BaseCard>
</template>

<script>
    import { FullCalendar } from 'vue-full-calendar';
    import BaseCard from '../../../components/ui/BaseCard.vue';
    export default {
        name: "DashWidgetCalendar.vue",
        components: {
            FullCalendar,
            BaseCard
        },
        data () {
            return {
                configCal: {
                    locale: 'de',
                    defaultView: 'month',
                    buttonText: {
                        today: 'heute',
                        month: 'Monat',
                        week: 'Woche',
                        day: 'Tag',
                        list: 'Liste'
                    }
                }
            }
        }
    }
</script>

<style scoped>
</style>