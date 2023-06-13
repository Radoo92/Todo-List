import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { useStore } from "vuex";

export type TodoItem = { text: string, deleted: boolean }
export interface State { items: Array<TodoItem> }
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    items: []
  },
  getters: {
    itemsToDeleted() {
      return useStore(key).state.items.filter((item) => item.deleted);
    },
    itemsToDisplay() {
      return useStore(key).state.items.filter(
        (item: TodoItem) => !item.deleted
      );
    },
  },
  mutations: {
    addItem(state: State, item: TodoItem) {
      state.items.push(item);
    },
    deleteItem(state: State, item: TodoItem) {
      const index = state.items.indexOf(item)
      state.items[index].deleted = true;
    },
  }
})