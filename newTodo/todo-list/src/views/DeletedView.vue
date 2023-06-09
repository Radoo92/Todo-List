<template>
  <div class="deleted">
    <h1>This is an deleted page</h1>
    <ul>
      <li
        v-for="(item, index) in itemsToDisplay"
        :key="index"
        :class="{ deleted: item.deleted }"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItem, key } from "@/store";
import { useStore } from "vuex";

export default defineComponent({
  name: "DeletedView",
  computed: {
    itemsToDisplay() {
      return useStore(key).state.items.filter((item) => item.deleted);
    },
  },
});
</script>
