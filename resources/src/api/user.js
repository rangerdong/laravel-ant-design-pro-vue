const prefix = '/users';
import { axios } from '@/utils/request'


export function getUserList(parameter) {
    return axios({
        url: prefix,
        method: 'get',
        params: parameter
    })
}
export function addUser(parameter) {
    return axios({
        url: prefix,
        method: 'post',
        data: parameter
    })
}

export function getUser(id) {
    return axios({
        url: prefix + '/' + id,
        method: 'get',
    })
}

export function updateUser(id, parameter) {
    return axios({
        url: prefix + '/' + id,
        method: 'put',
        data: parameter
    })
}

export function delUser(ids) {
    return axios({
        url: prefix,
        method: 'delete',
        data: {
            ids: ids
        }
    });

}
