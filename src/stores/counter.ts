import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('counter', () => {
    const objs = ref({
        title: 'test',
        items: [
            {
                name: 'test'
            }
        ]
    })

    function addItem() {
        objs.value.items.push({
            name: 'new'
        })
    }

    function removeItem() {
        objs.value.items.pop()
    }

    return { objs, addItem, removeItem }
})
