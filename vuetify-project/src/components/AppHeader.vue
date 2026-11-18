<template>
    <v-app-bar app position="fixed" elevation="0" color="surface" class="portfolio-header">
        <v-app-bar-nav-icon @click="$emit('toggle-sidebar')" />

        <v-toolbar-title class="portfolio-title">
            Arnaud Krafft, Portfolio
        </v-toolbar-title>

        <v-spacer />

        <v-btn icon="mdi-github" href="https://github.com/Rikiwastaken" target="_blank" class="github-button" />
    </v-app-bar>
</template>

<script setup>
defineEmits(['toggle-sidebar'])
</script>

<style scoped>
.portfolio-header {
    position: fixed !important;
    top: 0 !important;
    z-index: 1006;
    border-bottom: 1px solid #c5c3ba;
    color: #242621;
}

.portfolio-title {
    font-weight: 500;
    letter-spacing: -0.02em;
}

.github-button {
    color: #ae4f35;
}
</style>