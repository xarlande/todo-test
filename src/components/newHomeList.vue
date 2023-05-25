<template>
    <div class="card">
        <div v-if="todoItemSelected.length" class="flex justify-content-end gap-4">
            <Button label="Delete" severity="danger" @click="todoRemove" />
            <Button v-if="!listItems[0].check" label="Check" severity="info" @click="todoCheck" />
            <Button v-else label="Checked" security="info" @click="todoCheck" />
        </div>
        <DataTable v-model:selection="todoItemSelected"
                   :value="listItems"
                   dataKey="id"
                   tableStyle="min-width: 50rem">
            <Column headerStyle="width: 3rem" selectionMode="multiple"></Column>
            <Column field="id" header="Code"></Column>
            <Column field="title" header="Name"></Column>
        </DataTable>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, Ref, ref } from 'vue';
import { useStore } from '@/store/store';
import { TodoTypes } from '@/types/todo';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import TodoItems = TodoTypes.TodoItems;

defineProps<{
  listItems: Array<TodoItems>
}>();

const todoItemSelected: Ref<TodoItems[]> = ref([]);

const store = useStore();
const todoRemove = (): void => {
    store.todoRemove(todoItemSelected.value);
    todoItemSelected.value = [];
};
const todoCheck = (): void => {
    store.todoCheck(todoItemSelected.value);
    todoItemSelected.value = [];
};

</script>
