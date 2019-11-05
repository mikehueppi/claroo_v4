<template>
    <div>
        <div class="cl-btn-login">
            <v-btn v-if="this.$store.state.logged === 1" flat @click.stop="logOff" style="text-align:center;">Logoff</v-btn>
            <v-btn v-else  flat @click.stop="dialog = true" style="text-align:center;">Login</v-btn>
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
                    <v-btn flat @click.stop="dialog = false" class="cl-btn-standard">Close</v-btn>
                </v-form>
            </div>
        </v-dialog>

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
                password: ""
            }
        },
        methods: {
            goDashboard() {
                if (this.username === "Demo" && this.password === "claroo19") {
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
    .login {
        font-size: 16px;
        color: $cl_btn_nav;
    }
    .cl-login {
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
