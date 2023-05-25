import { defineStore } from 'pinia';
import { TodoTypes } from '@/types/todo';
import TodoItems = TodoTypes.TodoItems;

type State = {
  todoItems: Array<TodoItems>
  todoItemSelected: Array<TodoItems>
  todoLastIndex: number
}

export const useStore = defineStore('store', {
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
        todoItemSelected: [],
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
        todoRemove(itemArr: Array<TodoItems>): void {
            itemArr.forEach((item) => {
                const findIndexItem: number = this.todoItems.findIndex((data) => data.id === item.id);
                this.todoItems.splice(findIndexItem, 1);
            });
        },
        todoCheck(itemArr: Array<TodoItems>): void {
            itemArr.forEach((item) => {
                this.todoItems.forEach((data) => {
                    if (data.id === item.id) {
                        data.check = !data.check;
                    }
                });
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
});

export default {};
