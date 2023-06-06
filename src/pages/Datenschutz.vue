<script lang="ts">
export default {

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
                    Betreiber der Website.
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
                            Weitergabe ihrer Daten.
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
                            Einbettungen
                        </h3>
                        <p>
                            Es werden Daten von GitHub als Bilder eingebettet, um die Profilbilder der Entwickler anzuzeigen.
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
