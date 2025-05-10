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
import _ from "lodash";

export default {
  name: "UsersForm",
  data() {
    return {
      users: [],
      activeUser: 1,
    };
  },

  watch: {
    activeUser(newValue) {
      this.$emit("active-user", newValue);
    },
  },
  created() {
    this.activeUserToApp = _.throttle(this.activeUserToApp, 500, {
      leading: true,
      trailing: false,
    });
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
        window.alert("Ошибка при загрузке данных");
      }
    },

    activeUserToApp() {
      this.$emit("active-user", this.activeUser.id);
    },
  },
};
</script>


<style lang="scss" scoped>
.user__select {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;

  select {
    font-size: 15px;
    border-radius: 18px;
  }
}
</style>
