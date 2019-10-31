import Vuex from 'vuex'
export const store = new Vuex.Store({
    state: {
        logged: 0,
        section: 0
    },
    mutations: {
        setSection(state, n) {
            state.section = n
        },
        setLogged(state, n) {
            state.logged = n
        }
    }
});
