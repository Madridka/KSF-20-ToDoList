<template>
  <li>
    <input type="checkbox" v-model="task.completed" @change="toggleTask" />
    <div class="task">{{ task.todo }}</div>
    <button class="edit" @click="editTask">Изменить</button>
    <button class="delete" @click="deleteTask">
      <img :src="require('@/assets/remove.svg')" alt="Delete task" />
    </button>
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  data() {
    return {};
  },
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    editTask(id) {
      this.$emit("edit-task", id);
    },
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>

<style>
</style>