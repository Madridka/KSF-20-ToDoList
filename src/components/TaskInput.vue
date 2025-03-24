<template>
  <div>
    <label for="new-task">Список дел</label>
    <form class="task-row-wrapper" @submit.prevent="addTask">
        <input id='new-task' class="task" v-model="newTask" type="text">
        <button @click="addTask">Доб.</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskInput",
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
        if (this.newTask.trim() === '') return;
        this.$emit('task-added', this.newTask)
        this.newTask = '';
    }
  }
};
</script>