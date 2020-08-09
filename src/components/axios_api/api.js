//将我们http.js中封装好的  get,post.put,delete  导过来

import { axios_get, axios_post, axios_delete, axios_put } from './http.js'


//按照格式确定方法名
export const jwt_send_get = p => axios_post("/users/login/", p)

export const login_post = p => axios_post("/login/", p)

export const register_post = p => axios_post("/register/", p)

export const getcourses_get = p => axios_get('/getcourses/', p)

export const getcourses1_get = p => axios_get('/getcourses1/', p)

export const get_course_info_get = p => axios_get('/courseinfo/', p)

export const gettags_get = p => axios_get('/gettags/', p)

export const user_info_get = p => axios_get('/user_info/', p)

export const user_info_post = p => axios_post('/user_info/', p)

export const send_phone_code_post = p => axios_post('/sendalysms/', p)

export const verif_post = p => axios_post("/verif/", p)





// 获取单个商品信息
export const course_show_get = p => axios_get("/courseinfo/", p)

// 获取作者信息
export const auth_info_get = p => axios_get("/authinfo/", p)
    // 获取作者作品总数
export const course_count_get = p => axios_get("/coursecount/", p)
    // 获取用户学习状态信息
export const user_lean_get = p => axios_get("/user_lean/", p)
    // 用户添加课程
export const insert_learn_get = p => axios_get("/insertlearn/", p)

// 会员页面展示---请求会员列表接口
export const get_vip_list_get = p => axios_get('/vip_list/', p)

// 会员订单接口
export const get_vip_order_get = p => axios_get('/create_order/', p)

// 沙箱支付接口
export const get_alipay_get = p => axios_get('/alipay/', p)

// 订单入库库接口
export const get_order_mysql_post = p => axios_post('/alipay/', p)

// 支付成功后，请求后端修改数据库参数
export const get_succeed_get = p => axios_get('/get_alipy/', p)

// 获取七牛云token
export const get_uptoken = p => axios_get('/uptoken/', p)

// 获取用户信息
export const user_get = p => axios_get('/getuser/', p)