<script setup lang="ts">
import { useStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useFieldArray, useForm } from 'vee-validate'
import { watch } from 'vue'
import ItemFields from './ItemFields.vue'

const store = useStore()
const { objs } = storeToRefs(store)

const { values, resetForm } = useForm({})

watch(
    objs.value,
    (val) => {
        resetForm({ values: val })
    },
    { immediate: true }
)

const { fields } = useFieldArray('items')
</script>

<template>
    {{ objs }}
    {{ values }}
    <form>
        <input type="text" name="title" />
        <ItemFields />
        <button type="button" @click="store.addItem">add</button>
        <button type="button" @click="store.removeItem">remove</button>
    </form>
</template>

<style scoped></style>
