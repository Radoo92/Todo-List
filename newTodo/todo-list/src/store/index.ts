import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export type TodoItem = { text: string, deleted: boolean }
export interface State { items: Array<TodoItem> }
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    items: []
  }, mutations: {
    addItem(state: State, item: TodoItem) {
      console.log("hello");

      state.items.push(item);
    },
    deleteItem(state: State, item: TodoItem) {
      const index = state.items.indexOf(item)
      state.items[index].deleted = true;
    },
  }
})