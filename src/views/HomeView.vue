<template>
    <div class="flex align-items-center flex-column mt-4">
        <div v-for="item in todoItems"
             :key="item.id"
             class="px-6 py-4 border-bottom-1 border-black-alpha-10 flex align-items-center justify-content-between min-width__todos">
            <p>
                {{ item.title }}
            </p>
            <Button label="Delete" severity="danger" @click="todoRemove(item.id)" />
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
