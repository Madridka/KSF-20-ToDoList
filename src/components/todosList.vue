<template>
  <div class="todo">
    <div v-for="item in todoList" :key="item.id">
      <div class="todo__item" v-if="editingId !== item.id">
        <input type="checkbox" :checked="item.completed" />
        <div class="todo__item-title" v-if="item.completed === true">
          <span class="todo__item-title-completed">{{ item.title }}</span>
        </div>
        <div class="todo__item-title" v-else>
          {{ item.title }}
        </div>
        <Button class="btn btn-edit" @click="startEdit(item)">Ред.</Button>
        <Button class="btn btn-del" @click="deleteTask(item)">Удал.</Button>
      </div>
      <div class="editMode" v-else>
        <input
          class="editMode-input"
          type="text"
          v-model="editingTask.title"
          placeholder="Дело"
        />
        <Button :disabled="!isDisable" class="btn btn-save" @click="saveEdit"
          >Сохр.</Button
        >
        <Button class="btn btn-edit" @click="cancelEdit">Отм.</Button>
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

  computed: {
    todoList() {
      return this.$store.getters.TODOS;
    },
    isDisable() {
      return this.editingTask.title !== "";
    },
  },

  created() {
    this.$store.dispatch("getTodo");
  },

  methods: {
    deleteTask(item) {
      this.$store.dispatch("deleteTask", item);
    },
    startEdit(item) {
      this.editingId = item.id;
      this.editingTask = { ...item };
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
};
</script>


<style lang="scss" scoped>
.todo {
  width: 700px;
  height: 900px;

  &__item {
    margin: 10px;
    display: flex;
    // flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    border-bottom: 1px solid black;

    &-title {
      flex: 1;
      text-align: left;

      &-completed {
        text-decoration: line-through;
      }
    }
  }
}

.editMode {
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;

  &-input {
    border-radius: 4px;
    flex: 1;
    gap: 10px;
    margin: 5px;
  }
}
</style>
