<template>
  <div class="new__task">
    <form @submit.prevent="addTask">
      <input
        id="new-task"
        v-model="newTask"
        type="text"
        placeholder="Добавить задачу"
      />
      <button class="btn btn-add" @click="addTask">Доб.</button>
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

<style lang="scss" scoped>
.new__task {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  label {
    position: absolute;
    top: -20px;
    color: #333;
  }

  form {
    position: relative;
    display: flex;
    align-items: center;
    width: 300px;
  }

  input {
    width: 100%;
    padding: 10px 50px 10px 15px;
    border: 2px solid #ccc;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }
  }
}
</style>