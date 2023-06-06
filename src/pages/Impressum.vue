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
    <v-list bg-color="background">
        <v-list-item>
            <v-card>
                <v-card-title>
                    Verantwortlich für den Inhalt
                </v-card-title>

                <v-card-text>
                    <!-- Impressums text -->
                    <p>
                        <strong>Verantwortlich für den Inhalt:</strong> <a
                            href="https://github.com/Barsch2006">Barsch2006</a> & <a
                            href="https://github.com/filip326">heeecker</a>
                        <br />
                        <br />
                        <strong>E-Mail:</strong> <a
                            href="mailto:contact.heeecker.me@gmail.com">contact.heeecker.me@gmail.com</a>
                        <br />
                        <br />
                        <strong>Internet:</strong> <a href="https://group.heeecker.me/">https://group.heeecker.me/</a>
                    </p>
                </v-card-text>
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
    <v-badge color="secondary" dot style="z-index: 1024; position: fixed; margin: 20px; bottom: 0; left: 0;"
        v-show="!showPolicyWarning">
        <v-icon color="warning" @click="showPolicyWarning = true" icon="mdi-information-box-outline"
            size="x-large"></v-icon>
    </v-badge>
</template>

<style scoped>
article {
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 10px;
}</style>
