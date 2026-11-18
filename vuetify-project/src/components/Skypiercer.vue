<template>
    <main class="skypiercer-page">
        <v-container class="page-content py-8 py-md-12">
            <header class="page-header">
                <div>
                    <p class="kicker">MAIN PROJECT</p>
                    <h1>Skypiercer</h1>
                    <p class="intro">
                        A turn-based tactical RPG inspired by the Fire Emblem series.
                    </p>
                </div>
                <v-btn class="github-button" href="https://github.com/Rikiwastaken/SkypiercerFE" target="_blank"
                    rel="noopener noreferrer" variant="outlined" append-icon="mdi-open-in-new">
                    GitHub repository
                </v-btn>
            </header>

            <section class="feature">
                <v-img src="https://raw.githubusercontent.com/Rikiwastaken/SkypiercerFE/main/ReadmeImages/Title.png"
                    alt="Skypiercer title screen" class="title-image" cover>
                    <template #placeholder>
                        <div class="image-placeholder">Skypiercer</div>
                    </template>
                </v-img>
                <p class="image-caption">The current title screen.</p>
            </section>

            <section class="about-layout">
                <div>
                    <h2>Story</h2>
                    <p>
                        Follow Zack Farron and his allies as they travel the world in the midst of a terrifying war.
                        What begins as
                        a local incident escalates into a journey beyond their isolated village to stop Caelum, a force
                        plotting to
                        take over the world.
                    </p>
                </div>

                <aside class="build-info">
                    <h2>Current build</h2>
                    <p class="version">v0.22.0</p>
                    <dl>
                        <div v-for="stat in stats" :key="stat.label">
                            <dt>{{ stat.label }}</dt>
                            <dd>{{ stat.value }}</dd>
                        </div>
                    </dl>
                </aside>
            </section>

            <section class="Gameplay">
                <h2>Gameplay</h2>
                <div class="gameplay-system-list">
                    <article v-for="system in GamePlaySystems" :key="system.title" class="system">
                        <h3>{{ system.title }}</h3>
                        <img :src="system.icon" alt="" class="system-icon">
                        <div>
                            <p>{{ system.description }}</p>
                        </div>
                    </article>
                </div>
            </section>

            <section class="systems">
                <h2>Core Systems</h2>
                <div class="system-list">
                    <article v-for="system in systems" :key="system.title" class="system">
                        <img :src="system.icon" alt="" class="system-icon">
                        <div>
                            <h3>{{ system.title }}</h3>
                            <p>{{ system.description }}</p>
                        </div>
                    </article>
                </div>
            </section>

            <section class="closing-note">
                <h2>Credits</h2>
                <p>
                    Game design, concept, 3D Models and code by me without AI.
                </p>
                <p>
                    Music by <a href="https://maou.audio/category/bgm/"> Maoudamashii </a> and<a
                        href="https://youfulca.com/en/music_assets/"> Youfulca </a>
                </p>
                <p>
                    Icons by xoraki_rkd
                </p>
                <p>
                    Placeholder character images made with <a href="https://charat.me/en/"> Charat.me </a>.
                </p>
                <v-btn href="https://github.com/Rikiwastaken/SkypiercerFE" target="_blank" rel="noopener noreferrer"
                    variant="text" prepend-icon="mdi-github">
                    Open the source on GitHub
                </v-btn>
            </section>
        </v-container>
    </main>
</template>

<script setup>
const stats = [
    { label: 'Story maps', value: '19' },
    { label: 'Side story maps', value: '4' },
    { label: 'Characters', value: '18' },
    { label: 'Skills', value: '119' }
]

const systems = [
    {
        icon: '/images/Icons/SwordIcon.png',
        title: 'Blades',
        description: 'Each character can summon up to 3 different "Blades" from 8 different types. Each Blade has its own unique skillset and can be upgraded to become more powerful.\n Swords increase the user\'s Speed while staves can be used to heal, and spears are more precise. Each blades also influences the level ups of the characters.'
    },
    {
        icon: '/images/Icons/TelekinesisIcon.png',
        title: 'Telekinesis',
        description: 'Characters can either attack normally, or use their telekinetic powers to attack from a distance, albeit with a reduced damage and different stat scaling (Strength and Defense are replaced by Psyche and Resistance).'
    },
    {
        icon: '/images/Icons/PowerIcon.png',
        title: 'Battalions and examode',
        description: "Characters can be assigned to the battallion of of one the three protagonist once they are unlocked. Being assigned to a battallion gives passive bonuses to both the unit and the leader.\n\nAfter reaching a certain point in the story or complaining certain side missions, protagonists gain access to examode, which is a temporary overpowered state. It\'s effects differ for each protagonist, but they always empower both them and the units in thei battallion.The examode gauge fills up when the unit or their subordinates take action."
    },
    {
        icon: '/images/Icons/CopyIcon.png',
        title: 'Map effects',
        description: 'Terrain, elevation and weather can have varying effects on the units. For example, a Forest Tile increases the evasion of units standing on it, while a Desert Tile damages them each turn.'
    }
]

