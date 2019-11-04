<template>
  <v-app>
    <AppHeader/>
    <v-content>
      <router-view/>
      <AppPrivacyStatementBar/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppPrivacyStatementBar from './components/AppPrivacyStatementBar';

export default {
  name: 'App',
  components: {
    AppHeader, AppPrivacyStatementBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "./src/styles/app.scss";
</style>
