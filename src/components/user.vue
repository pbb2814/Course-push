<template>
    <div>

        <lab_head  />
        <lab_header  />

        <div class="userinfo-banner layout-no-margin-top">
            <div class="container layout">
                <div class="row">
                    <div class="col-md-9 clearfix">
                        <div class="pull-left userinfo-banner-avatar">
                            
            
            
            
            <div class="user-avatar ">
                <a class="avatar" href="/user_profile" target="_blank">
                    <img :src="img">
                </a>
                
                <a class="member-icon" href="/vip" target="_blank">
                    
                <img v-if='vip==1' src="/static/img/vip0-icon.png">
                <img v-if='vip==2' src="/static/img/vip-icon.png">
                <img v-if='vip==3' src="/static/img/vip2-icon.png">

                </a>
                
            </div>

                            
                        </div>
                        <div class="pull-left userinfo-banner-details">
                            <div class="userinfo-banner-meta">
                                
            
            
            
            <div class="user-username ">
                <a class="username" href="/user_profile" target="_blank">

                        {{ username }}


                </a>
                <span class="user-level">{{ experience }}</span>
            </div>

                                
                                    
                                        
                                    
                                    
                                
                            </div>
                            <div class="userinfo-banner-status">
                            
                                
                                    <span>{{ occupation }}</span>
                                    
                                        <a href="/edu/1" target="_blank">{{ school }}</a>
                                    
                                
                            
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 userinfo-banner-labinfo">
                        <div class="userinfo-banner-level">
                            <img src="/static/img/lou-level.png">
                            <div class="userinfo-current-level"><span>{{ experience }}</span> 楼</div>
                            <div class="userinfo-level-more" data-toggle="tooltip" data-placement="bottom" title="在实验环境中动手输入代码或命令时才计入有效学习时间">
                                
                                距 {{ experience + 1 }} 楼还需 {{ experience }} 分钟有效学习时间
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container layout">
            <div class="row">
                <div class="col-md-9 layout-body">
                    
        <div class="content" role="tabpanel">
            
            
            <ul class="nav nav-tabs" rolw="tablist">
                <li role="presentation" class="active">
                    <a href="study.html" role="tab">实验课程</a>
                </li>
                <li role="presentation" >
                    <a href="reports.html" role="tab">实验报告</a>
                </li>
                <li role="presentation" >
                    <a href="questions.html" role="tab">实验讨论</a>
                </li>
                
            </ul>

            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active">
                    <div class="row">
                        <div class="col-md-12">
                            <a>
                                <span class="label label-success">学过的</span>
                            </a>
                            <a href="study.html">
                                <span class="label label-default">关注的</span>
                            </a>
                            
                            <a href="study.html">
                                <span class="label label-default">发布的</span>
                            </a>
                            
                        </div>
                        
                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="Hadoop部署及管理" src="https://dn-simplecloud.shiyanlou.com/ncn35.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="Hadoop部署及管理">Hadoop部署及管理</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        4246
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="武侠小说词频统计" src="https://dn-simplecloud.shiyanlou.com/ncn40.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="武侠小说词频统计">武侠小说词频统计</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        751
                        
                    </span>
                    
                        
                        <span class="course-money pull-right">会员</span>
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="Java实现电子通讯录" src="https://dn-simplecloud.shiyanlou.com/1467359168370.png">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="Java实现电子通讯录">Java实现电子通讯录</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        919
                        
                    </span>
                    
                        
                        <span class="course-money pull-right">会员</span>
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="Hadoop入门进阶课程" src="https://dn-simplecloud.shiyanlou.com/ncn237.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="Hadoop入门进阶课程">Hadoop入门进阶课程</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        5316
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="scapy编写简单的ARP扫描脚本" src="https://dn-simplecloud.shiyanlou.com/ncn85.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="scapy编写简单的ARP扫描脚本">scapy编写简单的ARP扫描脚本</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        396
                        
                    </span>
                    
                        
                        <span class="course-money pull-right">会员</span>
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="Python Flask Web框架" src="https://dn-simplecloud.shiyanlou.com/ncn29.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="Python Flask Web框架">Python Flask Web框架</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        4357
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="Kali 渗透测试 - 服务器攻击实战（20个实验）" src="https://dn-simplecloud.shiyanlou.com/1480386391850.png">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="Kali 渗透测试 - 服务器攻击实战（20个实验）">Kali 渗透测试 - 服务器攻击实战（20个实验）</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        171
                        
                    </span>
                    
                        <span class="course-bootcamp pull-right">训练营</span>
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="Windows Server 2012 IIS 服务安装部署实战" src="https://dn-simplecloud.shiyanlou.com/1473430659133.png">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="Windows Server 2012 IIS 服务安装部署实战">Windows Server 2012 IIS 服务安装部署实战</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        242
                        
                    </span>
                    
                        
                        <span class="course-money pull-right">会员</span>
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="大数据带你看穿航班晚点的套路" src="https://dn-simplecloud.shiyanlou.com/1481512481253.png">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="大数据带你看穿航班晚点的套路">大数据带你看穿航班晚点的套路</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        519
                        
                    </span>
                    
                        
                        <span class="course-money pull-right">会员</span>
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="新手指南之玩转实验楼" src="https://dn-simplecloud.shiyanlou.com/ncn63.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="新手指南之玩转实验楼">新手指南</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        58089
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="../../courses/show.html">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="SQLAlchemy 基础教程" src="https://dn-simplecloud.shiyanlou.com/1481689616072.png">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="SQLAlchemy 基础教程">SQLAlchemy 基础教程</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        352
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="/courses/1">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="Linux 基础入门（新版）" src="https://dn-simplecloud.shiyanlou.com/ncn1.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="Linux 基础入门（新版）">Linux 基础入门（新版）</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        85258
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="/courses/9">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="MySQL 基础课程" src="https://dn-simplecloud.shiyanlou.com/ncn9.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="MySQL 基础课程">MySQL 基础课程</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        13940
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="/courses/28">
                <div class="sign-box">
                    
                    
                        <img class="pull-left" src="/static/img/course_private.png">
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="MySQL 参考手册中文版" src="https://dn-simplecloud.shiyanlou.com/ncn28.jpg">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="MySQL 参考手册中文版">MySQL 参考手册中文版</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        6916
                        
                    </span>
                    
                        
                    
                </div>
            </a>
        </div>

                            
                                


        <div class="col-md-4 col-sm-6  course">
            <a class="course-box" href="/courses/619">
                <div class="sign-box">
                    
                    
                    
                </div>
                <div class="course-img">
                    
                    <img alt="ThinkPHP 简易文章管理系统" src="">
                    
                </div>
                
                <div class="course-body">
                    <span class="course-title" data-toggle="tooltip" data-placement="bottom" title="ThinkPHP 简易文章管理系统">ThinkPHP 简易文章管理系统</span>
                </div>
                <div class="course-footer">
                    <span class="course-per-num pull-left">
                        <i class="fa fa-users"></i>
                        
                        170
                        
                    </span>
                    
                        
                        <span class="course-money pull-right">会员</span>
                        
                    
                </div>
            </a>
        </div>

                            
                            

        <nav class="pagination-container">
            <ul class="pagination">
                
                <li class="disabled">
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">上一页</span>
                    </a>
                </li>
                
                
                
                <li class="active">
                    <a href="/user/13?page=1">1</a>
                </li>
                
                
                
                <li class="">
                    <a href="/user/13?page=2">2</a>
                </li>
                
                
                
                <li class="">
                    <a href="/user/13?page=3">3</a>
                </li>
                
                
                
                <li class="">
                    <a href="/user/13?page=4">4</a>
                </li>
                
                
                
                <li class="">
                    <a href="/user/13?page=5">5</a>
                </li>
                
                
                
                <li>
                    <a href='#'>...</a>
                </li>
                
                
                
                <li class="">
                    <a href="/user/13?page=16">16</a>
                </li>
                
                
                
                <li class="">
                    <a href="/user/13?page=17">17</a>
                </li>
                
                
                
                <li class="">
                    <a aria-label="Next" href="/user/13?page=2">
                        <span aria-hidden="true">下一页</span>
                    </a>
                </li>
                
            </ul>
        </nav>


                        
                    </div>
                </div>
            </div>
        </div>

                </div>
                <div class="col-md-3 layout-side">
                    
            


        <a class="side-sda apply-git" href="http://git.shiyanlou.com/shilei" target="_blank">
            <img src="/static/img/my-git.png">
            <span>代码库</span>
        </a>








                    
                    <div class="sidebox user-visitors">
                        <div class="sidebox-header">
                            <h4 class="sidebox-title">最近来访</h4>
                        </div>
                        <div class="sidebox-body">
                            
                            <div class="col-dm-12">
                                <a class="row" href="/user/345538">
                                    <div class="col-xs-2">
                                        <img src="https://dn-simplecloud.shiyanlou.com/gravatar345538.png?v=1483141057082&amp;imageView2/1/w/200/h/200">
                                    </div>
                                    <div class="col-xs-10">
                                        <div>PKU_Hao</div>
                                        <div>12分钟前</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-dm-12">
                                <a class="row" href="/user/237882">
                                    <div class="col-xs-2">
                                        <img src="https://dn-simplecloud.shiyanlou.com/gravatarDQJPW4T4RJZF.jpg">
                                    </div>
                                    <div class="col-xs-10">
                                        <div>vanxv</div>
                                        <div>2小时前</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-dm-12">
                                <a class="row" href="/user/262386">
                                    <div class="col-xs-2">
                                        <img src="https://dn-simplecloud.shiyanlou.com/gravatarKAYZQC5G6TJY.jpg">
                                    </div>
                                    <div class="col-xs-10">
                                        <div>LIKIKI</div>
                                        <div>5小时前</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-dm-12">
                                <a class="row" href="/user/126970">
                                    <div class="col-xs-2">
                                        <img src="https://dn-simplecloud.shiyanlou.com/gravatarRKEXQSX3FDLK.jpg">
                                    </div>
                                    <div class="col-xs-10">
                                        <div>星_尘</div>
                                        <div>6小时前</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-dm-12">
                                <a class="row" href="/user/309116">
                                    <div class="col-xs-2">
                                        <img src="https://dn-simplecloud.shiyanlou.com/gravatarM8EVLA6XFKRH.jpg">
                                    </div>
                                    <div class="col-xs-10">
                                        <div>大风车</div>
                                        <div>10小时前</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="col-dm-12">
                                <a class="row" href="/user/140480">
                                    <div class="col-xs-2">
                                        <img src="https://dn-simplecloud.shiyanlou.com/gravatar9UBRP2BQR68H.jpg">
                                    </div>
                                    <div class="col-xs-10">
                                        <div>lushengwen</div>
                                        <div>1天前</div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="message-modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">发送消息给 石头山</h4>
                    </div>
                    <div class="modal-body">
                        <textarea style="width:100%; min-height:100px; max-width:100%;"></textarea>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-default" data-dismiss="modal">取消</button>
                        <button class="btn btn-primary send-btn">发送</button>
                    </div>
                </div>
            </div>
        </div>
        <lab_footer  />

    </div>
