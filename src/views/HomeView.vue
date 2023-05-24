<template>
    <div class="flex align-items-center flex-column mt-4">
        <div v-for="item in todoItems"
             :key="item.id"
             class="px-2 py-4 border-bottom-1 border-black-alpha-10 flex align-items-center justify-content-between min-width__todos">
            <div class="flex gap-2">
                <i class="pi pi-check" style="color: green"></i>
                <p>
                    {{ item.title }}
                </p>
            </div>
            <div class="flex gap-2">
                <Button label="Delete" severity="danger" @click="todoRemove(item.id)" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import store from '@/store/store';
import Button from 'primevue/button';
import { toRefs } from 'vue';

const useTodo = store();
const { todoItems } = toRefs(useTodo);
const { todoRemove } = useTodo;
</script>
