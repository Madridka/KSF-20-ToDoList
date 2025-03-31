<template>
  <div class="user__select">
    <select v-model="activeUser" @change="activeUserToApp">
      <option v-for="user in users" :key="user" :value="user.id">
        {{ user.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "UsersForm",
  data() {
    return {
      users: [],
      activeUser: 1,
    };
  },
  props: {},
  watch: {
    activeUser(newValue) {
      this.$emit("active-user", newValue);
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async fetch() {
      try {
        const responseUsers = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        this.users = await responseUsers.json();
      } catch (error) {
        console.log("Ошибка при загрузке данных");
      }
    },

    activeUserToApp() {
      console.log('Выбран пользователь:', this.activeUser.id);
      this.$emit("active-user", this.activeUser.id);
    },
  },
};
</script>


<style>
</style>
