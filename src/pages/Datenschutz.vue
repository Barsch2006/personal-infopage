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
                    Haftbeschränkungen
                </v-card-title>

                <v-card-text>
                    Die Inhalte dieser Internetseite werden mit größtmöglicher Sorgfalt recherchiert. Dennoch können wir
                    keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereit gestellten Informationen
                    übernehmen.

                    Wir sind bemüht, die Website unterbrechungsfrei zum Abruf anzubieten. Auch bei aller gebotenen Sorgfalt
                    können aber temporäre Ausfallzeiten nicht ausgeschlossen werden.

                    Diese Website umfasst Links und Einbettung auf/ von andere Webseiten. Diese unterliegen der Haftung des
                    jeweiligen Betreibers. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung
                    und auf die Inhalte der verknüpften Seiten. Etwaige Haftungsansprüche sind an den jeweiligen Anbieter zu
                    richten. Eine ständige Kontrolle dieser externen Links ist für uns ohne einen Grund nicht zumutbar. Bei
                    Kenntnis von Rechtsverstößen o.ä. werden derartige externe Links selbstverständlich so schnell wie
                    möglich entfernt.
                </v-card-text>
            </v-card>
        </v-list-item>

        <v-list-item>
            <v-card>
                <v-card-title>
                    Urheberrecht
                </v-card-title>

                <v-card-text>
                    Sofern nicht anders gekenntzeichnet unterliegen alle Medien, sowohl in Bild als auch Schrift dem
                    Betreiber der Website. Eine Vervielfältigung oder Verwendung der Medien in anderen elektronischen oder
                    gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Betreibers nicht gestattet. Dies gilt
                    auch für die Verwendung der Medien in anderen Webseiten. Die Verwendung der Medien in anderen Webseiten
                    ist nur mit ausdrücklicher Zustimmung des Betreibers gestattet.
                </v-card-text>
            </v-card>
        </v-list-item>

        <v-list-item>
            <v-card>
                <v-card-title>
                    Datenschutz
                </v-card-title>

                <v-card-text>
                    <article>
                        <h3>
                            Allgemeines
                        </h3>
                        <p>
                            Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im Internet Sicherheitslücken
                            aufweisen kann und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann. Die
                            Verwendung der im Rahmen der Website veröffentlichen Kontaktdaten zu gewerblichen Zwecken ist
                            ausdrücklich nicht erwünscht, es sei denn, der Anbieter hat zuvor seine schriftliche
                            Einwilligung erteilt oder es besteht bereits ein geschäftlicher Kontakt. Der Anbieter und alle
                            auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und
                            Weitergabe ihrer Daten. Die Nutzung der Kontaktdaten durch Dritte zur gewerblichen Nutzung ist
                            ausdrücklich nicht erwünscht.
                        </p>
                    </article>
                    <article>
                        <h3>
                            Externe Links
                        </h3>
                        <p>
                            Es werden keine Daten an Anbieter externer Links gesendet, sofern der Besucher nicht selbst die
                            Links öffnet.
                        </p>
                    </article>
                    <article>
                        <h3>
                            Dritte
                        </h3>
                        <p>
                            Sobald der Benutzer sich auf einen anderen Pfad: als Datenschutz, Impressum oder Startseite
                            befinden, stimmt er der Weitergabe seiner Daten an Dritte zu. Dies ist notwendig, um die
                            Profilbilder der Entwickler
                            anzuzeigen. Der Benutzer bekommt auf der Startseite eine Warnung, dass seine Daten an Dritte
                            weitergegeben werden können, wenn er sich weiter auf der Website umsieht.
                        </p>
                    </article>
                    <article>
                        <h3>
                            Zustimmung
                        </h3>
                        <p>
                            Durch die Nutzung dieser Website stimmt der Benutzer der Verarbeitung der über ihn/ sie
                            erhobenen
                            Daten durch
                            GitHub in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck zu.
                        </p>
                    </article>
                </v-card-text>
            </v-card>
        </v-list-item>

        <v-list-item>
            <v-card>
                <v-card-title>
                    Anwendbares Recht
                </v-card-title>

                <v-card-text>
                    Es gilt lediglich das Recht der Bundesrepublik Deutschland.
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
}
</style>
