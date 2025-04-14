<template>
  <div id>
    <div class="container">
      <TaskInput @task-added="addNewTask" />

      <UsersForm @active-user="activeUsers" />
      <div v-if="tasks.length === 0">
        <h3>Загрузка...</h3>
      </div>
      <div v-else>
        <TaskList
          :tasks="tasksIncomplete"
          :editingId="editingId"
          :editingTask="editingTask"
          @start-edit="startEdit"
          @save-edit="saveEdit"
          @cancel-edit="cancelEdit"
          @delete-task="deleteTask"
          @update-task="updateTask"
        />
        <TaskList
          class="completed-tasks"
          :tasks="tasksComplete"
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
  </div>
</template>

<script>
import TaskInput from "./components/TaskInput.vue";
import TaskList from "./components/TaskList.vue";
import UsersForm from "./components/UsersForm.vue";

export default {
  name: "App",

  components: {
    TaskInput,
    TaskList,
    UsersForm,
  },

  data() {
    return {
      editingId: null,
      editingTask: "",

      activeUserNumber: 1,
      tasks: [],
    };
  },

  computed: {
    tasksIncomplete() {
      return this.tasks.filter((task) => !task.completed);
    },
    tasksComplete() {
      return this.tasks.filter((task) => task.completed);
    },
  },

  watch: {
    activeUserNumber() {
      this.fetch();
    },
  },

  mounted() {
    this.fetch();
  },

  methods: {
    addNewTask(task) {
      this.tasks.push({
        id: Date.now(),
        title: task,
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

    activeUsers(activeUsers) {
      this.activeUserNumber = activeUsers;
    },

    async fetch() {
      try {
        const responseTodo = await fetch(
          "https://jsonplaceholder.typicode.com/users/" +
            this.activeUserNumber +
            "/todos"
        );
        this.tasks = await responseTodo.json();
      } catch (error) {
        console.log("Ошибка при загрузке данных");
      }
    },
  },
};
</script>

<style>
</style>
