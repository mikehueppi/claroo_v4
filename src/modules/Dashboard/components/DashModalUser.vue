<template>
    <div id="cl-user-profil">
        <v-card-title>
            <div><v-icon class="cl-icon__title" style="color: #fba957">mdi-account</v-icon></div>
        </v-card-title>
        <v-card-text>
            <v-container fluid class="content-body">
                <v-layout row wrap>
                    <v-flex md4>
                        <img :src="'/images/users/' + userObj.userImage">
                        <div class="cl-user-intro">
                            <p></p>
                            <Button
                                id="1"
                                label="Portrait"
                                icon="mdi-account"
                                :disabled="modalPortrait"
                                @clickedButton="onClickButton">
                            </Button>
                            <Button
                                id="2"
                                label="Nachricht"
                                icon="mdi-message-text-outline"
                                :disabled="modalMessage"
                                @clickedButton="onClickButton">
                            </Button>
                        </div>
                    </v-flex>
                    <v-flex md8 v-if="modalPortrait" class="modalMain">
                        <h3>{{ userObj.userDisplayName }}</h3>
                        <p><i>{{ userRoleDisplay }}, {{ userObj.userAge }} Jahre</i></p>
                        <p></p>
                        <span v-if="userObj.userInterests > ''">
                            <p><strong>Interessen / Das mag ich</strong><br />{{ userObj.userInterests }}</p>
                        </span>
                            <span v-if="userObj.userAnimals > ''">
                            <p><strong>Lieblingstier</strong><br />{{ userObj.userAnimals }}</p>
                        </span>
                            <span v-if="userObj.userFood > ''">
                            <p><strong>Das esse ich am liebsten</strong><br />{{ userObj.userFood }}</p>
                        </span>
                            <span v-if="userObj.userMusic > ''">
                            <p><strong>Diese Musik höre ich gerne</strong><br />{{ userObj.userMusic }}</p>
                        </span>
                            <span v-if="userObj.userBooks> ''">
                            <p><strong>Diese Bücher gefallen mir besonders</strong><br />{{ userObj.userBooks }}</p>
                         </span>
                            <span v-if="userObj.userMovies > ''">
                            <p><strong>Diese Filme, TV-Serien gefallen mir besonders</strong><br />{{ userObj.userMovies }}</p>
                         </span>
                            <span v-if="userObj.userFutureJob > ''">
                            <p><strong>Das möchte ich später einmal werden</strong><br />{{ userObj.userFutureJob }}</p>
                         </span>
                    </v-flex>
                    <v-flex md8 v-else class="modalMain">
                        <h3>Nachricht an {{ userObj.userDisplayName }}</h3>
                        <v-textarea class="form"
                            name="MessageField"
                            rows=17
                            outlined
                        ></v-textarea>
                        <Button
                                id="3"
                                label="senden"
                                icon="mdi-send"
                                width="150px"
                                @clickedButton="onClickButton">
                        </Button>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-text>
    </div>
</template>

<script>
    import Button from '../../../components/ui/BaseButton.vue';
    export default {
        name: "DashUserProfil",
        data() {
            return {
                modalPortrait: true,
                modalMessage: false,
            }
        },
        props: {
            userObj: {type: Object, required: true}
        },
        components: { Button },
        methods: {
            onClickButton(value) {
                //alert(value);
                this.modalPortrait = (value == 1) ? true : false;
                this.modalMessage = (value == 1) ? false: true;
            }
        },
        computed: {
            userRoleDisplay: function () {
                let role = "";
                if (this.userObj.userFunction) {
                    role = this.userObj.userFunction;
                }
                else {
                    role = (this.userObj.userRole === 1) ? "Schüler(in)" : "Lehrperson";
                }
                return role ;
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 0 0 10px 0;
    }
    .form {
        margin: 20px 0 20px 0;
        width: 95%;
    }
    .modalMain {
        padding: 30px 0 0 0;
        min-height: 540px;
    }
    #cl-user-profil .v-card__title {
        color: #ffffff !important;
        background-color: #c4c4c4 !important;
        padding: 6px 6px 6px 12px !important;
    }
    #cl-user-profil img {
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        width: 80%;
        margin: 5px 10px 5px 10px;
        border: 6px solid #fba957;
        max-width: 200px;
    }
    .cl-icon {
        font-size: 32px;
        margin: 0 10px 0 0;
    }
    .cl-icon__title {
        font-size: 28px;
        background-color: #ffffff;
        margin: 2px 15px 2px 0;
        border-radius: 50%;
        padding: 6px;
    }
    .cl-yellow {
        color: #fba957;
    }
    .cl-user-intro {
        text-align: left;
        padding: 20px 20px 0 30px;
    }
    #cl-user-profil .v-dialog > * {
        min-height: 600px !important;
    }
</style>










