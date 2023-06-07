<script lang="ts">
export default {
};
</script>

<template>
    <v-card>
        <v-card-title>
            Christians Blog
        </v-card-title>
        <v-card-subtitle>
            Christians persönliche Meinung
        </v-card-subtitle>
    </v-card>
    <v-list base-color="background" color="background" bg-color="background" title="Christians Blog">
        <v-list-item>
            <v-card color="surface">
                <v-card-title>
                    Mein alltäglicher (Coding-)Workflow
                </v-card-title>
                <v-card-subtitle>
                    07.06.2023
                </v-card-subtitle>
                <v-card-text>
                    <article>
                        Seit gut einem Jahr code ich quasi täglich und würde behaupten, dass ich mir über diesen
                        Zeitraum ein
                        paar Dinge angewöhnt, bzw. gelernt habe.
                    </article>
                    <article>
                        <h3>
                            Meine alltäglichen Tools
                        </h3>
                        <p>
                            Ich benutze VSCode als meinen standart Code-Editor. Das Design und die Extentions-Funktion
                            spricht mich einfach an. So kann ich verschiedenste Technologien mit einem Editor nutzen. <br>
                            Andere Editoren btw. IDEs nutze ich in folgenden Fällen:
                            - Eclipse für Java, insbesondere JavaFX <br>
                            - Android Studio für Android-Apps, insbesondere Flutter <br>
                            - Visual Studio für C# <br>
                            Außerdem benutze ich Git als Versionierungssystem. Ich habe mich für Git entschieden, da es mit
                            GitHub kompatibel ist und sehr weit verbreitet ist. <br>
                            Auf GitHub speichere ich meine Projekte und kann diese mit anderen teilen und um anderen die
                            Möglichkeit zu geben meinen Code zu verändern und für eigene Projekte zu nutzen. <br>
                        </p>
                    </article>
                    <article>
                        <h3>
                            Meine alltäglichen Technologien
                        </h3>
                        <p>
                            Mitlerweile habe ich mich über die Zeit an ein paar Technologien festgelegt, welche ich
                            besonders gerne und häufig nutze. Das wären:
                        </p>
                        <li>
                            <strong>
                                - TypeScript & Node.js
                            </strong>
                            <p>
                                TypeScript ist eine von Microsoft
                                entwickelte Programmiersprache, welche auf JavaScript basiert. Sie bietet eine
                                statische Typisierung, welche es ermöglicht, Fehler bereits zur Compile-Zeit zu
                                erkennen. Dies ist besonders hilfreich, da JavaScript eine dynamische Typisierung
                                besitzt, welche es ermöglicht, Variablen zur Laufzeit zu ändern. Dies kann zu
                                unerwarteten Fehlern führen, welche sich nur schwer finden lassen. TypeScript
                                verhindert dies, indem es bereits zur Compile-Zeit Fehler erkennt und diese
                                ausgibt. TypeScript ist
                                außerdem eine Superset von JavaScript, was bedeutet, dass JavaScript-Code in
                                TypeScript-Code übernommen werden kann. Dies ermöglicht es, bereits bestehenden
                                Code in TypeScript zu überführen, ohne diesen komplett neu schreiben zu müssen.
                            </p>
                        </li>
                        <li>
                            <strong>
                                - Vue.js & Vuetify
                            </strong>
                            <p>
                                Vue.js ist ein von Evan You entwickeltes
                                JavaScript-Framework.
                                Es ermöglicht es, Webseiten und Webanwendungen zu entwickeln. Vue.js ist ein
                                komponentenbasiertes Framework, was bedeutet, dass Webseiten aus einzelnen Komponenten
                                bestehen, welche wiederverwendet werden können. Dies ermöglicht es, Webseiten schnell und
                                einfach zu entwickeln. Ohne viel Code doppelt oder dreifach schreiben zu müssen.
                                Vuetify ist ein von John Leider entwickeltes
                                Framework, welches auf Vue.js basiert. Es bietet eine große Auswahl an
                                vorgefertigten Komponenten, welche es ermöglichen, Webseiten schnell und einfach
                                zu entwickeln.
                            </p>
                        </li>
                    </article>
                    <article>
                        <h3>
                            Meine Setup
                        </h3>
                        <p>
                            Ich benutze und brauche tatsächlich nicht viel, um meine tägliche Arbeit zu erledigen. Ein
                            einfacher Laptop, Tastatur, Maus und ein externer Monitor reichen mir vollkommen aus.
                            Programmieren ist letztendlich ja nur Text schreiben. Und meine Anwendungen benötigen nicht die
                            krassesten Ressourcen.
                        </p>
                    </article>
                </v-card-text>
            </v-card>
        </v-list-item>
    </v-list>
</template>

<style scoped>

h3 {
    color: #10c906;
}
.v-card {
    padding: 16px 10px;
}

.v-card-title,
.v-card-subtitle,
* {
    white-space: normal;
}

.v-card-subtitle {
    margin-top: -14px;
    font-size: 1em;
}

li {
    display: flex;
    flex-direction: column;
}

li p {
    padding-left: 40px;
}

article,
div,
nav {
    margin-bottom: 10px;
}
</style>
