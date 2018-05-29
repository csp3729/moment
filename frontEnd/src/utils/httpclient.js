import axios from 'axios';

const baseUrl = 'http://localhost:88/';

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {

        })
    },

    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            
        })
    }
}