import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export default defineStore('store', () => {
  interface TodoItems {
    id: number,
    title: string,
    check: boolean
  }

  const todoItems = ref<TodoItems[]>([
      {
          id: 0,
          title: 'hello',
          check: false,
      },
  ]);

  const todoLength = computed<number>(() => todoItems.value.length);

  const todoRemove = (item: number) => {
      todoItems.value = todoItems.value.filter((data) => data.id !== item);
  };
  const todoCheck = (itemId: number) => todoItems.value.forEach((item) => {
      if (item.id === itemId) {
          item.check = !item.check;
      }
  });

  return {
      todoItems, todoLength, todoRemove, todoCheck,
  };
});