const GamePlaySystems = [
    {
        icon: '/images/SkypiercerScreens/CharacterImage.png',
        title: 'Characters',
        description: 'Each character has their own stat and growth rates (which corresponds to the odds of a stat increasing when levelling up). Thay also all have their own passive skill, which gives them stat boosts or new abilities. This skill levels up at certain character level thresholds.'
    },
    {
        icon: '/images/SkypiercerScreens/TelekImage.png',
        title: 'Telekinesis',
        description: 'Characters can either attack normally, or use their telekinetic powers to attack from a distance, albeit with a reduced damage and different stat scaling (Strength and Defense are replaced by Psyche and Resistance).'
    },
    {
        icon: '/images/SkypiercerScreens/BattallionImage.png',
        title: 'Battalions and examode',
        description: "Characters can be assigned to the battallion of of one the three protagonist once they are unlocked. Being assigned to a battallion gives passive bonuses to both the unit and the leader.\n\nAfter reaching a certain point in the story or complaining certain side missions, protagonists gain access to examode, which is a temporary overpowered state. It\'s effects differ for each protagonist, but they always empower both them and the units in thei battallion.The examode gauge fills up when the unit or their subordinates take action."
    },
    {
        icon: '/images/SkypiercerScreens/EnvImage.png',
        title: 'Map effects',
        description: 'Terrain, elevation and weather can have varying effects on the units. For example, a Forest Tile increases the evasion of units standing on it, while a Desert Tile damages them each turn.'
    }
]
</script>

<style scoped>
.skypiercer-page {
    min-height: 100vh;
    color: #242621;
    background: #e9e7df;
}

.page-content {
    max-width: 1080px;
}

.page-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 3rem;
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
h3,
p {
    margin-top: 0;
}

h1 {
    margin-bottom: 1rem;
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 700;
    letter-spacing: -0.07em;
    line-height: 0.9;
}

h2 {
    margin-bottom: 1.2rem;
    font-size: clamp(1.7rem, 3vw, 2.5rem);
    font-weight: 600;
    letter-spacing: -0.04em;
}

.intro {
    max-width: 30rem;
    margin-bottom: 0;
    color: #66675f;
    font-size: 1.15rem;
    line-height: 1.55;
}

.github-button {
    flex-shrink: 0;
    border-color: #242621;
    color: #242621;
}

.feature {
    margin-bottom: 5rem;
}

.title-image {
    height: min(58vw, 500px);
    min-height: 280px;
    background: #c9c6bb;
}

.image-placeholder {
    display: grid;
    height: 100%;
    place-items: center;
    color: #66675f;
    font-size: 2rem;
}

.image-caption {
    margin: 0.75rem 0 0;
    color: #77786e;
    font-size: 0.85rem;
}

.about-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(240px, 0.8fr);
    gap: clamp(3rem, 9vw, 8rem);
    margin-bottom: 5rem;
}

.about-layout p,
.closing-note p,
.system p {
    color: #66675f;
    line-height: 1.7;
}

.about-layout p {
    max-width: 38rem;
}

.build-info {
    padding-left: 2rem;
    border-left: 1px solid #c5c3ba;
}

.version {
    margin-bottom: 1.5rem;
    color: #ae4f35 !important;
    font-size: 0.9rem;
    font-weight: 700;
}

dl {
    margin: 0;
}

dl div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 0.7rem 0;
    border-top: 1px solid #c5c3ba;
}

dt {
    color: #66675f;
    font-size: 0.85rem;
}

dd {
    margin: 0;
    color: #242621;
    font-size: 1.25rem;
    font-weight: 600;
}

.systems {
    padding-top: 3rem;
    border-top: 1px solid #c5c3ba;
}

.system-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 4rem;
}

.gameplay-system-list {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 3rem;
}

.system {
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 1rem;
}

.Gameplay .system {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.system-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
}

.Gameplay .system-icon {
    width: 100%;
    height: clamp(280px, 45vw, 520px);
    padding: 1rem;
    border: 1px solid #c5c3ba;
    background: #f2f0e9;
    object-fit: contain;
}

.system h3 {
    margin-bottom: 0.45rem;
    font-size: 1.1rem;
    font-weight: 600;
}

.system p {
    margin-bottom: 0;
    font-size: 0.95rem;
}

.closing-note {
    max-width: 38rem;
    margin: 5rem 0 2rem;
    padding-top: 2rem;
    border-top: 3px solid #ae4f35;
}

.closing-note p {
    margin-bottom: 1rem;
}

.closing-note .v-btn {
    padding-left: 0;
    color: #ae4f35;
}

@media (max-width: 700px) {
    .page-header {
        align-items: flex-start;
        flex-direction: column;
    }

    .github-button {
        width: 100%;
    }

    .about-layout,
    .system-list,
    .gameplay-system-list {
        grid-template-columns: 1fr;
    }

    .build-info {
        padding-top: 2rem;
        padding-left: 0;
        border-top: 1px solid #c5c3ba;
        border-left: 0;
    }
}
</style>
