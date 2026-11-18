<template>
    <v-app>
        <AppHeader @toggle-sidebar="drawer = !drawer" />

        <AppSidebar v-model="drawer" />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'

const drawer = ref(true)
</script>