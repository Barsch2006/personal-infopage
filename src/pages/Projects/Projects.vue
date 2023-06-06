<script lang="ts">
import { projects, frameworks, type Framework, type IProjectsPreview } from './projects';
import { ref } from 'vue';

export default {
    data() {
        return {
            searchQuery: '',
            selectedFrameworks: Array<Framework>(),
            frameworks: Array.from(frameworks),
            moreInfoProject: ref<IProjectsPreview>(),
            window: 'list',
            showPolicyWarning: false,
        };
    },
    computed: {
        filteredProjects() {
            if (!this.searchQuery && this.selectedFrameworks.length === 0) return projects;
            const query = this.searchQuery.toLowerCase();
            return projects.filter(project => {
                const titleMatch = project.title.toLowerCase().includes(query);
                const frameworkMatch = this.selectedFrameworks.every((str: Framework) =>
                    project.frameworks.includes(str)
                );
                return titleMatch && frameworkMatch;
            });
        },
    },
    methods: {
        handleFrameworkSelection(framework: Framework) {
            const index = this.selectedFrameworks.indexOf(framework);
            if (index === -1) {
                this.selectedFrameworks.push(framework);
            } else {
                this.selectedFrameworks.splice(index, 1);
            }
        },
        openDetails(id: number) {
            this.moreInfoProject = projects[id];
            this.window = 'details';
        }
    },
};
</script>

<template>
    <v-window v-model="window">
        <v-window-item value="details">
            <v-card color="background" style="min-height: 100vh; padding: 20px;">
                <v-card-actions>
                    <v-icon @click="window = 'list'">mdi-chevron-left</v-icon>
                </v-card-actions>
                <v-card-title>
                    <h2>
                        {{ moreInfoProject?.title }}
                    </h2>
                </v-card-title>
                <v-card-text>
                    <p style="line-height: 1em;">{{ moreInfoProject?.finished ? '✔ Abgeschlossen': '⚠ In Arbeit' }}</p>
                    <br>

                    <div v-bind:key="index" v-for="moreInfo, index in moreInfoProject?.moreInfo">
                        <p style="font-size: 16px;" v-if="moreInfo.type == 'text'">
                            {{ moreInfo.text }}
                        </p>
                        <v-img :src="moreInfo.img" v-if="moreInfo.type == 'img'"></v-img>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-chip-group>
                        <v-chip v-for="framework in moreInfoProject?.frameworks" :key="framework" outlined>
                            {{ framework }}
                        </v-chip>
                    </v-chip-group>
                </v-card-actions>
                <v-card-subtitle>
                    <a v-if="moreInfoProject?.url != undefined && moreInfoProject?.url != null"
                        :href="moreInfoProject?.url ?? ''">GitHub Repository</a>
                    <p v-else>Repository ist aktuell privat</p>
                </v-card-subtitle>
                <v-card-actions style="margin-top: 20px;">
                    <v-btn variant="tonal" @click="window = 'list'">Zurück</v-btn>
                </v-card-actions>
            </v-card>
        </v-window-item>

        <v-window-item value="list">
            <v-container>
                <v-form>
                    <v-text-field v-model="searchQuery" label="Projekte durchsuchen" clearable></v-text-field>
                    <v-expansion-panels>
                        <v-expansion-panel title="Mehr Filter">
                            <v-expansion-panel-text>
                                <v-chip-group multiple>
                                    <v-chip filter v-for="framework in frameworks.sort()" :key="framework" class="ma-2"
                                        @click="handleFrameworkSelection(framework)">
                                        {{ framework }}
                                    </v-chip>
                                </v-chip-group>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-form>
                <v-divider></v-divider>
                <br>
                <v-row>
                    <v-alert v-if="filteredProjects.length == 0" color="info" title="Keine Projekte"
                        text="Ihre Suche konnte kein Ergebnis liefern. Bitte versuchen Sie es mit anderen Suchbegriffen oder Filtern."
                        variant="tonal"></v-alert>
                    <v-col cols="12" sm="6" md="4" v-for="project, index in filteredProjects" :key="project.title">
                        <v-card min-height="300" style="padding: 10px;">
                            <v-card-title>{{ project.title }}</v-card-title>
                            <v-card-subtitle>
                                <p style="line-height: 1em;">{{ project.finished ? '✔ Abgeschlossen': '⚠ In Arbeit' }}</p>
                                <a v-if="project?.url != undefined && project?.url != null"
                                    :href="project?.url ?? ''">GitHub Repository</a>
                                <p v-else>Repository ist aktuell privat</p>
                            </v-card-subtitle>
                            <v-card-text>
                                {{ project.description }}
                            </v-card-text>
                            <v-card-actions>
                                <v-chip-group>
                                    <v-chip v-for="framework in project.frameworks" :key="framework" outlined>
                                        {{ framework }}
                                    </v-chip>
                                </v-chip-group>
                            </v-card-actions>
                            <v-card-actions>
                                <v-btn color="primary" @click="openDetails(index)">Mehr Details</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-window-item>
    </v-window>
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
.v-main {
    min-height: calc(100vh);
}

.v-card-subtitle {
    height: 18px;
}

.v-card-title,
.v-card-subtitle,
* {
    white-space: normal;
}
</style>
