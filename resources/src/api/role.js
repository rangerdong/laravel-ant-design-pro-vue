const prefix = '/roles';
import { axios } from '@/utils/request'


export function getList(parameter) {
    return axios({
        url: prefix,
        method: 'get',
        params: parameter
    })
}

export function addModel(parameter) {
    return axios({
        url: prefix,
        method: 'post',
        data: parameter
    })
}

export function getModel(id) {
    return axios({
        url: prefix + '/' + id,
        method: 'get',
    })
}

export function updateModel(id, parameter) {
    return axios({
        url: prefix + '/' + id,
        method: 'put',
        data: parameter
    })
}

export function delModel(ids) {
    return axios({
        url: prefix,
        method: 'delete',
        data: {
            ids: ids
        }
    });
}

export function getRoleOptions() {
    return axios({
        url: prefix + '/options',
        method: 'get'
    })
}
