const state = {
    active: ''
}

const mutations = {
    init(state, act){
        console.log(arguments)
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