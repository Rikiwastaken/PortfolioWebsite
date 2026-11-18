<template>
    <v-app-bar app position="fixed" elevation="2" color="surface">
        <v-app-bar-nav-icon @click="$emit('toggle-sidebar')" />

        <v-toolbar-title>
            Arnaud Krafft, Portfolio
        </v-toolbar-title>

        <v-spacer />

        <v-btn icon="mdi-github" href="https://github.com/Rikiwastaken" target="_blank" />
    </v-app-bar>
</template>

<script setup>
defineEmits(['toggle-sidebar'])
</script>