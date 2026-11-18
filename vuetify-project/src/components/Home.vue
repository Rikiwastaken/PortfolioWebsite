<template>
    <v-container class="home-page py-10">
        <p class="kicker">PORTFOLIO</p>
        <h1>Arnaud Krafft</h1>
        <p class="intro">Games, experiments and things I am currently working on.</p>
    </v-container>
</template>

<style scoped>
.home-page {
    color: #242621;
}

.kicker {
    margin-bottom: 0.75rem;
    color: #ae4f35;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
}

h1 {
    margin-bottom: 1rem;
    font-size: clamp(3rem, 8vw, 6.5rem);
    font-weight: 700;
    letter-spacing: -0.07em;
    line-height: 0.9;
}

.intro {
    color: #66675f;
    font-size: 1.15rem;
}
</style>
