<template>
    <div>
        <div v-for="(module, index) in modules" :key="module">
            <router-link :to="links[index]">
                <img v-if="index == moduleActive" :src="'/images/' + icons[index] + '_col.svg'" />
                <img v-else :src="'/images/' + icons[index] + '.svg'" />
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppNav',
        props: ['moduleActive'],
        data () {
            return {
                modules: ['dash', 'topics', 'tasks'],
                links: ['/Dashboard', '/Topics', '/Tasks'],
                icons: ['icon_dashboard', 'icon_topics', 'icon_tasks']
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .active {
        color: #ffffff;
    }
    .cl-app-module__nav {
        background-color: #8f8f8f;
        width: 80px;
        height: 100%;
        /* max-height: calc(100% - 132px);*/
        position: fixed;
        padding: 40px 0 0 8px;
        z-index: 80;
    }
    .cl-app-module__nav img {
        width: 64px;
        text-align: center;
        margin: 0 0 30px 0;
    }
</style>
