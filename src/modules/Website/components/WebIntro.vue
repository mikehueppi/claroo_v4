<template>
    <v-layout
            align-center
            column
            justify-center
    >
        <div id="introClip"></div>
        <v-img id="introImage"
                src="/images/intro_child_vr.png"
        ></v-img>
    </v-layout>
</template>

<script>
    export default {
        name: "WebIntro",
        data: () => ({
        }),
    }
</script>

<style>
    #introClip {
        background-image: url("../../../../public/images/intro_background.jpg");
        background-size: cover;
        z-index: 10;
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }
    #introImage {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
        bottom: 0;
        background-size: cover;
    }
</style>