<template>

    <div>
        <nav class="navbar navbar-default navbar-fixed-top header">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">蒲生斌</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">
                        <img src="">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="header-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="dropdown ">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                                课程
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="" href="/courses" >全部课程</a></li>
                                <li><a class="" href="" >即将上线</a></li>
                                <li><a class="" href="">开发者</a></li>
                            </ul>
                        </li>
                        <li class="">
                            <a href="/paths">路径</a>
                        </li>
                        <li class="">
                            <a href="/questions">讨论区</a>
                        </li>
                        <li class=" bootcamp new-nav logo-1111">
                            <a href="/bootcamp">训练营</a>
                            
                        </li>
                        <li class=" new-nav logo-1111">
                            <a href="/vip">会员</a>
                            
                        </li>
                        
                    </ul>

                    
                    <div class="navbar-right btns">
                        <div v-if='login_username'>
                        <a class="btn btn-default navbar-btn sign-in" data-sign="signin" data-toggle="modal" href='/user'>{{ login_username }}</a>
                        <a class="btn btn-default navbar-btn sign-up" data-sign="signup" data-toggle="modal" @click="logout">注销</a>
                        </div>
                        <div v-else>
                        <a class="btn btn-default navbar-btn sign-in" data-sign="signin" data-toggle="modal" @click="change_login">登录</a>
                        <a class="btn btn-default navbar-btn sign-up" data-sign="signup" data-toggle="modal" @click="change_regist">注册</a>
                        </div>
                    </div>
                    

                    <form class="navbar-form navbar-right" action="search" method="get" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" name="search" autocomplete="off" placeholder="搜索 课程/问答">
                        </div>
                    </form>
                </div>
            </div>
        </nav>


        <div>
            <Modal v-model="opened">
                <div slot="header"><div>
                    <div style='padding:10px'></div>
                    <div><SwitchList v-model="login_or_regist" :datas="login_or_regist_chioce"></SwitchList></div>
                </div>
                    <div v-if="login_or_regist=='登录'"  style='padding:20px 20px 0px 5px'>

                        <div role="tabpanel" class="tab-pane active" id="signin-form">
                        <form action="/login" method="post">
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-envelope" style="margin:0;"></i>
                                    </div>
                                    <input type="text" name="login" class="form-control" v-model="username" placeholder="请输入用户名或手机号">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-lock" style="margin:0;"></i>
                                    </div>
                                    <input type="password" name="password" class="form-control" v-model="password" placeholder="请输入密码">
                                </div>
                            </div>
                            <div class="form-inline verify-code-item" style="display:none;">
                                <div class="form-group">
                                    <div class="input-group">
                                        <input type="text" name="captcha_v" class="form-control" placeholder="请输入验证码">
                                    </div>
                                </div>
                                <img class="verify-code" src="" source="https://www.shiyanlou.com/captcha.gif">
                            </div>
                            <div class="form-group remember-login">
                                <input name="remember" type="checkbox" value="y"> 下次自动登录
                                <a class="pull-right" href="">忘记密码？</a>
                            </div>
                            <div class="form-group">
                                
                                <div v-width="300"><Button class="h-btn h-btn-text-green h-btn-block" @click="login">进入</Button></div>

                            </div>
                            <div class="form-group widget-signin">
                                <img src="http://127.0.0.1:8000/static/sina.png" style="cursor:pointer" @click="sina">
                                <img src="http://127.0.0.1:8000/static/dingding.png" style="cursor:pointer" @click="dingding">
                            </div>
                        </form>
                    </div>

                    </div>
                    <div v-else style='padding:20px 20px 0px 5px'>

                        <div role="tabpanel" class="tab-pane" id="signup-form">
                            <form action="/register" method="post">
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-envelope" style="margin:0;"></i>
                                        </div>
                                        <input type="username" name="username" class="form-control" v-model="username" @blur="username_id" placeholder="请输入用户名">
                                    </div>
                                <p v-show='username_j'>{{ username_message }}</p>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-envelope" style="margin:0;"></i>
                                        </div>
                                        <input type="phone" name="phone" class="form-control" v-model="phone" placeholder="请输入手机号">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-lock" style="margin:0;"></i>
                                        </div>
                                        <input type="password" name="password2" class="form-control" v-model="password" placeholder="请输入密码">
                                    </div>
                                </div>
                              <div class="form-group">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-lock" style="margin:0;"></i>
                                        </div>
                                        <input type="password" name="password" class="form-control" v-model="password2" placeholder="请确认密码">
                                    </div>
                                </div>
                                <div class="form-inline">
                                    <div class="form-group">
                                        <div class="input-group">
