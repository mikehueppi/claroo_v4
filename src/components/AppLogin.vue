<template>
    <div>
        <v-container>
            <!--<v-btn v-if="this.$store.state.logged === 1" text @click.stop="logOff" style="text-align:center;">Logoff</v-btn>-->
            <v-row no-gutters v-if="this.$store.state.logged === 1" class="userNav">
                <v-col cols="10" class="userNavLabel">Nick</v-col>
                <v-col cols="2" class="userNavAvatar">
                    <img v-on="on" alt="User Avatar" src="/images/users/demouser_student.png" @click.stop="logOff">
                </v-col>
            </v-row>
            <div  v-else class="cl-btn-login">
                <v-btn text @click.stop="dialog = true" style="text-align:center;">Login</v-btn>
            </div>
            <v-dialog v-model="dialog" persistent max-width="360px" content-class="cl-content-circle" id="login-dialog">
                <div class="content-circle login">
                    <v-form>
                        <v-text-field
                                v-model="username"
                                label="User"
                                required
                        ></v-text-field>
                        <v-text-field
                                @keyup.enter.native="goDashboard"
                                v-model="password"
                                :type="'password'"
                                label="Passwort"
                                required
                        ></v-text-field>
                        <v-btn @click.stop="goDashboard" class="cl-btn-standard cl-login">Login</v-btn><br />
                        <v-btn text @click.stop="dialog = false" class="cl-btn-standard">Schliessen</v-btn>
                    </v-form>
                </div>
            </v-dialog>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "AppLogin",
        data() {
            return {
                dialog: false,
                loggedIn: false,
                username: "",
                password: "",
                navItems: [
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
            }
        },
        methods: {
            goDashboard() {
                if (this.username === "demo" && this.password === "123") {
                    this.dialog = false;
                    this.loggedIn = true;
                    this.$store.commit('setLogged',1);
                    this.$router.push('Dashboard');
                }
            },
            logOff() {
                this.dialog = false;
                this.loggedIn = false;
                this.$store.commit('setLogged',0);
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../scss/_variables.scss";
    .userNavAvatar img {
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        border: 2px solid #fba957;
        cursor: pointer;
        width: 60px !important;
        height: 60px !important;
    }
    .userNavAvatar {
        padding: 6px 0 0 0;
    }
    .userNav {
        width: 300px;
    }
    .userNavLabel {
        text-align: right;
        padding: 20px 15px 0 0;
    }
    .login {
        font-size: 16px;
        color: $cl_btn_nav;
    }
    .cl-login {
        padding: 10px;
        font-size: 16px !important;
    }
    .cl-btn-login {
        position: fixed;
        top: 8px;
        right: 20px;
        color: $cl_btn_nav !important;
        margin: 0 40px 20px 40px !important;
        text-transform: inherit !important;
        z-index: 110;
    }
    form {
        text-align: center;
        display: inline-block;
        width: 55%;
        min-width: 250px;
        margin-top: 95px;
    }
</style>
