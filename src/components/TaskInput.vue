<template>
  <div>
    <label for="new-task">Список дел</label>
    <form class="task-row-wrapper" @submit.prevent="addTask">
      <input id="new-task" class="task" v-model="newTask" type="text" />
      <button @click="addTask">Доб.</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskInput",

  data() {
    return {
      newTask: "",
    };
  },

  methods: {
    addTask() {
      if (this.newTask.trim() === "") return;
      this.$emit("task-added", this.newTask);
      this.newTask = "";
    },
  },
};
</script>

<style scoped>
.task {
  width: 71%;
  display: inline-block;
  flex-grow: 1;
}
.task-row-wrapper {
  display: flex;
}

label[for="new-task"] {
  color: #333;
  font-weight: 700;
  font-size: 15px;
  border-bottom: 2px solid #333;
  padding: 30px 0 10px;
  margin: 0;
  text-transform: uppercase;
}

input[type="text"] {
  margin: 0;
  font-size: 18px;
  line-height: 18px;
  height: 21px;
  padding: 0 9px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 6px;
  font-family: Lato, sans-serif;
  color: #888;
}

input[type="text"]:focus {
  color: #333;
}

label[for="new-task"] {
  display: block;
  margin: 0 0 20px;
}
input#new-task {
  width: 318px;
}
</style>