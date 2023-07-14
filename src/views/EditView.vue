<template>
  <main>{{ $route.params.id }}</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EditView",
  data() {
    return {
      id: "",
    };
  },
});
</script>
