import { defineStore } from 'pinia';
import { TodoTypes } from '@/types/todo';
import TodoItems = TodoTypes.TodoItems;

type State = {
  todoItems: Array<TodoItems>
  todoLastIndex: number
}

export default defineStore('store', {
    state: (): State => ({
        todoItems: [
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
        ],
        todoLastIndex: 2,
    }),
    getters: {
        todoLength(state): number {
            return state.todoItems.length;
        },
        todoListNoCheck(state): Array<TodoItems> {
            return state.todoItems.filter((item) => item.check === false);
        },
        todoListCheck(state): Array<TodoItems> {
            return state.todoItems.filter((item) => item.check === true);
        },
    },
    actions: {
        todoRemove(itemId: number): void {
            const findIndexItem: number = this.todoItems.findIndex((data) => data.id === itemId);
            this.todoItems.splice(findIndexItem, 1);
        },
        todoCheck(itemId: number): void {
            this.todoItems.forEach((item) => {
                if (item.id === itemId) {
                    item.check = !item.check;
                }
            });
        },
        todoAdd(itemTitle: string): void {
            this.todoLastIndex += 1;
            this.todoItems.push({
                id: this.todoLastIndex,
                title: itemTitle,
                check: false,
            });
        },
    },

    // const todoLength = computed(() => todoItems.value.length);
    // const todoListNoCheck = computed(() => todoItems.value.filter((item) => item.check === false));
    // const todoListCheck = computed(() => todoItems.value.filter((item) => item.check === true));
    //
    // const todoRemove = (itemId: number): void => {
    //     const findIndexItem: number = todoItems.value.findIndex((data) => data.id === itemId);
    //     todoItems.value.splice(findIndexItem, 1);
    //     // todoItems.value = todoItems.value.filter((data) => data.id !== itemId);
    // };
    // const todoCheck = (itemId: number) => todoItems.value.forEach((item): void => {
    //     if (item.id === itemId) {
    //         item.check = !item.check;
    //     }
    // });
});
