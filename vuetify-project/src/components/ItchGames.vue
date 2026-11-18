<template>
    <v-container class="game-page py-8 py-md-12">
        <header class="page-heading">
            <h1>Itch.io games</h1>
            <p>Hover over a game to see more about it. The Itch embeds load one after another.</p>
        </header>

        <div class="games-layout">
            <section class="embed-list" aria-label="Published games">
                <article v-for="game in games" :key="game.id" class="embed-row"
                    :class="{ active: selectedGame.id === game.id }" @mouseenter="selectGame(game)"
                    @focusin="selectGame(game)">
                    <p class="game-title">{{ game.title }}</p>
                    <v-card class="game-card" elevation="0">
                        <iframe v-if="readyEmbedIds.has(game.id)" :src="`https://itch.io/embed/${game.id}`"
                            :title="`${game.title} on itch.io`" width="552" height="167" frameborder="0"
                            class="itch-embed"></iframe>
                        <div v-else class="embed-preview">
                            <v-img :src="game.image[0]" :alt="`${game.title} preview`" contain></v-img>
                            <span>Loading Itch embed...</span>
                        </div>
                    </v-card>
                </article>
            </section>

            <aside class="game-details" aria-live="polite">
                <v-img :src="selectedGame.image[0]" :alt="`${selectedGame.title} artwork`" class="game-image" contain>
                    <template #placeholder>
                        <div class="image-placeholder">{{ selectedGame.title }}</div>
                    </template>
                </v-img>
                <div class="details-copy">
                    <h2>{{ selectedGame.title }}</h2>
                    <p>{{ selectedGame.summary }}</p>
                    <p><strong>Contributions:</strong> {{ selectedGame.partIdid }}</p>
                    <a :href="selectedGame.url" target="_blank" rel="noopener noreferrer">
                        View on itch.io
                        <v-icon icon="mdi-arrow-up-right" size="16"></v-icon>
                    </a>
                </div>
            </aside>
        </div>
    </v-container>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const games = [
    {
        id: '5089056',
        title: 'GyroCore',
        url: 'https://rikiwastaken.itch.io/gyrocore',
        image: ['/images/games/GyroCore.png'],
        partIdid: 'Code, Level Design, Art',
        summary: 'GyroCore is a horror game in which the player controls the movements of a sphere by tilting the whole map. They must gather Energy Cores while avoiding deadly machines with each their own unique movement patterns.'
    },
    {
        id: '4584560',
        title: 'Megarun',
        url: 'https://rikiwastaken.itch.io/megarun',
        image: ['/images/games/Megarun.png'],
        partIdid: 'Code, Art',
        summary: 'Megarun is a speedrun puzzle platformer in which the player must shoot targets as fast as possible. To do so, they can stop time and reorganize the level. Each level can be completed either as fast as possible, with as few permutations as possible, or with as few timestops as possible.\nGame made for the TeleGameJam2026'
    },
    {
        id: '4304551',
        title: 'Survive the BackdoomS',
        url: 'https://rikiwastaken.itch.io/survive-the-backdooms',
        image: ['/images/games/SurviveTheBackdooms.png'],
        partIdid: 'Code, Level Design',
        summary: 'Survive the BackdoomS is a Survivor-like first person shooter in which the player must defeat waves of enemies, which grants him random bonuses. The player can also find and use different weapons, and gather an array of powerups to help them survive longer.\nGame made for the Brackeys Game Jam 2026.1'
    },
    {
        id: '4250092',
        title: 'Beneath The Mask',
        url: 'https://rikiwastaken.itch.io/beneath-the-mask',
        image: ['/images/games/BeneathTheMask.png'],
        partIdid: 'Code, Level Design',
        summary: 'Beneath The Mask is a horror game in which the player explores a house while avoiding a monster that is hunting them. The player must gather 5 clues in order to unmask the monster.\nThe player may crouch and turn off their flashlight to avoid being detected, but the monster will still be able to hear them.\nGame made for Global Game Jam 2026'
    },
    {
        id: '4056961',
        title: '3Dash',
        url: 'https://rikiwastaken.itch.io/3dash',
        image: ['/images/games/3Dash.png'],
        partIdid: 'Code, Level Design, Art',
        summary: '3Dash is a runner game in which the player must avoid obstacles by dashing to one of the corners of the screen. The player can also dash through obstacles to destroy them, but this will cost them some health. The player can also gather powerups to help them survive longer.'
    },
    {
        id: '4032218',
        title: 'Sisyphus Clicker',
        url: 'https://rikiwastaken.itch.io/sisyphus-clicker',
        image: ['/images/games/SisyphusClicker.png'],
        partIdid: 'Code, Level Design, Art',
        summary: 'Sisyphus Clicker is a parodic clicker game in which the player must to help Sisyphus push a boulder up a hill. The player can gather different powerups to help them push the boulder faster, and fight in the colyseum to earn more powerups, and ultimately defeat Zeus.\nGame made for the Game Jam Connexions 2025.'
    },
    {
        id: '958886',
        title: 'Eldon',
        url: 'https://rikiwastaken.itch.io/eldon',
        image: ['/images/games/Eldon.png'],
        partIdid: '"Code", Level Design',
        summary: 'Eldon is a demo for a dark RPG maker game made when I started learning game development.'
    }
]

