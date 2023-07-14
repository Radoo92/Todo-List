import { InjectionKey } from 'vue'
import { createStore, Store, storeKey } from 'vuex'
import { useStore } from "vuex";

export type TodoItem = { text: string, deleted: boolean, id: number | undefined }
export interface State { items: Array<TodoItem>, currentId: number }
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    items: [], currentId: 0
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
    getItemById(state: State, id: number) {
      return state.items.filter(
        (item: TodoItem) => item.id === id
      )
    }
  },
  mutations: {
    addItem(state: State, item: TodoItem) {
      state.items.push({ ...item, id: state.currentId })
      state.currentId++;
    },
    deleteItem(state: State, item: TodoItem) {
      const index = state.items.indexOf(item)
      state.items[index].deleted = true;
    },
  }
})