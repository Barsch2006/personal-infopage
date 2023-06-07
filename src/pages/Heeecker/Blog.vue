<script lang="ts">
export default {
};
</script>

<template>
    <v-card>
        <v-card-title>
            heeecker Blog
        </v-card-title>
        <v-card-subtitle>
            heeeckers persönliche Meinung
        </v-card-subtitle>
    </v-card>
    <v-list base-color="background" color="background" bg-color="background">
        <!-- <v-list-item>
            <v-card id="title" color="surface">
                <v-card-title>
                   Lorem
                </v-card-title>
                <v-card-subtitle>
                    01.01.2023
                </v-card-subtitle>
                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, eos.
                </v-card-text>
            </v-card>
        </v-list-item> -->
    </v-list>
</template>

<style scoped>
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

article,
div,
nav {
    margin-bottom: 10px;
}
</style>
