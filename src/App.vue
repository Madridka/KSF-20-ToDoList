<template>
  <div id="app">
    <title>Todo App</title>

    <div class="aaa">
      <img :src="require('@/assets/eisenhower-matrix.jpg')"/>
    </div>
    <div class="centered-main-page-element">
      <TaskInput @task-added="addNewTask"/>

      <TaskList :tasks="tasksIncomplete" title="Сделать" @edit-task="editTask" @delete-task="deleteTask"/>
      <TaskList :tasks="tasksComplete" title="Завершено" @edit-task="editTask" @delete-task="deleteTask"/>
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
        { id: 1, todo: "Погулять с собакой", completed: false },
        { id: 2, todo: "Выпить кофе", completed: false },
        { id: 3, todo: "Купить сахар", completed: true },
      ],

      editingId: null,
      editTodo: "",
      editCompleted: "",
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
