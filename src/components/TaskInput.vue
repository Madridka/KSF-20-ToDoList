<template>
  <div class="new__task">
    <form @submit.prevent="addTask">
        <input id='new-task' v-model="newTask" type="text" placeholder="Добавить задачу">
        <button class="btn btn-add" @click="addTask">Доб.</button>
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

<style >
</style>