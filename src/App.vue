<template>
  <div id="app">
    <title>Todo App</title>

    <div class="aaa">
      <img :src="require('@/assets/eisenhower-matrix.jpg')" />
    </div>
    <div class="centered-main-page-element">
      <TaskInput @task-added="addNewTask"></TaskInput>
      <TaskList :tasks="tasks" @delete-task="deleteTask"></TaskList>
      <TaskItem :tasks="tasks"></TaskItem>
    </div>
  </div>
</template>

<script>
import TaskInput from "./components/TaskInput.vue";
import TaskList from "./components/TaskList.vue";
import TaskItem from "./components/TaskItem.vue";

export default {
  name: "App",
  components: {
    TaskInput, 
    TaskList,
    TaskItem,
  },

  data() {
    return {
      tasks: [
        {id: 1, todo: "Погулять с собакой", completed: false},
        {id: 2, todo: "Выпить кофе", completed: true},
        {id: 3, todo: "Купить сахар", completed: true},
        ],
    };
  },

  methods: {
    addNewTask(task) {
      this.tasks.push({
        id: Date.now(),
        todo: task,
        completed: false,
      });
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
