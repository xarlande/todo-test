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
      {
          id: 1,
          title: 'hello1',
          check: false,
      },
  ]);

  const todoLength = computed<number>(() => todoItems.value.length);
  const todoListNoCheck = computed(() => todoItems.value.filter((item) => item.check === false));
  const todoListCheck = computed(() => todoItems.value.filter((item) => item.check === true));

  const todoRemove = (itemId: number) => {
      const findIndexItem: number = todoItems.value.findIndex((data) => data.id === itemId);
      todoItems.value.splice(findIndexItem, 1);
      // todoItems.value = todoItems.value.filter((data) => data.id !== itemId);
  };
  const todoCheck = (itemId: number) => todoItems.value.forEach((item) => {
      if (item.id === itemId) {
          item.check = !item.check;
      }
  });

  return {
      todoItems, todoLength, todoListNoCheck, todoListCheck, todoRemove, todoCheck,
  };
});
