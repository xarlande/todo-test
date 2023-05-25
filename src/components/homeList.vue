<template>
    <div v-if="listItems.length">
        <div v-for="item in listItems"
             :key="item.id"
             class="px-2 py-4 border-bottom-1 border-black-alpha-10 flex align-items-center justify-content-between min-width__todos">
            <div class="flex gap-2">
                <i v-if="item.check" class="pi pi-check" style="color: green"></i>
                <p>
                    {{ item.title }}
                </p>
            </div>
            <div class="flex gap-2">
                <Button label="Delete" severity="danger" @click="todoRemove(item.id)" />

                <Button v-if="!item.check" label="Check" severity="info" @click="todoCheck(item.id)" />
                <Button v-else label="Checked" security="info" @click="todoCheck(item.id)" />
            </div>
        </div>
    </div>
    <div v-else class="my-4">
        Empty
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import Button from 'primevue/button';
import store from '@/store/store';
import { TodoTypes } from '@/types/todo';
import TodoItems = TodoTypes.TodoItems;

const props = defineProps<{
  listItems: Array<TodoItems>
}>();

const useTodo = store();
const { todoRemove, todoCheck } = useTodo;
</script>
