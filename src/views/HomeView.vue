<template>
  <div class="container">
    <h1>Todo App</h1>
    <div class="mb-2">
      <input v-model="newItemText" type="text" placeholder="Nová položka" />
    </div>
    <button class="btn btn-primary" @click="addItem">Pridať</button>
    <ul>
      <li v-for="(item, index) in itemsToDisplay" :key="index">
        {{ item.text }}
        <button class="btn btn-danger" @click="deleteItem(item)">
          Vymazať
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItem, key } from "@/store";
import { useStore } from "vuex";
import { mapGetters } from "vuex";

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
    ...mapGetters(["itemsToDisplay", "itemsToDeleted"]),
  },
  methods: {
    addItem() {
      if (!this.newItemText) {
        return;
      }
      this.store.commit("addItem", {
        text: this.newItemText,
        deleted: false,
      });
      this.newItemText = "";
    },
    deleteItem(item: TodoItem) {
      this.store.commit("deleteItem", item);
    },
  },
});
</script>
