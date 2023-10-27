<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps<{
    name: string
}>()

const name = toRef(props.name)
const { value } = useField(name)
</script>

<template>
    <input type="text" :name="name" :value="value" />
</template>

<style scoped></style>
