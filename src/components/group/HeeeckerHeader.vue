<script lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

export default {
    methods: {
        redirectToHome() {
            window.location.href = '/';
        },
        showDrawer() {
            this.show_drawer = !this.show_drawer;
        }
    },
    data() {
        return {
            show_drawer: false,
        };
    },
    created() {
        if (window.innerWidth > 1_200) {
            this.show_drawer = true; // if max-width is greater than 1200px, then set show_drawer to true
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
    <v-app-bar fixed height="64" :elevation="6" location="top">
        <v-app-bar-nav-icon @click="showDrawer()"></v-app-bar-nav-icon>
        <v-app-bar-title @click="redirectToHome">
            <p id="logologo">{{ `<heeecker-group />` }}</p>
            <p id="shortlogo">{{ `
                < h /> ` }}
            </p>
        </v-app-bar-title>
        <v-btn @click="toggleTheme" :icon="theme.global.current.value.dark ? 'mdi-weather-sunny': 'mdi-weather-night'"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="show_drawer">
        <v-list>
            <v-list-item link density="comfortable" href="/">
                Home
                <template v-slot:append>
                    <v-icon size="24" icon="mdi-home"></v-icon>
                </template>
            </v-list-item>
            <v-list-item link density="comfortable" href="/projects">
                Projekte
                <template v-slot:append>
                    <v-icon size="24" icon="mdi-xml"></v-icon>
                </template>
            </v-list-item>
            <v-list-item link density="comfortable" href="/heeecker/">
                Heeecker
                <template v-slot:append>
                    <v-avatar size="24" image="https://avatars.githubusercontent.com/u/89743412?v=4">
                    </v-avatar>
                </template>
            </v-list-item>
            <v-list-item link density="comfortable" href="/christian/">
                Christian.sh
                <template v-slot:append>
                    <v-avatar size="24" image="https://avatars.githubusercontent.com/u/109520303?v=4">
                    </v-avatar>
                </template>
            </v-list-item>
            <v-list-item link density="comfortable" href="/contact">
                Kontakt
                <template v-slot:append>
                    <v-icon size="24" icon="mdi-phone"></v-icon>
                </template>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
p {
    font-size: 24px;
}

#shortlogo {
    display: none;
}

.v-app-bar-title * {
    display: flex;
    align-content: center;
    justify-content: flex-start;
}

@media screen and (max-width: 450px) {
    header .v-btn:not(.v-app-bar-nav-icon) {
        display: none;
    }
}

@media screen and (max-width: 400px) {
    #shortlogo {
        display: block;
    }

    #logologo {
        display: none;
    }
}

@media screen and (max-width: 220px) {
    header p {
        display: none;
    }
}

.v-list {
    flex-direction: column;
}
</style>
