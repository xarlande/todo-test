<template>
    <div class="flex align-items-center flex-column mt-4">
        <span class="inline-block my-4">No Checked: {{ todoListNoCheck.length }}</span>
        <HomeList :list-items="todoListNoCheck" />
        <span class="inline-block my-4">Checked: {{ todoListCheck.length }}</span>
        <HomeList :list-items="todoListCheck" />
    </div>
</template>

<script lang="ts" setup>
import HomeList from '@/components/newHomeList.vue';
import { useStore } from '@/store/store';
import { computed } from 'vue';

const store = useStore();
const todoListCheck = computed(() => store.todoListCheck);
const todoListNoCheck = computed(() => store.todoListNoCheck);
</script>
