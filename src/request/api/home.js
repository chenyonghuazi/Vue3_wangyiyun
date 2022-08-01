import request from '..'

export const getHomeBanner = () => {
    return request({
        url: '/banner?type=2',
        method: 'get'
    })
}

export const getMusicList = ()=>{
    return request({
        url:'/personalized?limit=10',
        method:'get'
    })
}

