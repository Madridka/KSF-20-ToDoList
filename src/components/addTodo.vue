<template>
  <div>
    <form type="text" @submit.prevent="addTodo()">
      <input type="text" v-model.lazy="todo" />
    </form>
    {{ todo }}
  </div>
</template>

<script>
export default {
  name: "addTodo",
  components: {},
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addTodo() {
      const newTask = {
        id: Date.now(),
        title: this.todo,
        completed: false,
      };
      this.$store.dispatch("addTodo", newTask);
      this.todo = "";
    },
  },
};
</script>

<style>
</style>