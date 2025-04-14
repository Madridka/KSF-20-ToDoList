<template>
  <ul>
    <li>
      <div class="task" v-if="editingId !== task.id">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="handleChange"
        />
        <label class="task">
          {{ task.task }}
        </label>

        <button class="edit" @click="startEdit(task.id)">Изменить</button>
        <button class="delete" @click="deleteTask(task.id)">
          <img :src="require('@/assets/remove.svg')" alt="Delete task" />
        </button>
      </div>
      <div class="editMode" v-else>
        <input
          type="checkbox"
          :checked="task.completed"
          @change="handleChange"
        />
        <input type="text" v-model="localEditTask" placeholder="Название" />
        <label>
          {{ task.task }}
        </label>
        <button class="edit" @click="saveEdit">Сохр.</button>
        <button class="delete" @click="cancelEdit">Отмена</button>
      </div>
    </li>
  </ul>
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
};
</script>

<style>
</style>