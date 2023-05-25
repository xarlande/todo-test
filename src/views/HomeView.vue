<template>
    Home
    <!--    <HomeList :list-items="todoListCheck" />-->
    <!--    <HomeList :list-items="todoListNoCheck" />-->
</template>

<script lang="ts" setup>
import store from '@/store/store';
import { toRefs } from 'vue';

const useTodo = store();
const { todoListCheck, todoListNoCheck } = toRefs(useTodo);
</script>
