<template>
  <div>
    <h3>Список дел</h3>
    <hr />
    <selectUsers />
    <addTodo />
    <todosList />
    <!-- Not working, item todo dont move to tasksComplete -->
    <!-- <todosList :tasks="tasksIncomplete"/> -->
    <!-- <todosList :tasks="tasksComplete"/> -->
  </div>
</template>

<script>
import todosList from "../components/todosList.vue";
import selectUsers from "../components/selectUsers.vue";
import addTodo from "../components/addTodo.vue";

export default {
  name: "homePage",

  components: {
    todosList,
    selectUsers,
    addTodo,
  },

  data() {
    return {};
  },

  computed: {
    todoList() {
      return this.$store.getters.TODOS;
    },
    tasksIncomplete() {
      return this.todoList.filter((title) => !title.completed);
    },
    tasksComplete() {
      return this.todoList.filter((title) => title.completed);
    },
  },
};
</script>

<style>
</style>