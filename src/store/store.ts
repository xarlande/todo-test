import { defineStore } from 'pinia';
import { computed, ComputedRef, ref } from 'vue';

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

  const todoLength: ComputedRef<number> = computed<number>(() => todoItems.value.length);
  const todoListNoCheck: ComputedRef<TodoItems[]> = computed(() => todoItems.value.filter((item) => item.check === false));
  const todoListCheck: ComputedRef<TodoItems[]> = computed(() => todoItems.value.filter((item) => item.check === true));
  const todoRemove = (item: number) => {
      todoItems.value = todoItems.value.filter((data) => data.id !== item);
  };
  const todoCheck = (itemId: number) => todoItems.value.forEach((item) => {
      if (item.id === itemId) {
          item.check = !item.check;
      }
  });

  return {
      todoItems, todoLength, todoRemove, todoCheck, todoListNoCheck, todoListCheck,
  };
});
