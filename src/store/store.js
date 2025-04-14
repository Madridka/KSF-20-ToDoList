import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: [],
        activeUser: 1,
    },
    getters: {
        TODOS: state => {
            return state.todos
        },
    },
    mutations: {
        setTodo(state, payload) {
            state.todos = payload
        },
    },
    actions: {
        async getTodo({ commit }) {
            const respone = await fetch('https://jsonplaceholder.typicode.com/users/' + this.state.activeUser + '/todos');
            const data = await respone.json();
            commit("setTodo", data)
        },
    }
})

export default store