<script lang="ts">
import { projects, frameworks, type Framework, type IProjectsPreview } from './projects';
import { ref } from 'vue';

export default {
    data() {
        return {
            searchQuery: '',
            selectedFrameworks: Array<Framework>(),
            frameworks,
            moreInfoProject: ref<IProjectsPreview>(),
            window: 'list',
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
                <v-card-actions>
                    <v-btn @click="window = 'list'">Zurück</v-btn>
                </v-card-actions>
            </v-card>
        </v-window-item>

        <v-window-item value="list">
            <v-container>
                <v-form>
                    <v-text-field v-model="searchQuery" label="Projekte durchsuchen"></v-text-field>
                    <v-chip-group multiple>
                        <v-chip filter v-for="framework in frameworks" :key="framework" class="ma-2"
                            @click="handleFrameworkSelection(framework)">
                            {{ framework }}
                        </v-chip>
                    </v-chip-group>
                </v-form>
                <v-divider></v-divider>
                <br>
                <v-row>
                    <v-alert v-if="filteredProjects.length == 0" color="error" title="Error" text="Keine Projekte gefunden"
                        variant="tonal"></v-alert>
                    <v-col cols="12" sm="6" md="4" v-for="project, index in filteredProjects" :key="project.title">
                        <v-card height="300" style="padding: 10px;">
                            <v-card-title>{{ project.title }}</v-card-title>
                            <v-card-subtitle>
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
</template>

<style scoped>
.v-main {
    min-height: calc(100vh);
}

.v-card-subtitle {
    height: 18px;
}
</style>
