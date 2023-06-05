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
            <v-img height="400" src="https://avatars.githubusercontent.com/u/89743412?v=4" />
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
        </v-card>
        <v-divider></v-divider>
        <v-timeline density="comfortable" side="end">
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        2022
                    </v-card-title>
                    <v-card-subtitle>
                        Unterrichten von SmallBasic
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Warum hab ich das gemacht?
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-sheet>
</template>

<style scoped></style>