<!--                                            <input type="text" name="code" class="form-control" placeholder="请输入验证码">-->
                                          <input type="text" v-model="code" class="form-control"  placeholder="请输入验证码">
                                          <Button @click="sendcode">获取验证码</Button>
                                        </div>
                                    </div>
                                    <img class="verify-code" src="" source="">
                                </div>
                                <div class="form-group">
                                    <br  />
                                    <div v-width="300"><Button class="h-btn h-btn-text-green h-btn-block" @click='regist'>注册</Button></div>
                                </div>
                                <div class="form-group agree-privacy">
                                    注册表示您已经同意我们的<a href="/privacy" target="_blank">隐私条款</a>
                                </div>
                                <div class="form-group widget-signup">
                                    <span>快速注册</span>
                                    <a href="/auth/qq?next="><i class="fa fa-qq"></i></a>
                                    <a href="/auth/weibo?next="><i class="fa fa-weibo"></i></a>
                                    <a href="/auth/weixin?next="><i class="fa fa-weixin"></i></a>
                                    <a href="/auth/github?next="><i class="fa fa-github"></i></a>
                                    <a href="/auth/renren?next="><i class="fa fa-renren"></i></a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div >

                </div>
                <div slot="footer"><button class="h-btn" @click="opened=false">取消</button></div>
            </Modal>
        </div>    
    </div>
</template>

