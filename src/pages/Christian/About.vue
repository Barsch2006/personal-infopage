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
            <v-card-item>
                <v-item-group>
                    <v-container>
                        <v-row height="80px" no-gutters cols="12" md="8">
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
            </v-card-item>
        </v-card>
        <v-divider></v-divider>
        <v-timeline density="comfortable" side="end">
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Erste Programmiererfahrungen mit Java
                    </v-card-title>
                    <v-card-subtitle>
                        2021*
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    <article>
                                        <p>
                                            Mit dem Buch <i>Java Programmieren lernen für Einsteiger (2. Auflage)</i> (IBAN:
                                            9783966450034)
                                            von Michael Bonacina habe ich meine ersten Erfahrungen mit Java gesammelt. <br>
                                            Das gab mir erste Erfahrungen mit der objektorientierten Programmierung und der
                                            Typisierung. <br>
                                            Das Buch hatte ich nur bis zum Kapitel 10 gelesen, da ich mit JetBrains, der
                                            benutzten IDE einige Probleme hatte.
                                        </p>
                                    </article>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Schülerpraktikum, Deutsche Bank AG, TDI
                    </v-card-title>
                    <v-card-subtitle>
                        01.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    <article>
                                        <p>
                                            Für zwei Wochen habe ich ein (schulisches) Schülerpraktikum bei der
                                            Deutschen Bank AG im Bereich Technologie, Data and Innovation (kurz: TDI)
                                            absolviert. <br>
                                            Das Praktikum fand auf Grund der Covid-19 Pandemie im Homeoffice statt.
                                            Während des Praktikums habe ich diverse Workshops von einer dauer von 1-3
                                            Stunden
                                            absolviert.
                                            Einige Themen der Workshops waren: <br>
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Einführung in Python
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Einführung in die Objektorientierte Programmierung mit Java
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Einführung in die Agilität
                                                </p>
                                            </li>
                                        </ul>
                                    </article>
                                    <p>
                                        Aus dem Praktikum konnte ich meine ersten Erfahrungen mit Python und agiles Denken
                                        sammeln. Sowie die
                                        Grundlagen von der
                                        Webentwicklung mit HTML, CSS und JavaScript mitnehmen.
                                    </p>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Beginn der Zusammenarbeit mit heeecker
                    </v-card-title>
                    <v-card-subtitle>
                        07.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    <article>
                                        <p>
                                            In der Projektwoche der Schule habe ich mich dazu entschlossen mit in das
                                            Projekt der Schülervertretung (kurz: SV) einzuwählen. In dieser war Filip
                                            (heeecker) bereits sehr aktiv und wir beschlossen in den 4 Tagen den
                                            SV-Bildschirm zu designen und mit HTML und CSS umzusetzten. (Der Bildschirm
                                            übrigens existiert immernoch nicht (2023)). <br>
                                            In dieser letzten Schulwoche vor den Sommerferien half ich Filip und dem Rest
                                            der Aula-Technik-AG (kurz: ATec) bei der Einrichtung der Technik bei den letzten
                                            Veranstaltungen des Schuljahres. <br>
                                            Dies endete damit, dass ich nach den Sommerferien fester Bestandteil der ATec
                                            und der SV geworden bin und mit Filip eine Zusammenarbeit geschlossen habe,
                                            welche sehr viel mit Coding zu tun hat. xD
                                        </p>
                                    </article>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Lernen von Node.js und JavaScript
                    </v-card-title>
                    <v-card-subtitle>
                        09.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    <article>
                                        <p>
                                            Durch die Zusammenarbeit mit Filip kam ich zu dem Projekt von Filip und dem
                                            AG-Leiter der ATec, welches eine Digitalisierung für die Anmeldung von
                                            Veranstaltungen umfasst.
                                            Für das Backend habe ich mir dementsprechen Node.js und JavaScript angeeignet.
                                            Zusatz: Das Projekt ist aktuell privat und nicht online (2023)
                                        </p>
                                    </article>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Lernen von TypeScript und Discord.js
                    </v-card-title>
                    <v-card-subtitle>
                        11.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    <article>
                                        <p>
                                            Durch die Zusammenarbeit mit Filip kam ich zu dem Projekt von Filip und einigen
                                            Mitgliedern von Florian Dalwigks Discord-Server, welches ein Discord-Bot ist.
                                            <br>
                                            Der Bot wurde mittels TypeScript umgesetzt. Dazu habe ich mir TypeScript
                                            angeeignet, und die Typisierung von JavaScript verstanden. <br>
                                        </p>
                                    </article>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        (Gast-) Unterrichtsstunden Informatik
                    </v-card-title>
                    <v-card-subtitle>
                        11.2022 - 12.2022
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    <article>
                                        <p>
                                            In meinem WPU (Wahlpflichunterricht) Informatik habe ich zunächst in 2 folgenden
                                            Doppelstunden (über 2 Wochen) meinen Mitschülern HTML und CSS Grundlagen
                                            beigebracht. In der 2. Doppelstunde habe ich sie desweiteren ihre Websiten auf
                                            einen lokal-gehosteten Server auf einem SchulPC hochladen lassen. Bedauerlicher
                                            Weise hat die Speicherung der HTTP-Daten in eine SQLite Datenbank nicht
                                            funktioniert. Aus diesem Grund habe ich anschließend meinen Mitschülern trotzdem
                                            versucht das HTTP-Protokol Nahe zu bringen. <br>
                                            In der 3. Doppelstunde, einen Monat später, habe ich vorgeschlagen die
                                            Grundlagen von C++ für die Arduino programmierung auf TinkerCAD zu erklären.
                                            Dies wurde jedoch nicht über mehrere Wochen fortgesetzt, da sich meine
                                            Informatiklehrkraft für die Codeblöcke von TinkerCAD (ähnlich wie Scratch)
                                            entschieden hat und ich diese nicht unterrichten wollte.
                                        </p>
                                    </article>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item dot-color="primary" size="small">
                <v-card>
                    <v-card-title>
                        Lernen von Vue.js und Vuetify
                    </v-card-title>
                    <v-card-subtitle>
                        05-2023
                    </v-card-subtitle>
                    <v-card-text>
                        <v-expansion-panels>
                            <v-expansion-panel elevation="0" hide-actions title="Mehr Informationen">
                                <v-expansion-panel-text>
                                    <article>
                                        <p>
                                            Durch das Projekt <i>DolphinSchool</i>, welches von mir und Filip ins Leben
                                            gerufen wurde. Als Frontend haben wir für Vue.js in Kombination mit Vuetify
                                            entschieden. <br>
                                            Da wir beide bisher noch nicht so viel mit Vue.js und Vuetify gearbeitet haben,
                                            aber bereits Erfahrungen mit JavaScript und TypeScript hatten, war es für uns
                                            relativ einfach in das Framework einzusteigen.
                                        </p>
                                    </article>
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
}
</style>
