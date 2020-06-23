import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        let loading = document.getElementById('ajaxLoading');
        if (options.data.isShowLoading !== false){
            loading.style.display = 'block';
        }
        let baseApi = '/api';
        let data = options.method.toLocaleLowerCase() === 'get' ? 'params' : 'data';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:options.method,
                baseURL:baseApi,
                timeout:5000,
                [data]: (options.data && options.data.params) || ''
            }).then((res)=>{
                loading.style.display = 'none';
                resolve(res.data)
            }).catch((err)=>{
                // loading.style.display = 'none';
                reject(err)
            })
        });
    }
}