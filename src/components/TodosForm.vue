<template>
  <div>
    <ul>
      <div v-for="todo in todos" :key="todo">
        <li>{{ todo.title }} // {{ todo.completed }}</li>
      </div>
    </ul>
    <h3>Число: {{ activeUserNumber }}</h3>
  </div>
</template>

<script>
export default {
  name: "TodosForm",
  data() {
    return {
      todos: [],
    };
  },
  props: {
    activeUserNumber: {
      type: Number,
      required: true,
    },
  },
  watch: {
    activeUserNumber() {
      this.fetch();
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      try {
        const responseTodo = await fetch(
          "https://jsonplaceholder.typicode.com/users/" +
            this.activeUserNumber +
            "/todos"
        );
        this.todos = await responseTodo.json();
      } catch (error) {
        console.log("Ошибка при загрузке данных");
      }
    },
  },

};
</script>


<style>
</style>
