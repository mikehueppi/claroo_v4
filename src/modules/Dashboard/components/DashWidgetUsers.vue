<template>
    <BaseCard
            cardTitle="Meine Klasse"
            cardIcon="mdi-account-multiple"
            cardIconColor="#fba957"
    >
        <div>
            <div class="cl-carousel">
                <BaseSlider
                        :items=items
                        @clickedSlide="onClickSlide"
                />
            </div>
        </div>
    </BaseCard>
</template>

<script>
    import BaseCard from '../../../components/ui/BaseCard.vue';
    import BaseSlider from '../../../components/ui/BaseSlider.vue';
    export default {
        name: "DashWidgetUsers",
        props:{
            users: {
                type:Array,
            },
        },
        data () {
            return {
                userType: 0,
                userDialog: false,
                userID: 0,
            }
        },
        components: { BaseCard, BaseSlider },
        methods: {
            onClickSlide(value) {
                alert(value);
            }
        },
        computed: {
            items: function() {
                return (
                    this.users.map(function(user) {
                        return (
                            {id: user.userID, label: user.userDisplayName}
                        )
                    })
                )
            }
        }
    }
</script>

<style scoped>
    .cl-carousel  {
        width: 100%;
        min-height: 90px;
        margin: 0px auto;
        text-align: center;
    }
    .cl-carousel, .cl-carousel section.VueCarousel {
        background-color: #ffffff;
    }
    .cl-carousel .cl-label {
    }
    .cl-carousel img {
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        width: 80%;
        margin: 5px 10px 5px 10px;
        border: 6px solid #fba957;
        max-width: 200px;
    }
    .cl-carousel_nav {
        margin-top: 20px !important;
    }
</style>