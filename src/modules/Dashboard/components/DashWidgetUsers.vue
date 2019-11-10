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
            <v-dialog
                    v-model="userDialog"
                    max-width="900"
            >
                <v-card>
                    <DashModalUser :userObj="user_selected"></DashModalUser>
                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                                outlined
                                @click="userDialog = false"
                        >
                            schliessen
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </BaseCard>
</template>

<script>
    import BaseCard from '../../../components/ui/BaseCard.vue';
    import BaseSlider from '../../../components/ui/BaseSlider.vue';
    import DashModalUser from './DashModalUser.vue';
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
        components: { BaseCard, BaseSlider, DashModalUser },
        methods: {
            onClickSlide(value) {
                //alert(value);
                this.userDialog = true;
                this.userID = value;
            }
        },
        computed: {
            items: function() {
                return (
                    this.users.map(function(user) {
                        return (
                            {id: user.userID, label: user.userDisplayName, image: "/images/users/" + user.userImage}
                        )
                    })
                )
            },
            user_selected: function() {
                let user_sel = {};
                if (this.userID > 0) {
                    let userID = this.userID;
                    this.users.forEach(function (user) {
                        if (user.userID === userID) {
                            user_sel.userID = user.userID;
                            user_sel.userDisplayName = user.userDisplayName;
                            user_sel.userImage = user.userImage;
                            user_sel.userRole = user.userRole;
                            user_sel.userFunction = user.userFunction;
                            user_sel.userAge = user.userAge;
                            user_sel.userInterests = user.userInterests;
                            user_sel.userAnimals = user.userAnimals;
                            user_sel.userFood = user.userFood;
                            user_sel.userMusic = user.userMusic;
                            user_sel.userBooks = user.userBooks;
                            user_sel.userMovies = user.userMovies;
                            user_sel.userFutureJob = user.userFutureJob;
                        }
                    });
                }
                return (user_sel);
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
</style>