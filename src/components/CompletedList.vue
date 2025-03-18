<template>
  <div>
    <h3>ЗАВЕРШЕНО:</h3>
    <ul class="completed-tasks">
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
</template>

<script>
export default {
  name: "CompletedList",
  props: {
    tasks: {
      type: Array,
    },
  },
  
};
</script>