</template>
 
<script>
import lab_head from './common/lab_head';
import lab_header from './common/lab_header';
import lab_footer from './common/lab_footer';
import user_info from './common/user_info';
import last_paths from './common/last_paths';
import QR_code from './common/QR_code';
import { user_info_get } from './axios_api/api';
export default {
    data(){
        return{
            username:"",
            date_joined:"",
            email:"",
            phone:"",
            photo:"1.jpg",
            occupation:"",
            school:"",
            vip:3,
            vip_time:"",
            experience:"0",
            user_data:{},
            img:'',
        }
    },
    beforeMount(){
        this.get_user_info()
        this.img = 'http://q9j3oo8by.bkt.clouddn.com/'+localStorage.getItem('img')
    },
    methods:{
        // 获取用户信息
        get_user_info(){
            var params = {token:localStorage.getItem('token')}
            user_info_get(params).then(resp=>{
                if(resp.code==200){
                    this.user_data = resp.data;
                    this.username = resp.data.username;
                    this.date_joined = resp.data.date_joined;
                    this.email = resp.data.email;
                    this.phone = resp.data.phone;
                    this.photo = resp.data.photo;
                    this.occupation = resp.data.occupation;
                    this.school = resp.data.school;
                    this.vip = resp.data.vid;
                    this.vip_time = resp.data.vip_time;
                    this.experience = resp.data.experience;
                }else{
                    console.log(resp)
                    this.$Message(resp.message)
                    this.$router.push('/')
                }
            })
        }

    },
    filters:{

    },
    components:{
        lab_head,
        lab_header,
        lab_footer,
        user_info,
        last_paths,
        QR_code,
    },
}
</script>

<style>

</style>
