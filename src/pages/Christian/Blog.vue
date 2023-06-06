<script lang="ts">
export default {
    data() {
        return {
            showPolicyWarning: false,
        };
    }
};
</script>

<template>
    <v-list base-color="background" color="background" bg-color="background" title="Christians Blog">
        <v-list-item>
            <v-card color="surface">
                <v-card-title>
                    Digitalisierung an Schulen
                </v-card-title>
                <v-card-subtitle>
                    06.06.2023
                </v-card-subtitle>
                <v-card-text>
                   <i>coming soon</i>
                </v-card-text>
                <v-card-actions>
                    <i style="font-size: 14px;">- Persönliche Meinung</i>
                </v-card-actions>
            </v-card>
        </v-list-item>
    </v-list>

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
