<template>
    <div class="max-width__todos mx-auto mt-4">
        <Toast />
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
import { computed, Ref, ref } from 'vue';
import { useStore } from '@/store/store';
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';

const store = useStore();
const todoLastIndex = computed(() => store.todoLastIndex);

const toastItem = useToast();

const todoAdd = (item: string) => store.todoAdd(item);
const inputTitle: Ref<string> = ref('');

const sendTitleForStore = (): void => {
    if (inputTitle.value.length) {
        todoAdd(inputTitle.value);
        toastItem.add({
            severity: 'success',
            summary: 'Success',
            detail: `todo added: ${inputTitle.value} `,
            life: 3000,
        });
        inputTitle.value = '';
    } else {
        toastItem.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Fill in the field',
            life: 3000,
        });
    }
};

</script>
