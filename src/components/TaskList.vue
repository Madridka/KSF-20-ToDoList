<template>
  <div>
    <h3>СДЕЛАТЬ: </h3>
    <div class="incompleteTasks" v-for="(task, index) in tasks" :key="index">
        <input type="checkbox">
        <div class="task">{{ task }}</div>
        <button class="edit">Изменить</button>
        <button class="delete"><img :src="require('@/assets/remove.svg')"></button>
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
    }
  }
}
</script>

<style>

</style>