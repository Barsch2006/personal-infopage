<script lang="ts">
import WelcomeSlide from '@/components/user/WelcomeSlide.vue';

export default {
    components: {
        WelcomeSlide
    },
    data() {
        return {
            iconsize: window.innerWidth > 900 ? '100px' : window.innerWidth > 700 ? '60px' : '40px',
            showPolicyWarning: false,
        };
    },
    methods: {
        goToURL(url: string) {
            window.open(url, '_blank');
        }
    }
};
</script>

<template>
    <WelcomeSlide title="Christian.sh" subtitle="Christian" img="https://avatars.githubusercontent.com/u/109520303?v=4">
        - Hobby-Programmierer<br />
        - Aula Techniker <br />
        - Schüler <br />
    </WelcomeSlide>

    <v-item-group>
        <v-container>
            <v-row height="200px" style="padding-top: 20px;" no-gutters cols="12" md="8">
                <v-item>
                    <v-icon @click="goToURL('https://github.com/Barsch2006/')" :size="iconsize">
                        mdi-github
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-git
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-nodejs
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-language-javascript
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-language-typescript
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-vuejs
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-vuetify
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-language-python
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-language-java
                    </v-icon>
                </v-item>
            </v-row>
        </v-container>
    </v-item-group>

    <v-alert v-show="showPolicyWarning" style="z-index: 1024; margin: 20px;" max-width="500px" min-height="300px"
        color="warning" position="fixed" location="bottom left" variant="elevated">
        <v-alert-title>
            Datenschutz Hinweis
        </v-alert-title>

        <v-alert-text>
            <p>
                Sobald der Benutzer sich auf einen anderen Pfad: als <a href="/datenschutz">Datenschutz</a>, <a
                    href="/impressum">Impressum</a> oder <a href="/">Startsite</a>
                befinden, stimmt er der Weitergabe seiner Daten an Dritte zu. Dies ist notwendig, um die
                Profilbilder der Entwickler
                anzuzeigen. Der Benutzer bekommt auf der Startseite eine Warnung, dass seine Daten an Dritte
                weitergegeben werden können, wenn er sich weiter auf der Website umsieht.
                <a href="/datenschutz">Mehr Informationen</a>
            </p>
            <v-btn style="margin: 10px;" variant="outlined" color="secondary"
                @click="showPolicyWarning = false">Aktzeptieren</v-btn>
        </v-alert-text>
    </v-alert>
    <v-badge color="secondary" dot style="z-index: 1024; position: fixed; margin: 20px; bottom: 0; right: 0;"
        v-show="!showPolicyWarning">
        <v-icon color="warning" @click="showPolicyWarning = true" icon="mdi-information-box-outline"
            size="x-large"></v-icon>
    </v-badge>
</template>

<style scoped></style>
