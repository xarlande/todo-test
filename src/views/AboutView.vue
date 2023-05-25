<template>
    <div class="max-width__todos mx-auto mt-4">
        <span>Last Id: {{ todoLastIndex }}</span>
        <div class="p-inputgroup my-4">
            <InputText v-model="inputTitle" placeholder="Keyword" />
            <Button icon="pi pi-plus" severity="info" @click="sendTitleForStore" />
        </div>
    </div>

</template>
<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { Ref, ref, toRefs } from 'vue';
import store from '@/store/store';

const useTodo = store();
const { todoLastIndex } = toRefs(useTodo);
const { todoAdd } = useTodo;

const inputTitle: Ref<string> = ref('');

const sendTitleForStore = (): void => {
    if (inputTitle.value.length) {
        todoAdd(inputTitle.value);
        inputTitle.value = '';
    }
};

</script>
