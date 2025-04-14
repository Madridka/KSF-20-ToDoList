import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        activeUser: 1,

        todos: [],
        users: []
    },
    getters: {
        TODOS: state => {
            return state.todos
        },
        USERS: state => {
            return state.users
        }
    },
    mutations: {
        setTodo(state, payload) {
            state.todos = payload
        },
        setUsers(state, payload) {
            state.users = payload
        },
        changeActiveUser(state, payload) {
            state.activeUser = payload
        },
    },
    actions: {
        async getTodo({ commit }) {
            const respone = await fetch('https://jsonplaceholder.typicode.com/users/' + this.state.activeUser + '/todos');
            const data = await respone.json();
            commit("setTodo", data)
        },
        async getUsers({ commit }) {
            const respone = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await respone.json();
            commit("setUsers", data)
        },
        changeActiveUser({ commit }, payload) {
            commit("changeActiveUser", payload)
        },
    }
})

export default store