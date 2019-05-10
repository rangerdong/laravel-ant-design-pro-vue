export function parsePaginate(resData) {
    return {
        pageSize: resData.per_page,
        pageNo: resData.current_page,
        totalCount: resData.total,
        totalPage: resData.last_page,
        data: resData.data
    }
}

export function getFileName(filePath) {
    let res = filePath.split('/');
    return res[res.length - 1];
}
