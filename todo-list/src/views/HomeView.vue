<template>
  <div class="container">
    <h1>Todo App</h1>
    <input v-model="newItemText" type="text" placeholder="Nová položka" />
    <button class="btn btn-primary" @click="addItem">Pridať</button>
    <ul>
      <li v-for="(item, index) in itemsToDisplay" :key="index">
        {{ item.text }}
        <button class="btn-delete" @click="deleteItem(item)">Vymazať</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItem, key } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      newItemText: "",
    };
  },
  setup() {
    const store = useStore(key);
    return {
      store,
    };
  },
  computed: {
    itemsToDisplay() {
      return useStore(key).state.items.filter(
        (item: TodoItem) => !item.deleted
      );
    },
  },
  methods: {
    addItem() {
      if (this.newItemText) {
        this.store.commit("addItem", {
          text: this.newItemText,
          deleted: false,
        });
        this.newItemText = "";
      }
    },
    deleteItem(item: TodoItem) {
      this.store.commit("deleteItem", item);
    },
  },
});
</script>
