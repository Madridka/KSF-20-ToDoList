<template>
  <div>
    <div v-for="item in todoList" :key="item.id">
              <div v-if="editingId !== item.id">
          <input type="checkbox" :checked="item.completed" />{{ item.title }}
          <Button :todo="item" @start-edit="startEdit" />
        </div>
        <div v-else>
          <input type="text" v-model="editingTask.title" placeholder="Дело" />
          <button @click="saveEdit">Сохранить</button>
          <button @click="cancelEdit">Отмена</button>
        </div>
    </div>
  </div>
</template>

<script>
import Button from "../ui/Button.vue";

export default {
  name: "todosList",
  components: {
    Button,
  },
  data() {
    return {
      editingId: null,
      editingTask: "",
    };
  },
  methods: {
    startEdit(todo) {
      this.editingId = todo.id;
      this.editingTask = { ...todo };
    },
    saveEdit() {
      this.$store.dispatch("updateTask", this.editingTask);
      this.editingId = null;
      this.editingTask = { title: "", completed: false };
    },
    cancelEdit() {
      this.editingId = null;
      this.editingTask = { title: "", completed: false };
    },
  },
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
