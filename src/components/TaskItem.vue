<template>
  <div>
    <li>
      <input type="checkbox" :checked="task.completed" @change="handleChange" />
      <div class="task">
        {{ task.task }}
      </div>
      <button class="edit" @click="editTask(task.id)">Изменить</button>
      <button class="delete" @click="deleteTask(task.id)">
        <img :src="require('@/assets/remove.svg')" alt="Delete task" />
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "TaskItem",

  data() {
    return {
    };
  },
  props: {
    task: {
      type: Object,
    },
  },
  methods: {
    handleChange(event) {
      const updatedTask = {...this.task, completed: event.target.checked}
      this.$emit('update-task', updatedTask)
    },

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