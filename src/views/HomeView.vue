<template>
    <div>{{ todoItems }}</div>
</template>

<script lang="ts" setup>
import store from '@/store/store';

const useTodo = store();
const { todoItems } = useTodo;
</script>
