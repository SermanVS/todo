import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lang: undefined,
        isAuth: false,
        profile: "",
        tasks: [],
        done: []
    },
    getters: {
        lang: state => {
            return state.lang;
        },
        isAuth: state => {
            return state.isAuth;
        },
        profile: state => {
            return state.profile;
        },
        tasks: state => {
            return state.tasks;
        },
        done: state => {
            return state.done;
        }
    },
    mutations: {
        setLang: (state, payload) => {
            state.lang = payload;
        },
        setIsAuth: (state, payload) => {
            state.isAuth = payload;
        },
        setProfile: (state, payload) => {
            state.profile = payload;
        },
        setTasks: (state, payload) => {
            state.tasks.push(payload);
        },
        setDone: (state, payload) => {
            state.done.push(payload);
        }
    }
});
