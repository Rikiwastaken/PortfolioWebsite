<template>
    <!-- Background layers -->
    <div class="page-background">
        <div v-for="(image, index) in backgroundImages" :key="index" class="background-image"
            :class="{ visible: activeLayer === index }" :style="{ backgroundImage: image }"></div>
    </div>

    <v-container fluid class="game-page py-10">

        <!-- Game embeds -->
        <v-row justify="center">
            <v-col v-for="game in games" :key="game.id" cols="12" class="d-flex justify-center">
                <v-card class="game-card pa-3" elevation="4">
                    <iframe :src="`https://itch.io/embed/${game.id}`" width="552" height="167" frameborder="0"
                        loading="lazy" class="itch-embed" @mouseenter="setBackground(game)"
                        @mouseleave="clearBackground"></iframe>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const activeLayer = ref(-1)

const backgroundImages = ref([
    'none',
    'none'
])

let transitionTimeout = null

function setBackground(game) {
    // Don't restart the transition for the same game
    if (backgroundImages.value.some(image => image.includes(game.image))) {
        const currentImage = backgroundImages.value[activeLayer.value]
        if (currentImage?.includes(game.image)) return
    }

    clearTimeout(transitionTimeout)

    // Find the hidden layer
    const nextLayer = activeLayer.value === 0 ? 1 : 0

    // Set the new image on the hidden layer
    backgroundImages.value[nextLayer] =
        `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${game.image}')`

    // Force the browser to apply the image before fading it in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            activeLayer.value = nextLayer
        })
    })
}

function clearBackground() {
    clearTimeout(transitionTimeout)

    // Fade out the currently visible layer
    const previousLayer = activeLayer.value
    activeLayer.value = -1

    // Clear the old image after the transition
    transitionTimeout = setTimeout(() => {
        backgroundImages.value[previousLayer] = 'none'
    }, 850)
}

onUnmounted(() => {
    clearTimeout(transitionTimeout)
})

const games = [
    {
        id: '5089056',
        title: 'GyroCore',
        author: 'Riki',
        url: 'https://rikiwastaken.itch.io/gyrocore',
        image: '/images/games/GyroCore.png'
    },
    {
        id: '4584560',
        title: 'Megarun',
        author: 'Riki, yyna',
        url: 'https://rikiwastaken.itch.io/megarun',
        image: '/images/games/Megarun.png'
    },
    {
        id: '4304551',
        title: 'Survive the BackdoomS',
        author: 'Riki, Pauline J., Folet, Liam Atlas',
        url: 'https://rikiwastaken.itch.io/survive-the-backdooms',
        image: '/images/games/SurviveTheBackdooms.png'
    },
    {
        id: '4250092',
        title: 'Beneath The Mask',
        author: 'Riki, Pauline J., Liam Atlas',
        url: 'https://rikiwastaken.itch.io/beneath-the-mask',
        image: '/images/games/BeneathTheMask.png'
    },
    {
        id: '4056961',
        title: '3Dash',
        author: 'Riki',
        url: 'https://rikiwastaken.itch.io/3dash',
        image: '/images/games/3Dash.png'
    },
    {
        id: '4032218',
        title: 'Sisyphus Clicker',
        author: 'Riki',
        url: 'https://rikiwastaken.itch.io/sisyphus-clicker',
        image: '/images/games/SisyphusClicker.png'
    },
    {
        id: '958886',
        title: 'Eldon',
        author: 'Riki',
        url: 'https://rikiwastaken.itch.io/eldon',
        image: '/images/games/Eldon.png'
    }
]
</script>

<style scoped>
.page-background {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.background-image {
    position: absolute;
    inset: 0;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    opacity: 0;
    transition: opacity 0.8s ease-in-out;
}

.background-image.visible {
    opacity: 1;
}

.game-page {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    background: transparent;
}

.game-card {
    overflow-x: auto;
    border-radius: 16px;
    background: rgb(var(--v-theme-surface));
}

.itch-embed {
    display: block;
    width: 552px;
    height: 167px;
    max-width: none;
    border: none;
}
</style>
