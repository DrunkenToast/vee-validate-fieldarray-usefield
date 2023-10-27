<script setup lang="ts">
import { useFieldArray } from 'vee-validate'
import Input from './Input.vue'

const { fields } = useFieldArray('items')
</script>

<template>
    <div v-for="(field, index) in fields" :key="field.key">
        <Input :name="`items[${index}].name`" />
    </div>
</template>

<style scoped></style>