const selectedGame = ref(games[0])
const readyEmbedIds = ref(new Set())
const loadTimers = []

function selectGame(game) {
    selectedGame.value = game
}

onMounted(() => {
    games.forEach((game, index) => {
        loadTimers.push(setTimeout(() => {
            readyEmbedIds.value = new Set([...readyEmbedIds.value, game.id])
        }, index * 900))
    })
})

onUnmounted(() => {
    loadTimers.forEach(timer => clearTimeout(timer))
})
</script>

<style scoped>
.game-page {
    max-width: 1240px;
    color: #242621;
}

.page-heading {
    margin-bottom: 3rem;
}

.kicker {
    margin-bottom: 0.75rem;
    color: #ae4f35;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
}

h1,
h2,
p {
    margin-top: 0;
}

h1 {
    margin-bottom: 0.8rem;
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    font-weight: 700;
    letter-spacing: -0.07em;
    line-height: 0.95;
}

.page-heading>p:last-child {
    margin-bottom: 0;
    color: #66675f;
}

.games-layout {
    display: grid;
    align-items: start;
    gap: clamp(2rem, 7vw, 7rem);
    grid-template-columns: minmax(0, 552px) minmax(280px, 1fr);
}

.embed-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.embed-row {
    border-left: 3px solid transparent;
    padding-left: 1rem;
    transition: border-color 0.2s ease;
}

.embed-row.active {
    border-left-color: #ae4f35;
}

.game-title {
    margin-bottom: 0.5rem;
    color: #66675f;
    font-size: 0.9rem;
    font-weight: 600;
}

.game-card {
    overflow: hidden;
    border: 1px solid #c5c3ba;
    border-radius: 0;
    background: #f2f0e9;
}

.embed-preview {
    display: block;
    position: relative;
    width: 100%;
    height: 167px;
    background: #d3d0c7;
}

.embed-preview .v-img {
    height: 100%;
    opacity: 0.72;
}

.embed-preview span {
    position: absolute;
    inset: 50% auto auto 50%;
    padding: 0.65rem 0.9rem;
    transform: translate(-50%, -50%);
    color: #242621;
    background: #f2f0e9;
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
}

.itch-embed {
    display: block;
    width: 100%;
    height: 167px;
    max-width: 552px;
    border: none;
}

.game-details {
    position: sticky;
    top: 5rem;
    overflow: hidden;
    border: 1px solid #c5c3ba;
    background: #f2f0e9;
}

.game-image {
    height: min(32vw, 330px);
    min-height: 220px;
    background: #d3d0c7;
}

.image-placeholder {
    display: grid;
    height: 100%;
    place-items: center;
    color: #66675f;
}

.details-copy {
    padding: 1.5rem;
}

.details-copy .kicker {
    margin-bottom: 0.5rem;
}

.details-copy h2 {
    margin-bottom: 0.8rem;
    font-size: 2rem;
    letter-spacing: -0.05em;
}

.details-copy p:not(.kicker) {
    margin-bottom: 1.3rem;
    color: #66675f;
    line-height: 1.65;
}

.details-copy a {
    color: #ae4f35;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
}

.details-copy a .v-icon {
    margin-left: 0.2rem;
    vertical-align: middle;
}

@media (max-width: 850px) {
    .games-layout {
        grid-template-columns: 1fr;
    }

    .game-details {
        position: static;
        grid-row: 1;
    }

    .game-image {
        height: min(60vw, 330px);
    }

    .itch-embed {
        width: 100%;
        max-width: 552px;
    }
}
</style>
