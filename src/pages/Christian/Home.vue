<script lang="ts">
import WelcomeSlide from '@/components/user/WelcomeSlide.vue';

export default {
    components: {
        WelcomeSlide
    },
    data() {
        return {
            iconsize: window.innerWidth > 900 ? '100px' : window.innerWidth > 700 ? '60px' : '40px',
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
</template>

<style scoped></style>
