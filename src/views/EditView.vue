<template>
  <input v-model="item.text" type="text" placeholder="Nová položka" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Store, mapGetters, storeKey } from "vuex";
import { useStore } from "vuex";
import { TodoItem, key } from "@/store";

export default defineComponent({
  name: "EditView",
  data() {
    return {
      item: this.getItemById(parseInt(this.$route.params.id[0], 10)),
    };
  },
  setup() {
    const store = useStore(key);
    return {
      store,
      ...mapGetters(["getItemById"]),
    };
  },
});
</script>
