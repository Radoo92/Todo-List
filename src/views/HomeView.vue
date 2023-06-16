<template>
  <main>
    <div class="container">
      <h1>Create Todo</h1>
      <input v-model="newItemText" type="text" placeholder="Nová položka" />
      <button @click="addItem">Pridať</button>
      <ul>
        <TodoItemComponent
          v-for="(item, index) in itemsToDisplay"
          :key="index"
          v-bind:item="item"
        />
      </ul>
      <button @click="fetchData()">Zobraz data</button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TodoItem, key } from "@/store";
import { useStore } from "vuex";
import { mapGetters } from "vuex";
import TodoItemComponent from "../components/TodoItemComponent.vue";

type TodoDto = { title: string | undefined };

export default defineComponent({
  name: "HomeView",
  components: { TodoItemComponent },
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
    ...mapGetters(["itemsToDisplay"]),
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
    fetchData() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          response.data.forEach((element: TodoDto) => {
            this.store.commit("addItem", {
              text: element.title,
              deleted: false,
            });
          });
        });
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>
