<template>
  <div class="editMode">
    <li>
      <div class="task" v-if="editingId !== task.id">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="handleChange"
        />
        <div class="task">
          {{ task.task }}
        </div>
        <button class="edit" @click="startEdit(task.id)">Изменить</button>
        <button class="delete" @click="deleteTask(task.id)">
          <img :src="require('@/assets/remove.svg')" alt="Delete task" />
        </button>
      </div>
      <div v-else>
        <li>
        <input type="text" class="task" v-model="localEditTask" placeholder="Название" />
        <button class="btn btn-save" @click="saveEdit">Сохранить</button>
        <button class="btn btn-cancel" @click="cancelEdit">Отмена</button>
        </li>
      </div>
      
    </li>
  </div>
</template>

<script>
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
    startEdit(id) {
      this.localEditTask = this.task.task;
      this.$emit("start-edit", id);
      
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