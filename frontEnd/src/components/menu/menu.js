const state = {
    active: 'home'
}

const mutations = {
    init(state, act){
        state.active = act
    }
}

const actions = {
    setActive(content, act){
        content.commit('init', act)
    }
}

export default {
    state,
    mutations,
    actions
}