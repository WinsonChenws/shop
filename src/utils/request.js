// 粉装小程序请求的方法

function request(url, data = {}, header = {}, method = "GET") {
    return new Promise((resolve, reject) => {
        wx.request({
            url, //开发者服务器接口地址",
            data, //请求的参数",
            method,
            header,
            success: res => {
                resolve(res)
            },
            fail: () => {
                reject()
            },
        });
    })
}
export default request;