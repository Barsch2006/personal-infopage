<script lang="ts">
import WelcomeSlide from '@/components/user/WelcomeSlide.vue';

export default {
    components: {
        WelcomeSlide
    },
    data() {
        return {
            iconsize: window.innerWidth > 900 ? '100px' : window.innerWidth > 700 ? '60px' : '40px'
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
    <WelcomeSlide title="heeecker" subtitle="Filip" img="https://avatars.githubusercontent.com/u/89743412?v=4">
        - Hobby-Programmierer<br />
        - Aula Techniker <br />
        - Schüler <br />
    </WelcomeSlide>

    <v-item-group>
        <v-container>
            <v-row cols="12" md="4">
                <v-item>
                    <v-icon @click="goToURL('https://github.com/filip326/')" :size="iconsize">
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
                        mdi-language-csharp
                    </v-icon>
                </v-item>
                <v-item>
                    <v-icon :size="iconsize">
                        mdi-dot-net
                    </v-icon>
                </v-item>
            </v-row>
        </v-container>
    </v-item-group>
</template>

<style scoped></style>
