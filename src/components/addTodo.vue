<template>
  <div>
    <form class="addTodo" type="text" @submit.prevent="addTodo()">
      <input type="text" v-model.lazy="todo" />
      <Button class="btn btn-add"> Сохр. </Button>
    </form>
  </div>
</template>

<script>
export default {
  name: "addTodo",
  components: {},
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addTodo() {
      const newTask = {
        id: Date.now(),
        title: this.todo,
        completed: false,
      };
      this.$store.dispatch("addTodo", newTask);
      this.todo = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.addTodo {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  gap: 10px;

  & input {
    padding: 8px 12px;
    border: 1px solid black;
    border-radius: 4px;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 5px (0, 123, 255, 0.3);
    }
    &:hover {
      border-color: #4caf50;
    }
  }
}
</style>