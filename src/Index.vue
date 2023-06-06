<script lang="ts">
import HeeeckerHeader from './components/group/HeeeckerHeader.vue';
import UserHeader from './components/user/UserHeader.vue';
import LinkData from './components/user/UserLinkData';

export default {
  components: {
    HeeeckerHeader,
    UserHeader
  },
  data() {
    return {
      showHeeeckerHeeeder: window.location.pathname.includes('/heeecker') || window.location.pathname.includes('/christian/') ? false : true,
      headerlinks: window.location.pathname.includes('/heeecker') ? new LinkData('https://github.com/filip326/') : new LinkData('https://github.com/Barsch2006/'),
      headerpath: window.location.pathname.includes('/heeecker') ? 'heeecker' : 'christian',
      headertitle: window.location.pathname.includes('/heeecker') ? 'heeecker' : 'Christian.sh',
      headersubtitle: window.location.pathname.includes('/heeecker') ? 'Filip' : 'Christian',
      headeravatar: window.location.pathname.includes('/heeecker') ? 'https://avatars.githubusercontent.com/u/89743412?v=4' : 'https://avatars.githubusercontent.com/u/109520303?v=4',
    };
  },
};
</script>

<template>
  <v-app>
    <HeeeckerHeader v-if="showHeeeckerHeeeder" />
    <UserHeader v-if="!showHeeeckerHeeeder" :path="headerpath" :title="headertitle" :subtitle="headersubtitle"
      :avatar="headeravatar" :links="headerlinks" />

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer>
      <a href="/impressum">Impressum</a>
      <a href="/datenschutz">Datenschutz</a>
    </v-footer>
  </v-app>
</template>

<style>
.v-main {
  min-height: 100vh;
}

.v-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 14px;
  flex-direction: column;
}

.v-footer a {
  text-decoration: none;
}

footer div a:hover {
  text-decoration: underline;
}
</style>
