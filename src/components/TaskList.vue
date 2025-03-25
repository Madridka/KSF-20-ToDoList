<template>
  <div>
    <h3>{{ title }}:</h3>
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
        @update-task="$emit('update-task', $event)"
      />
    </ul>
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
    title: {
      type: String,
    },
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>

<style>
</style>