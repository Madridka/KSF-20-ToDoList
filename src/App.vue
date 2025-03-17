<template>
  <div id="app">
    <title>Todo App</title>

    <div class="aaa">
      <img :src="require('@/assets/eisenhower-matrix.jpg')" />
    </div>
    <div class="centered-main-page-element">
      <TaskInput @task-added="addNewTask"></TaskInput>
      <TaskList :tasks="tasks"></TaskList>


      <!--         
        <h3>Todo</h3>
        <ul id='incompleteTasks'>
            <li><input type='checkbox'><label class="task">Pay Bills</label><input type="text" class="task"><button
                    class="edit">Edit</button><button class="delete"><img :src="require('@/assets/remove.svg')"></button></li>
            <li class="editMode"><input type="checkbox"><label class="task">Go Shopping</label><input type="text"
                    value="Go Shopping" class="task"><button class='edit'>Save</button><button class="delete"><img
                        :src="require('@/assets/remove.svg')"></button></li>
        </ul>
        <h3>Completed</h3>
        <ul id="completed-tasks">
            <li><input type="checkbox" checked><label class="task">See the Doctor</label><input type="text"
                    class="task"><button class="edit">Edit</button><button class="delete"><img
                        :src="require('@/assets/remove.svg')"></button>
            </li>
        </ul> -->
    </div>
  </div>
</template>

<script>
import TaskInput from "./components/TaskInput.vue";
import TaskList from "./components/TaskList.vue";

export default {
  name: "App",
  components: {
    TaskInput, 
    TaskList,
  },

  data() {
    return {
      tasks: ["Оплатить счета", "Погулять с собакой"],
    };
  },

  methods: {
    addNewTask(task) {
      this.tasks.push(task);
    },
  },
};
</script>

<style>
@import "./assets/style.css";
</style>
