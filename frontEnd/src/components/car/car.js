import http from '../../utils/httpclient';

const state = {
    datalist: [],
    order: []
}

const mutations = {
    init(state, _param){
        http.get('carlist', _param).then((res) =>{
            state.datalist = res.data;
        })
    },
    order(state, _param){
        state.order = _param
    }
}

const actions = {
    getList(content, _param){
        content.commit('init', _param)
    },
    setOrder(content, _param){
        content.commit('order', _param)
    },
}

export default {
    state,
    mutations,
    actions
}