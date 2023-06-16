<template>
  <div class="container">
    <h1>This is an deleted page</h1>
    <ul>
      <TodoItemComponent
        v-for="(item, index) in itemsToDeleted"
        :key="index"
        v-bind:item="item"
        v-bind:deleted-view="true"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import TodoItemComponent from "../components/TodoItemComponent.vue";

export default defineComponent({
  name: "DeletedView",
  components: { TodoItemComponent },
  computed: {
    ...mapGetters(["itemsToDeleted"]),
  },
});
</script>
