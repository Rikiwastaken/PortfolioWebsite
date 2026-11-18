<template>
    <v-navigation-drawer :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" permanent>
        <v-list nav>
            <v-list-item prepend-icon="mdi-home" title="Home" to="/" />

            <v-list-item prepend-icon="mdi-gamepad-variant" title="Itch Games" to="/itch" />

            <v-list-item prepend-icon="mdi-sword-cross" title="Skypiercer" to="/skypiercer" />

            <v-list-item prepend-icon="mdi-account" title="About" to="/about" />
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
defineProps({
    modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>