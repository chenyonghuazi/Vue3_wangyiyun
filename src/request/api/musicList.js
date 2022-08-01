import request from '..'

export const getMusicItemList = (params) => {

    return request({
        url:'/playlist/detail',
        method:'get',
        params
    })    
}

export const getMusic = (params)=>{
    return request({
        url:'/playlist/track/all',
        method:'get',
        params
    })
}