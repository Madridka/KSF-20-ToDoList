<template>
  <div>
    <div v-for="item in todoList" :key="item.id">
      <input type="checkbox" :checked="item.completed" />{{ item.title }}
      <btnAction :todo="item" @start-edit="startEdit" />
    </div>
  </div>
</template>

<script>
export default {
  name: "todosList",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    todoList() {
      return this.$store.getters.TODOS;
    },
  },
  created() {
    this.$store.dispatch("getTodo");
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.inline {
  margin-top: 20px;
  padding: 10px;
  background-color: #e8f5e9;
  border-radius: 4px;
  text-align: right;
  font-size: 16px;
}
</style>