<script>
import {login_post, register_post, send_phone_code_post} from '../axios_api/api'
export default {
    data() {
        return {
            opened: false,
            // 注册登录选项卡
            login_or_regist: '登录',
            login_or_regist_chioce: ['登录', '注册'],
            login_username:'',
            username: '',
            password: '',
            password2: '',
            phone:'',
            code:'',
            username_j:false,
            username_message:''
        };
    },
    beforeMount(){
        this.check_login()
    },
    methods: {
        // 钉钉登录
        dingding:function(){
            var appid = 'dingoajf8cqgyemqarekhr'
    	    var redirect_uri = 'http://127.0.0.1:8000/dingding_back/'

		    var url = 'https://oapi.dingtalk.com/connect/qrconnect?appid='+appid+'&response_type=code&scope=snsapi_login&state=STATE&redirect_uri='+redirect_uri
   
		window.location.href = url;
        },
        // 新浪微博登录
        sina:function(){
            // 组装url
            let url = "https://api.weibo.com/oauth2/authorize?client_id=156528899&redirect_uri=http://127.0.0.1:8000/weibo/";
            // 进行跳转
            window.location.href = url;
        },
        // 检查登录状态
        check_login(){
            if(localStorage.getItem('token')){
                this.login_username = localStorage.getItem('username')
                this.img = localStorage.getItem('img')
                this.uid = localStorage.getItem('uid')
            }
        },
        // 注销
        logout(){
            localStorage.removeItem('img')
            localStorage.removeItem('token')
            localStorage.removeItem('type')
            localStorage.removeItem('uid')
            localStorage.removeItem('username')
            this.$router.go(0)
        },
        // 注册
        change_regist(){
            this.opened = true,
            this.login_or_regist = '注册'
        },

        // 判断用户名
        username_id(){
            console.log('判断用户名')
            console.log(this.username== '')
            var reg = new RegExp(/^[a-zA-Z0-9_-]{4,16}$/);
            if(this.username==''){
                this.username_message = '用户名不能为空'
                this.username_j = true
            }else if(!reg.test(this.username)) //检测字符串是否符合正则表达式 4到14位（字母，数字，下划线，减号）
            {
                this.username_message = '用户名格式不正确'
                this.username_j = true
                return false
            };
        },

        // 注册接口
          regist: function() {
            console.log('register')
          //验证数据
            if (this.username == null || this.phone == null || this.password == null || this.password2 == null) {
                alert('信息不完整');
                return false;
            }
            //验证用户名
            var reg = new RegExp(/^[a-zA-Z0-9_-]{4,16}$/);
            if (!reg.test(this.username)) //检测字符串是否符合正则表达式 4到14位（字母，数字，下划线，减号）
            {
              this.message = "用户名格式不正确";
              alert(this.message)
              return false;
            }

            // 正则验证手机号
            var reg = new RegExp(/^[1][34578][0-9]{9}$/);
            if (!reg.test(this.phone)) //检测字符串是否符合正则表达式
            {
              this.message = "手机号格式不正确";
              alert(this.message)
              return false;
            }

            if (this.password != this.password2) {
                alert('两次密码不一致');
                return false;
            }

            var data = {username: this.username, password: this.password, phone: this.phone, code:this.code}
            register_post(data).then(resp=>{
                this.$Message(resp.message)
            })


      },
      sendcode: function() {

        console.log(this.email);

        // 1、验证手机号是否为空
        if (!this.phone) {
          this.message = "手机号不能为空";
          this.$Message(this.message);
          return false;
        }

        // 2、正则验证手机号格式
        var reg = new RegExp(/^[1][34578][0-9]{9}$/);
        if (!reg.test(this.phone)) //检测字符串是否符合正则表达式
        {
          this.message = "手机号格式不正确";
          this.$Message(this.message)
        }

        // 3、将用户短信发送
        var data = {phone:this.phone}
        send_phone_code_post(data).then((res) => {
          if (res.data.code == 200) {
            console.log('短信发送成功')
            alert(res.data.message)
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
      },
        // 登录
        change_login(){
            this.opened = true,
            this.login_or_regist = '登录'
        },

        login(){
            var data = {username:this.username, password: this.password}
            login_post(data).then(res=>{
                localStorage.setItem('username',res.username)
                localStorage.setItem('img',res.img)
                localStorage.setItem('token',res.jwt)
                localStorage.setItem('uid',res.uid)
                this.login_username = res.username
                this.opened = false
                alert(res.message)
                this.$router.push('/')
            })

        }

        // login(){
        //     var data = new FormData()
        //     data.append('username', this.username);
        //     data.append('password', this.password);
        //     console.log(data)

            
        //     this.axios.post('http://127.0.0.1:8000/login/', data).then(resp=>{
        //         console.log(resp.data.message)
        //     })

        // }
    //   login: function() {
    //     this.opened = true,
    //     this.login_or_regist = '登录'
    //     let formData = new FormData()
    //     formData.append('username', '13051098771');
    //     formData.append('password', 'q1992522722');
    //     this.axios({
    //       url: 'http://127.0.0.1:8000/login/',
    //       method: 'post',
    //       data: formData
    //     }).then(res => {
    //       if (res.data.code == 200) {
    //         // 登录成功
    //         alert(res.data.message);
    //         localStorage.setItem("is_login",res.data.username)

    //         console.log(res);
    //         // this.$router.push({
    //         //   'name': "Course"
    //         // })
    //       } else {
    //         console.log(res);
    //         alert(res.data.message)
    //       }
    //     })
    //   },
    }
}
</script>

<style>
    @font-face {
        font-family: "lantingxihei";
        src: url("/static/fonts/FZLTCXHJW.TTF");
    }

    /* modal 模态框*/
    #invite-user .modal-body {
        overflow: hidden;
    }
    #invite-user .modal-body .form-label {
        margin-bottom: 16px;
        font-size:14px;
    }
    #invite-user .modal-body .form-invite {
        width: 80%;
        padding: 6px 12px;
        background-color: #eeeeee;
        border: 1px solid #cccccc;
        border-radius: 5px;
        float: left;
        margin-right: 10px;
    }
    #invite-user .modal-body .msg-modal-style {
        background-color: #7dd383;
        margin-top: 10px;
        padding: 6px 0;
        text-align: center;
        width: 100%;
    }
    #invite-user .modal-body .modal-flash {
        position: absolute;
        top: 53px;
        right: 74px;
        z-index: 999;
    }
    /* end modal */

    .en-footer {
        padding: 30px;
        text-align: center;
        font-size: 14px;
    }
    .navbar-banner {
        margin-top: 50px;
        background: url("/static/img/homepage-bg.png");
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
