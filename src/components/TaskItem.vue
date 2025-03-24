<template>
  <div>
    <div v-if="editingId !== task.id">
      <li>
        <input type="checkbox" v-model="task.completed" />
        <div class="task">
          {{ task.todo }}
        </div>
        <button class="edit" @click="editTask(task.id)">Изменить</button>
        <button class="delete" @click="deleteTask(task.id)">
          <img :src="require('@/assets/remove.svg')" alt="Delete task" />
        </button>
      </li>
    </div>
    <div v-else>
      <input type="text" v-model="editTodo" />
      <input type="checkbox" v-model="editCompleted" />
      <!-- <button class="btn btn-save" @click="saveEdit">Сохранить</button>
      <button class="btn btn-cancel" @click="cancelEdit">Отмена</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",

  data() {
    return {};
  },
  props: {
    task: {
      type: Object,
    },
  },
  methods: {
    editTask(id) {
      this.$emit("edit-task", id);
    },
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>

<style>
</style>