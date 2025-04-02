<template>
  <div id="app">
    <title>Todo App</title>

    <div class="container">
      <img :src="require('@/assets/eisenhower-matrix.jpg')" alt="Матрица Эйзенхауэра"/>
    </div>
    <div class="centered-main-page-element">
      <TaskInput @task-added="addNewTask" />

      <TaskList
        :tasks="tasksIncomplete"
        title="Сделать"
        :editingId="editingId"
        :editingTask="editingTask"
        @start-edit="startEdit"
        @save-edit="saveEdit"
        @cancel-edit="cancelEdit"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
      <TaskList
        :tasks="tasksComplete"
        class="completed-tasks"
        title="Завершено"
        :editingId="editingId"
        :editingTask="editingTask"
        @start-edit="startEdit"
        @save-edit="saveEdit"
        @cancel-edit="cancelEdit"
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

      editingId: null,
      editingTask: "",
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

    startEdit(id) {
      const task = this.tasks.find((p) => p.id === id);
      this.editingId = id;
      this.editingTask = task.task;
    },

    saveEdit(updateTask) {
      const index = this.tasks.findIndex((p) => p.id === this.editingId);
      if (index !== -1) {
        const editedTask = {
          id: this.editingId,
          task: updateTask.task,
          completed: this.tasks[index].completed,
        };
        this.tasks.splice(index, 1, editedTask);
      }
      this.cancelEdit();
    },

    cancelEdit() {
      this.editingId = null;
      this.editingTask = "";
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
