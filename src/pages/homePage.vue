<template>
  <div>
    <h3>Список дел</h3>
    <hr />
    <todosList />
  </div>
</template>

<script>
import todosList from "../components/todosList.vue";

export default {
  name: "homePage",
  components: {
    todosList,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>