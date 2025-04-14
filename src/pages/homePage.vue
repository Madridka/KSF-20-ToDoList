<template>
  <div>
    <h3>Список дел</h3>
    <hr />
    <selectUsers />
    <todosList />
  </div>
</template>

<script>
import todosList from "../components/todosList.vue";
import selectUsers from "../components/selectUsers.vue";

export default {
  name: "homePage",
  components: {
    todosList,
    selectUsers,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>