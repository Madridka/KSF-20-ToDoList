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
        addTodo: (state, payload) => {
            state.todos.push(payload)
        },
        deleteTask(state, todo) {
            state.todos = state.todos.filter(item => item.id != todo.id);
        },
        updateTask(state, updatedTask) {
            const index = state.todos.findIndex(item => item.id === updatedTask.id);
            if (index !== -1) {
                state.todos.splice(index, 1, updatedTask);
            }
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
        addTodo({ commit }, payload) {
            commit("addTodo", payload)
        },
        deleteTask({ commit }, payload) {
            commit("deleteTask", payload)
        },
        updateTask({ commit }, payload) {
            commit('updateTask', payload);
        },
    }
})

export default store