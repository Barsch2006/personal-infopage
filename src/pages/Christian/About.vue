<script lang="ts">
export default {
    data() {
        return {
            innerWidth: window.innerWidth,
            iconsize: '32px',
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
            <v-img height="400" src="https://avatars.githubusercontent.com/u/109520303?v=4" />
            <v-card-title style="width: 100%; display: inline-flex; align-items: center; justify-content:space-between;">
                Christian.sh
                <v-card-actions style="padding-left: 10px; padding-right: 10px;">
                    <v-icon @click="goToURL('https://github.com/Barsch2006/')" :size="iconsize">
                        mdi-github
                    </v-icon>
                </v-card-actions>
            </v-card-title>
            <v-card-subtitle>
                Christian
            </v-card-subtitle>
            <v-card-text style="font-size: 18px;">
                Moin! <br>
                Ich bin Christian, 16 Jahre alt und komme aus Frankfurt. <br>
            </v-card-text>
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
        </v-timeline>
    </v-sheet></template>

<style scoped></style>
