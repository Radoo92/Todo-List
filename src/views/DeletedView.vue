<template>
  <div class="container">
    <h1>This is an deleted page</h1>
    <ul>
      <li v-for="(item, index) in itemsToDeleted" :key="index">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "DeletedView",
  computed: {
    ...mapGetters(["itemsToDeleted"]),
  },
});
</script>
