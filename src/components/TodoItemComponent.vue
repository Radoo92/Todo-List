<template>
  <li>
    {{ item?.text }}
    <button v-if="!deletedView" @click="deleteItem(item as TodoItem)">
      Vymazať
    </button>
    <button @click="routeToEdit(item as TodoItem)">Detail</button>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItem, key } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  name: "TodoItemComponent",
  props: { item: Object, deletedView: { type: Boolean, default: false } },
  setup() {
    const store = useStore(key);
    return {
      store,
    };
  },
  methods: {
    deleteItem(item: TodoItem | undefined) {
      if (item) {
        this.store.commit("deleteItem", item);
      }
    },
    routeToEdit(item: TodoItem | undefined) {
      if (item) {
        this.$router.push({
          name: "edit",
          params: { id: item.id },
        });
      }
    },
  },
});
</script>
