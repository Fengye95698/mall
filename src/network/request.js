import axios from "axios";
export function request(config){
    // 1.创建axios的实例
    const instance1 = axios.create({
        baseURL:'http://localhost:3333',
        timeout:5000
    })
    // 2.axios的拦截器
    // 2.1 请求拦截
    instance1.interceptors.request.use(config=>{
        // console.log(config);
        // 1.比如config一些信息不符合服务器的要求 需要进行处理后再传过去
        // 2.比如每次发送网络请求时，都希望再界面中显示一个请求的图标
        // 3.某些网络请求（比如登录token），必须携带一些特殊的信息
        return config
    },err=>{
        // console.log(err);
    })

    // 2.2 响应拦截
    instance1.interceptors.response.use(res=>{
        // console.log(res);
        return res
    },err=>{
        // console.log(err);
    })
    // 3.发起真正的网络请求 (原本就是一个promise对象)
    return instance1(config)

}
// export function request(config,success,failure){
//     // 1.创建axios的实例
//     const instance = axios.create({
//         baseURL:'',
//         timeout:5000
//     })
//     instance(config)
//     .then(res=>{
//         success(res)
//     })
//     .catch(err=>{
//         failure(err)
//     })
// }