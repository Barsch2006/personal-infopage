<script lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';
import LinkData from './UserLinkData';

export default {
    props: {
        path: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        links: {
            type: LinkData,
            required: true
        }
    },
    data() {
        return {
            drawer: true,
            rail: true,
        };
    },
    methods: {
        redirectToHome() {
            window.location.href = '/';
        }
    },
    setup() {
        const theme = useTheme();
        return {
            theme,
            toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'heeeckerLightTheme' : 'heeeckerTheme'
        };
    },
};
</script>

<template>
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item :prepend-avatar="avatar" :title="title" :subtitle="subtitle" nav>
            <template v-slot:append>
                <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list base-color="primary" density="compact" nav>
            <v-list-item link href="/" prepend-icon="mdi-home" title="Home"></v-list-item>
            <v-list-item link :href="`/${path}/about`" prepend-icon="mdi-information-variant" title="About"></v-list-item>
            <v-list-item link :href="`/${path}/blog`" prepend-icon="mdi-pen" title="Blog"></v-list-item>
            <v-list-item link :href="links.github" prepend-icon="mdi-github" title="GitHub"></v-list-item>

            <v-list-item style="position: fixed; width: 239px; bottom: 0;" @click="toggleTheme"
                :prepend-icon="theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                :title="theme.global.current.value.dark ? 'Lightmode' : 'Darkmode'"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped></style>
