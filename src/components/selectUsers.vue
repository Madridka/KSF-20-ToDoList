<template>
  <div class="hello">
    <select @change="changeActiveUser($event)">
      <option v-for="user in usersList" :key="user" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <br />
    {{ $store.state.activeUser }}
  </div>
</template>

<script>
export default {
  name: "selectUsers",

  components: {},

  data() {
    return {
      activeUser: null,
    };
  },

  computed: {
    usersList() {
      return this.$store.getters.USERS;
    },
  },

  created() {
    this.$store.dispatch("getUsers");
  },
  updated() {
    this.$store.dispatch("getTodo");
  },
  
  methods: {
    changeActiveUser(event) {
      const userId = event.target.value;
      this.$store.dispatch("changeActiveUser", userId);
    },
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
