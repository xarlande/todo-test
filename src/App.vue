<template>
    <div>
        <TabMenu :model="items" />
        <router-view />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';

const items = ref([
    {
        label: 'Todo List',
        icon: 'pi pi-fw pi-book',
        to: '/',
    },
    {
        label: 'Todo Add',
        icon: 'pi pi-fw pi-plus',
        to: '/about',
    },
]);

</script>
