<template>
  <div id="app">
    <title>Todo App</title>

    <div class="container">
      <img :src="require('@/assets/eisenhower-matrix.jpg')" />
    </div>
    <div class="centered-main-page-element">
      <TaskInput @task-added="addNewTask" />

      <TaskList
        :tasks="tasksIncomplete"
        title="Сделать"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
      <TaskList
        class="completed-tasks"
        :tasks="tasksComplete"
        title="Завершено"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
    </div>
  </div>
</template>

<script>
import TaskInput from "./components/TaskInput.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskInput,
    TaskList,
  },

  data() {
    return {
      tasks: [
        { id: 1, task: "Погулять с собакой", completed: false },
        { id: 2, task: "Выпить кофе", completed: false },
        { id: 3, task: "Купить сахар", completed: true },
      ],
    };
  },

  methods: {
    addNewTask(task) {
      this.tasks.push({
        id: Date.now(),
        task: task,
        completed: false,
      });
    },

    updateTask(updatedTask) {
      const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        this.$set(this.tasks, index, { ...updatedTask });
      }
    },

    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
  computed: {
    tasksIncomplete() {
      return this.tasks.filter((task) => !task.completed);
    },
    tasksComplete() {
      return this.tasks.filter((task) => task.completed);
    },
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
