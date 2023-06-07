<script lang="ts">
import { projects, frameworks } from './projects';

export default {
    data() {
        return {
            frameworks: Array.from(frameworks),
            moreInfoProject: Object(),
            window: 'list',
            projects,
        };
    },
    beforeMount() {
        // if the window.location has a #<id> in it, open the details of the project
        const id = window.location.hash.replace('#', '');
        if (id) {
            this.openDetails(parseInt(id));
        }
    },
    methods: {
        openDetails(id: number) {
            this.moreInfoProject = projects[id] ?? null;
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
                <v-card-actions>
                    <v-container>
                        <v-row align-content="center">
                            <v-chip-group>
                                <v-chip v-for="contributor in moreInfoProject?.contributors" :key="contributor.name"
                                    :text="contributor.name" :href="contributor.url" link></v-chip>
                            </v-chip-group>
                        </v-row>
                    </v-container>
                </v-card-actions>
                <v-card-text>
                    <p style="line-height: 1em;">{{ moreInfoProject?.finished ? '✔ Abgeschlossen' : '⚠ In Arbeit' }}</p>
                    <br>

                    <div v-bind:key="index" v-for="moreInfo, index in moreInfoProject?.moreInfo">
                        <p style="font-size: 16px;" v-if="moreInfo.type == 'text'">
                            {{ moreInfo.text }}
                        </p>
                        <v-img :src="moreInfo.img" v-if="moreInfo.type == 'img'"></v-img>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-container>
                        <v-row>
                            <v-chip-group>
                                <v-chip v-for="framework in moreInfoProject?.frameworks" :key="framework" outlined>
                                    {{ framework }}
                                </v-chip>
                            </v-chip-group>
                        </v-row>
                    </v-container>
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
                <v-row>
                    <v-alert v-if="projects.length == 0" color="info" title="Keine Projekte"
                        text="Ihre Suche konnte kein Ergebnis liefern. Bitte versuchen Sie es mit anderen Suchbegriffen oder Filtern."
                        variant="tonal"></v-alert>
                    <v-col cols="12" sm="6" md="4" v-for="project in projects" :key="project.title">
                        <v-card min-height="300" style="padding: 10px;">
                            <v-card-title>{{ project.title }}</v-card-title>
                            <v-card-subtitle>
                                <p style="line-height: 1em;">{{ project.finished ? '✔ Abgeschlossen' : '⚠ In Arbeit' }}</p>
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
                                <v-btn color="primary" @click="openDetails(project.id)">Mehr Details</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-window-item>
    </v-window>
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
