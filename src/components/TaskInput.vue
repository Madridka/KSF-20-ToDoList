<template>
  <div>
    <label for="new-task">Список дел</label>
    <div class="task-row-wrapper">
        <input id='new-task' class="task" v-model="newTask" type="text">
        <button @click="addTask">Доб</button>
    </div>
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