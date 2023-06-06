<script lang="ts">
export default {
    props: {
        height: {
            type: Number,
            required: true
        }
    },
    mounted() {
        // matrix animation for the canvas
        const canvas = this.$refs.matrixCanvas as HTMLCanvasElement;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const context = canvas.getContext('2d')!;
        const height = canvas.height = this.height;
        const width = canvas.width = window.innerWidth;
        const fontSize = 14;
        const columns = width / fontSize;
        const drops: number[] = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }
        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, width, height);
            context.fillStyle = '#0F0';
            context.font = `${fontSize}px arial`;
            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(Math.random() * 128);
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                context.fillText(text, x, y);
                if (y >= height && Math.random() > 0.99) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        setInterval(draw, 33);
    }
};
</script>

<template>
    <v-container fluid>
        <v-row :style="{ height: `${height}px` }">
            <canvas ref="matrixCanvas"></canvas>
        </v-row>
    </v-container>
</template>
  
<style scoped>
canvas {
    display: block;
}
</style>
  