<template>
  <div>
    <li>
      <button :disabled="true" class="btn btn-edit" @click="startEdit(task.id)">
        Изм.
      </button>
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
export default {
  name: "TaskItem",

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

  data() {
    return {
      localEditTask: "",
    };
  },

  watch: {
    editingTask(newVal) {
      this.localEditTask = newVal;
    },
  },

  methods: {
    handleChange(event) {
      const updatedTask = { ...this.task, completed: event.target.checked };
      this.$emit("update-task", updatedTask);
    },
    startEdit() {
      window.confirm("Нельзя редактировать");
    },
    saveEdit() {
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
};
</script>

<style>
</style>