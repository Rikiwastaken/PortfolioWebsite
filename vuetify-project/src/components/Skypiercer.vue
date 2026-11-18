<template>
    <main class="skypiercer-page">
        <v-container class="page-content py-8 py-md-12">
            <header class="page-header">
                <div>
                    <p class="kicker">PERSONAL PROJECT</p>
                    <h1>Skypiercer</h1>
                    <p class="intro">
                        A turn-based tactical RPG I am making in my spare time.
                        It takes inspiration from Fire Emblem and the atmosphere of NieR.
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
                    <h2>What it is about</h2>
                    <p>
                        Zack Farron and his allies leave their isolated village after a local incident
                        turns into something much bigger. They travel through a world still dealing with
                        an apocalyptic cataclysm while Caelum works towards taking it over.
                    </p>
                    <p>
                        I am building the game around deliberate, turn-by-turn decisions. Units have
                        different growth rates, weapons change how they develop, and the map itself can
                        change how a fight plays out.
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

            <section class="systems">
                <h2>Some of the systems</h2>
                <div class="system-list">
                    <article v-for="system in systems" :key="system.title" class="system">
                        <v-icon :icon="system.icon" size="24"></v-icon>
                        <div>
                            <h3>{{ system.title }}</h3>
                            <p>{{ system.description }}</p>
                        </div>
                    </article>
                </div>
            </section>

            <section class="closing-note">
                <h2>This is still a work in progress.</h2>
                <p>
                    The game design, models and code are all being made by me. The frontend repository
                    is public if you want to look at how it is coming together.
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
    { label: 'Story maps', value: '18' },
    { label: 'Side story maps', value: '4' },
    { label: 'Characters', value: '17' },
    { label: 'Skills', value: '119' }
]

const systems = [
    {
        icon: 'mdi-sword-cross',
        title: 'Blades',
        description: 'There are eight blade types. Using one changes a character’s stats, growth rates and durability.'
    },
    {
        icon: 'mdi-target',
        title: 'Telekinesis',
        description: 'Characters can trade their normal damage calculation for a longer-range, psyche-based attack.'
    },
    {
        icon: 'mdi-account-group',
        title: 'Battalions and examode',
        description: 'Units can join a protagonist’s battalion. Later, the protagonist can activate a temporary powered-up state.'
    },
    {
        icon: 'mdi-weather-partly-cloudy',
        title: 'Map effects',
        description: 'Terrain, elevation and weather affect movement, accuracy and the way skills work during a mission.'
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

.system {
    display: grid;
    grid-template-columns: 2rem 1fr;
    gap: 1rem;
}

.system .v-icon {
    color: #ae4f35;
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
    .system-list {
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
