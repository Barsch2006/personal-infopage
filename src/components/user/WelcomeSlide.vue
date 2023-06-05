<script lang="ts">
export default {
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth
        };
    }
};
</script>

<template>
    <section class="main-section">
        <div class="column-section">
            <div class="title">
                <h1>{{ title }}</h1>
                <p id="subtitle">{{ subtitle }}</p>
            </div>
            <h2 style="margin-top: 40px;">
                <slot></slot>
            </h2>
        </div>
        <v-avatar :image="img" :size="innerWidth <= 900 ? '50vw' : innerWidth > innerHeight ? '30vw' : '30vh'"></v-avatar>
    </section>
</template>

<style scoped>
.title {
    display: inline-flex;
    flex-direction: column;
    width: auto;
}

.title h1 {
    font-size: 3em;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    letter-spacing: .15em;
    animation: typing 3s steps(40, end);
}

.title h2 {
    font-size: 2em;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

.main-section {
    width: 100%;
    min-height: calc(100vh - 200px);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 80px;
}

.column-section {
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
    min-height: calc(100% - 40px);
}

h2 {
    font-weight: 400;
    font-size: 1.5em;
    padding-left: 10px;
}

#subtitle {
    font-size: 2em;
    margin-left: 5px;
    margin-top: -20px;
}

@media screen and (max-width: 900px) {
    .main-section {
        flex-direction: column-reverse;
        justify-content: center;
        padding-top: 40px;
        padding-left: 15px;
        padding-right: 10px;
    }

    .column-section {
        padding-top: 20px;
        padding-left: 5px;
    }

    h2 {
        font-weight: 400;
        padding-left: 10px;
    }
}

@media screen and (max-width: 600px) {
    .title h1 {
        font-size: 2em;
    }

    #subtitle {
        font-size: 1.2em;
        margin-top: -8px;
    }

    h2 {
        font-size: 1.2em;
    }
}

@media screen and (max-width: 400px) {
    .title h1 {
        font-size: 1.5em;
    }

    #subtitle {
        font-size: 1.2em;
        margin-top: -8px;
    }

    h2 {
        font-size: 1.2em;
    }
}
</style>
