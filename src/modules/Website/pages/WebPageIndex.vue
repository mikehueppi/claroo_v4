<template>
    <section id="section1">
        <WebIntro/>
    </section>
</template>

<script>
    import WebIntro from '../components/WebIntro.vue'
    export default {
        name: 'WebPageIndex',
        components: {WebIntro},
        data: () => ({
        }),
        methods: {
        },
        mounted () {
            //this.$store.commit('setLogged',0);
        }
    }
</script>

<style>
    html,
    body {
        height: 100vh;
        margin: 0;
        padding: 0;
    }
    section {
        margin: 0;
        padding: 0;
        background: #8f8f8f;
    }
    section h1 {
        margin: 165px 0 32px 0;
        color: #ffffff;
        display: block;
        font-weight: 300;
        font-size: 36px;
    }
    section:first-child h1 {
        padding-top: 18px;
    }
    section p {
        padding: 0;
        font-size: 16px;
    }
    section .v-card {
        margin-bottom: 50px;
    }
    section .v-card__title {
        font-size: 18px;
        font-weight: bold;
    }
    section .v-card__text {
        padding-top: 0;
    }
    #section1, #section2 {
        background: #333333;
        min-height: 100vh;
    }
    .v-btn--bottom.v-btn--absolute.v-btn--small {
        bottom: 20px;
        z-index: 1500 !important;
    }
    .cl-header .v-btn.v-btn--disabled .v-btn__content {
        color: #333333;
    }
    .cl-header .v-btn:nth-of-type(2).v-btn--disabled .v-btn__content {
        color: red;
    }
    .v-tabs__div {
        text-transform: none;
    }
    .v-tabs__item  {
        padding: 6px 0 6px 0;
    }
    .v-tabs__container {
        margin: 20px 0 0 25px;
    }
    .cl-header {
        position: fixed;
        z-index: 999;
        top: 8px;
        right: 150px;
    }
    .cl-tab_title {
        font-size: 16px !important;
        text-transform: none !important;
        margin: 0 40px 0 0 !important;
    }
    .cl-tab_content {
        /* margin: 20px 0 0 0 !important; */
    }
    .cl-content-image {
        padding: 20px 0 0 20px;
    }
    .cl-content-image img {
        width: 100%;
    }
</style>
