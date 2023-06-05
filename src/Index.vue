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
      <div id="d1">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <a href="https://pictogrammers.com/library/mdi/">mdi-icons</a>
      </div>
      <div dir="d2">
        <a href="/">Home</a>
        <a href="/heeecker">heeecker</a>
       <a href="/christian">Christian</a>
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped>
.v-main {
  min-height: 100vh;
}

footer {
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background-color: #121212;
  gap: 14px;
}

footer * {
  text-decoration: none;
}

footer div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
}

footer div#d1 {
  align-items: flex-end;
}

footer div#d2 {
  align-items: flex-start;
}

footer div a:hover {
  text-decoration: underline;
}
</style>
