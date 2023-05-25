<template>
    <div class="flex align-items-center flex-column mt-4">
        <div v-for="item in []"
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

                <Button v-if="!item.check" label="Check" severity="info" @click="todoCheck(item.id)" />
                <Button v-else label="Checked" security="info" @click="todoCheck(item.id)" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Button from 'primevue/button';
import store from '@/store/store';

// const props = defineProps<{
//   listItems: Array<TodoItems>
// }>();

const useTodo = store();
const { todoRemove, todoCheck } = useTodo;
</script>
