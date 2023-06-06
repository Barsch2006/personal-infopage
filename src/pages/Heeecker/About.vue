<script lang="ts">
export default {
    data() {
        return {
            innerWidth: window.innerWidth,
            iconsize: '40px',
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
    <v-sheet color="background" style="padding: 10px;">
        <v-card color="background" elevation="0">
            <v-parallax height="400" src="/img/code.jpeg" />
            <v-card-title style="width: 100%; display: inline-flex; align-items: center; justify-content:space-between;">
                heeecker
                <v-card-actions style="padding-left: 10px; padding-right: 10px;">
                    <v-icon @click="goToURL('https://github.com/filip326/')" :size="iconsize">
                        mdi-github
                    </v-icon>
                </v-card-actions>
            </v-card-title>
            <v-card-subtitle>
                Filip
            </v-card-subtitle>
            <v-card-text style="font-size: 18px;">
                Hallo. <br>
                Ich bin Filip, 15 Jahre alt und komme aus Deutschland - Bin aktuell aber in Kanada. <br>
            </v-card-text>
            <v-card-item>
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
            </v-card-item>
        </v-card>
        <v-divider></v-divider>
        <v-timeline density="comfortable" side="end">
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        2021
                    </v-card-title>
                    <v-card-subtitle>
                        Lernen von Java
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum deleniti quos iste
                                    explicabo debitis vitae sit, soluta accusamus fugit corrupti quod. Optio ipsum quae ex
                                    aspernatur, facere modi veritatis excepturi incidunt eaque. Exercitationem porro
                                    laudantium quaerat explicabo error, nihil quisquam deserunt hic repellat, ex corporis
                                    dolores soluta vero reiciendis.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        2021
                    </v-card-title>
                    <v-card-subtitle>
                        Lernen von Java
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum deleniti quos iste
                                    explicabo debitis vitae sit, soluta accusamus fugit corrupti quod. Optio ipsum quae ex
                                    aspernatur, facere modi veritatis excepturi incidunt eaque. Exercitationem porro
                                    laudantium quaerat explicabo error, nihil quisquam deserunt hic repellat, ex corporis
                                    dolores soluta vero reiciendis.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-sheet>
</template>

<style scoped>
.v-card-subtitle {
    margin-top: -14px;
    font-size: 1em;
}
</style>
