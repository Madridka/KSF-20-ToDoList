<template>
  <div class="incompletedTasks">
    <h3>СДЕЛАТЬ:</h3>
    <ul>
      <div v-for="(task, id) in tasks" :key="id">
        <div v-if="task.completed !== true">
          <li>
            <input type="checkbox" v-model="task.completed" />
            <div class="task">{{ task.todo }}</div>
            <button class="edit">Изменить</button>
            <button class="delete" @click="deleteTask(task.id)">
              <img :src="require('@/assets/remove.svg')" />
            </button>
          </li>
        </div>
      </div>
    </ul>

  <div class="completed-tasks">
    <h3>ЗАВЕРШЕНО:</h3>
    <ul >
      <div v-for="(task, id) in tasks" :key="id">
        <div v-if="task.completed">
          <li>
          <input type="checkbox" v-model="task.completed" />
          <div class="task">{{ task.todo }}</div>
          <button class="edit">Изменить</button>
          <button class="delete" @click="deleteTask(task.id)">
            <img :src="require('@/assets/remove.svg')" />
          </button>
        </li>
        </div>
      </div>
    </ul>
  </div>

  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {};
  },
  props: {
    tasks: {
      type: Array,
    },
  },
  methods: {
    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>

<style>
</style>