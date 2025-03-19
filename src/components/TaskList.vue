<template>
  <div>
    <div class="incompletedTasks">
      <h3>СДЕЛАТЬ:</h3>
      <ul>

      </ul>
    </div>

    <div class="completed-tasks">
      <h3>ЗАВЕРШЕНО:</h3>
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
  computed: {
    activeTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
  },
};
</script>

<style>
</style>