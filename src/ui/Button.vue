<template>
  <div>
    <button @click.stop="deleteTask">DEL</button>
    <button @click.stop="editTask">EDIT</button>
  </div>
</template>

<script>
export default {
  name: "btnDel",
  components: {},
  data() {
    return {};
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editTask() {
      this.$emit('start-edit', this.todo)
    },
    deleteTask() {
      this.$store.dispatch("deleteTask", this.todo);
    },
  },
  computed: {
    todoList() {
      return this.$store.getters.TODOS;
    },
  },
};
</script>

<style>
</style>