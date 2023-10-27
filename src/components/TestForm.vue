<script setup lang="ts">
import { useStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useForm } from 'vee-validate'
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
</script>

<template>
    Store values: {{ objs }}
    <br />
    Form values: {{ values }}
    <br />
    <form>
        <button type="button" @click="store.addItem">add</button>
        <button type="button" @click="store.removeItem">remove</button>
        <ItemFields />
    </form>
</template>

<style scoped></style>
