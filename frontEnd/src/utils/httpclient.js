import axios from 'axios';

const baseUrl = 'http://192.168.0.112:8081/';

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios({
                url: filterUrl(_url),
                params: _params,
                method: 'get',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                //     'auth': window.localStorage.getItem('token')
                }
            }).then((res) => {
                if(res.data.status){
                    resolve(res.data)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },

    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios({
                url: filterUrl(_url),
                data: _params,
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                // //     'auth': window.localStorage.getItem('token')
                }
            }).then((res) => {
                if(res.data.status){
                    resolve(res.data)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    }
}