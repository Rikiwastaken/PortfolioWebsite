<template>
    <v-navigation-drawer :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" permanent
        class="portfolio-sidebar">
        <v-list nav>
            <v-list-item prepend-icon="mdi-home" title="Home" to="/" />

            <v-list-item prepend-icon="mdi-gamepad-variant" title="Itch Games" to="/itch" />

            <v-list-item prepend-icon="mdi-sword-cross" title="Skypiercer" to="/skypiercer" />

            <v-list-item prepend-icon="mdi-account" title="Research" to="/research" />
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
defineProps({
    modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.portfolio-sidebar {
    position: fixed !important;
    top: 64px !important;
    bottom: 0 !important;
    height: calc(100vh - 64px) !important;
    border-right: 1px solid #c5c3ba;
    background: #e9e7df;
    color: #242621;
    overflow-y: auto;
}

.portfolio-sidebar :deep(.v-list-item--active) {
    color: #ae4f35;
}
</style>