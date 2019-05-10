const prefix = '/permissions';
import { axios } from '@/utils/request'


export function getList(parameter) {
    return axios({
        url: prefix,
        method: 'get',
        params: parameter
    })
}
export function add(parameter) {
    return axios({
        url: prefix,
        method: 'post',
        data: parameter
    })
}

export function detail(id) {
    return axios({
        url: prefix + '/' + id,
        method: 'get',
    })
}

export function update(id, parameter) {
    return axios({
        url: prefix + '/' + id,
        method: 'put',
        data: parameter
    })
}

export function del(ids) {
    return axios({
        url: prefix,
        method: 'delete',
        data: {
            ids: ids
        }
    });
}

export function getMenuOptoin() {


}
