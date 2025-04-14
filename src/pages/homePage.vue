<template>
  <div>
    <h3>Список дел</h3>
    <hr />
    <selectUsers />
    <addTodo />
    <todosList />
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
};
</script>

<style>
</style>