<template>
    <div>
    <video autoplay muted loop id="introClip">
        <source src="/images/intro_universe.mp4" type="video/mp4">
    </video>
    <v-layout
            align-center
            column
            justify-center
    >
        <v-img id="introImage"
                src="/images/intro_child_vr.png"
        ></v-img>
    </v-layout>
    </div>
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
        z-index: 10;
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        display: none;
    }
    #introImage {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
        bottom: 0;
        background-size: cover;
        display: none;
    }
</style>