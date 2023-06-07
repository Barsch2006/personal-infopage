<script lang="ts">
import MatrixCanv from '@/components/MatrixCanv.vue';

export default {
    components: {
        MatrixCanv
    },
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
            <MatrixCanv :height="300" />
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
                Ich bin Filip.<br>
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
                        Beginn Kooperation mit Christian
                    </v-card-title>
                    <v-card-subtitle>
                        06.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Bei der Projektwoche der Schule im Jahr 2022 haben Christian und ich zusammengefunden
                                    und der Beginn einer Menge Projekte hat mit der Planung und Entwicklung des "SV
                                    Bildschirms" begonnnen.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Unterricht Informatik 9
                    </v-card-title>
                    <v-card-subtitle>
                        08.2022 - 01.2023
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Im Rahmen eines Pilotprojekts meines Informatik Lehrers war ich als "Schülerexperte"
                                    eine Lehrkraft für meine Mitschüler. Ich habe ihnen die Grundlagen der Programmierung
                                    mittels SmallBasic beigebracht und sie bei ihren Projekten unterstützt.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        ATec Start
                    </v-card-title>
                    <v-card-subtitle>
                        11.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Das Projekt der Digitalisierung der Anmeldung von Veranstaltungen der Aula Technik AG
                                    (kurz: ATec) hat begonnen.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        FloBot Start, Lernen von TS
                    </v-card-title>
                    <v-card-subtitle>
                        11.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Mit dem DiscordBot "FloBot", welchen ich gemeinsam mit Christian und einigen Mitglieder
                                    von Florian Dalwigks Discord Server entwickelt habe, habe ich angefangen TypeScript zu
                                    lernen.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Praktikum doIT
                    </v-card-title>
                    <v-card-subtitle>
                        01.2023
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Ich habe ein einwöchiges Schülerpraktikum bei doIT absolviert. Dort habe ich VMs
                                    aufgesetzt.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Auslandsaufenthalt Kanada
                    </v-card-title>
                    <v-card-subtitle>
                        02.2023 - 06.2023
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Ich war in Kanada für ein halbes Jahr und hatte sehr viel Langeweile. Christian hat mich
                                    dabei unterstützt.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        DolphinSchool Start
                    </v-card-title>
                    <v-card-subtitle>
                        04.2023
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    Start der Entwicklung der DolphinSchool, einer Plattform für Schüler und Lehrer, um das
                                    alte Program "Edunite" zu ersten. Es ist auf Benutzerfreundlichkeit ausgelegt.
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
        <div style="flex-direction: row; align-items: center; display: flex;">
            <v-icon>mdi-info</v-icon>
            <p>
                * geschätztes Datum
            </p>
        </div>
    </v-sheet>
</template>

<style scoped>
.v-card-title,
.v-card-subtitle,
* {
    white-space: normal;
}

.v-card-subtitle {
    margin-top: -14px;
    font-size: 1em;
}

.v-expansion-panel-text article,
div,
nav {
    margin-bottom: 10px;
}</style>
