<template>
  <ul>
    <li>
      <div class="task" v-if="editingId !== task.id">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="handleChange"
        />
        <label class="task">
          {{ task.task }}
        </label>

        <button class="btn-edit" @click="startEdit(task.id)">Изменить</button>
        <button class="btn-del" @click="deleteTask(task.id)">
          <img :src="require('@/assets/remove.svg')" alt="Delete task" />
        </button>
      </div>
      <div class="editMode" v-else>
        <input
          type="checkbox"
          :checked="task.completed"
          @change="handleChange"
        />
        <input type="text" v-model="localEditTask" placeholder="Название" />
        <label>
          {{ task.task }}
        </label>
        <button class="btn-edit" @click="saveEdit">Сохр.</button>
        <button class="btn btn-del" @click="cancelEdit">Отмена</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TaskItem",

  props: {
    task: {
      type: Object,
    },
    editingId: {
      type: Number,
      default: null,
    },
    editingTask: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      localEditTask: "",
    };
  },

  watch: {
    editingTask(newVal) {
      this.localEditTask = newVal;
    },
  },

  methods: {
    handleChange(event) {
      const updatedTask = { ...this.task, completed: event.target.checked };
      this.$emit("update-task", updatedTask);
    },
    startEdit(id) {
      this.localEditTask = this.task.task;
      this.$emit("start-edit", id);
    },
    saveEdit() {
      console.log("TaskItem saveEdit:", this.localEditTask);
      this.$emit("save-edit", {
        task: this.localEditTask,
      });
    },

    cancelEdit() {
      this.$emit("cancel-edit");
    },

    deleteTask(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  width: 71%;
  display: inline-block;
  flex-grow: 1;
}

.btn {
  &-del {
    img {
      height: 2em;
      transform: rotateZ(45deg);
      transition: transform 200ms ease-in;
    }
    &:hover img {
      transform: rotateZ(0);
    }
  }
}

li {
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li > * {
  vertical-align: middle;
}

li > input[type="checkbox"] {
  margin: 0 10px;
}
li > label {
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 18px;
  width: 318px;
}
li > input[type="text"] {
  width: 318px;
}
ul li label {
  display: none;
}

.editMode {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.editMode input[type="text"] {
  width: 318px;
  display: inline-block;
}

ul li.editMode input[type="text"] {
  display: inline-block;
}

ul li.editMode label {
  display: flex;
  justify-content: end;
  display: none;
}
</style>