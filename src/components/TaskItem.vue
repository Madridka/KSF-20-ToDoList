<template>
  <div>
    <li>
      <button :disabled="true" class="btn btn-edit" @click="startEdit(task.id)">Изм.</button>
      <button class="btn btn-delete" @click="deleteTask(task.id)">X</button>
      <div v-if="editingId !== task.id">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="handleChange"
        />
        {{ task.title }}
      </div>
      <div v-else>
        <li>
          <input type="text" v-model="localEditTask" placeholder="Название" />
          <button class="btn" @click="saveEdit">Сохранить</button>
          <button class="btn" @click="cancelEcdit">Отмена</button>
        </li>
      </div>
    </li>
  </div>
</template>

<script>
import "../assets/styles/styles.scss";

export default {
  name: "TaskItem",

  data() {
    return {
      localEditTask: "",
    };
  },

  props: {
    task: {
      type: Object,
    },
    editingId: {
      type: Number,
      default: null,
    },
    editingTask: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleChange(event) {
      const updatedTask = { ...this.task, completed: event.target.checked };
      this.$emit("update-task", updatedTask);
    },
    startEdit() {
      // this.localEditTask = this.task.task;
      // this.$emit("start-edit", id);
      window.confirm("Нельзя редактировать");
    },
    saveEdit() {
      console.log("TaskItem saveEdit:", this.localEditTask);
      this.$emit("save-edit", {
        task: this.localEditTask,
      });
    },

    cancelEdit() {
      this.$emit("cancel-edit");
    },

    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },

  watch: {
    editingTask(newVal) {
      this.localEditTask = newVal;
    },
  },
};
</script>

<style>
</style>