<<<<<<< HEAD
<template>
    <div>
        <lab_head  />
        <lab_header  />

        <div class="container layout layout-margin-top">

            <ol class="breadcrumb">
                <li><a href="/courses/">全部课程</a></li>

                <li>

                    <a href="/courses/?tag=Linux">Linux</a>

                </li>

                <li class="active">
                    <a href="/courses/1">
                        {{ course_list.name }}
                    </a>
                </li>
            </ol>

            <div class="row">
                <div class="col-md-9 layout-body">



                    <div class="side-image side-image-mobile">
                        <img src="https://dn-simplecloud.shiyanlou.com/ncn1.jpg?imageView2/0/h/300">
                    </div>
                    <div class="content course-infobox">
                        <div class="clearfix course-infobox-header">
                            <h4 class="pull-left course-infobox-title">

                                <span>{{ course_list.name }}</span>

                            </h4>
                            <div class="pull-right course-infobox-follow" data-follow-url="/courses/1/follow"
                                data-unfollow-url="/courses/1/unfollow">
                                <span class="course-infobox-followers">{{course_list.collect_num}}</span>
                                <span>人关注</span>

                                <i class="fa fa-star-o" data-next="/login?next=%2Fcourses%2F1"></i>

                            </div>
                        </div>
                        <div class="clearfix course-infobox-body">
                            <!-- <div class="course-infobox-content">
                                <p>
                                    {{ item.desc }}
                                </p>

                            </div> -->

                            <div class="course-infobox-progress">
                                <div v-for="(item,index) in section_list" :class="[index < learn_list? 'course-progress-finished':'course-progress-new']"></div>
                                <!-- <div v-for="(item,index) in section_list" :class="[index < 2? 'course-progress-finished':'course-progress-new']"></div> -->
                                <span>（{{ learn_list | learn_filter }}/{{ section_list.length }}）</span>
                                <!-- <span>（{{ 2 | learn_filter }}/{{ section_list.length }}）</span> -->
                            </div>
                            






                            <div class="pull-right course-infobox-price">

                            </div>

                        </div>

                        <div class="clearfix course-infobox-footer">

                            <div class="pull-right course-infobox-learned">{{ course_list.collect_num }} 人学过</div>
                        </div>

                    </div>
                    <div class="content">
                        <ul class="nav nav-tabs" role="tablist">

                            <li role="presentation" class="active">
                                <a href="#labs" aria-controls="labs" role="tab" data-toggle="tab">实验列表</a>
                            </li>

                            <li role="presentation">
                                <a href="#comments" class="stat-event" aria-controls="comments" role="tab"
                                    data-stat="course_comment" data-toggle="tab">课程评论(1194)</a>
                            </li>
                            <li role="presentation">
                                <a href="#reports" class="stat-event" data-stat="course_report" aria-controls="reports"
                                    role="tab" data-toggle="tab">实验报告(3417)</a>
                            </li>
                            <li role="presentation">
                                <a href="#questions" class="stat-event" data-stat="course_question"
                                    aria-controls="questions" role="tab" data-toggle="tab">实验问答(1108)</a>
                            </li>
                        </ul>
                        <div class="tab-content">

                            <div role="tabpanel" class="tab-pane active" id="labs">



                                <div class="lab-item ">
                                    <h4 class="lab-item-title">{{ course_list.name }}</h4>
                                </div>

                                <div class="lab-item change_curse" v-for="(item,index) in section_list">
                                    <!-- <button type="button" class="btn btn-default btn-lg btn-block"> -->
                                        <div class="lab-item-status">

                                            <img src="/static/img/lab-not-ok.png">

                                        </div>
                                        <div class="lab-item-index">第{{ index+1 }}节</div>
                                        <div class="lab-item-title" data-toggle="tooltip" data-placement="bottom"
                                            title="基本概念及操作"><a :href="'/section_show/?id=' + item.id" target="_blank" rel="noopener noreferrer">{{ item.section_name }}</a></div>
                                        <div class="pull-right lab-item-ctrl">
                                        </div>
                                        <div class="pull-right lab-item-ctrl">
                                        </div>
                                    <!-- </button> -->
                                </div>


                            </div>
                            <div role="tabpanel" class="tab-pane course-comment" id="comments">
                                <div class="comment-box">
                                    <div class="comment-form">

                                        <div class="comment-form-unlogin">
                                            请
                                            <a href="#sign-modal" data-toggle="modal" data-sign="signin"
                                                data-next="/courses/1"> 登录 </a>
                                            后发表评论
                                        </div>

                                    </div>
                                    <div class="comment-title">最新评论</div>
                                    <div class="comment-list">
                                    </div>
                                    <div class="pagination-container"></div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="reports">
                                <span class="lab-id active" data-lab-id="None">全部</span>

                                <span class="lab-id" data-lab-id="1">第1节</span>

                                <span class="lab-id" data-lab-id="2">第2节</span>

                                <span class="lab-id" data-lab-id="3">第3节</span>

                                <span class="lab-id" data-lab-id="59">第4节</span>

                                <span class="lab-id" data-lab-id="60">第5节</span>

                                <span class="lab-id" data-lab-id="61">第6节</span>

                                <span class="lab-id" data-lab-id="62">第7节</span>

                                <span class="lab-id" data-lab-id="1917">第8节</span>

                                <span class="lab-id" data-lab-id="1918">第9节</span>

                                <span class="lab-id" data-lab-id="63">第10节</span>

                                <span class="lab-id" data-lab-id="337">第11节</span>

                                <span class="lab-id" data-lab-id="346">第12节</span>

                                <span class="lab-id" data-lab-id="354">第13节</span>

                                <span class="lab-id" data-lab-id="356">第14节</span>

                                <span class="lab-id" data-lab-id="1943">第15节</span>

                                <span class="lab-id" data-lab-id="1944">第16节</span>

                                <span class="lab-id" data-lab-id="1945">第17节</span>

                                <div class="report-owner">
                                    <span class="owner-list" data-user-id="">我的报告</span> / <span class="owner-list active"
                                        data-user-id="None">所有报告</span>
                                </div>
                                <div class="row report-items"></div>
                                <div class="pagination-container"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="questions">
                                <a class="btn btn-success" data-toggle="modal" data-target="#askquestion">我要提问</a>
                                <hr>
                                <ul class="row question-items"></ul>
                                <div class="pagination-container"></div>
                            </div>
                        </div>
                    </div>


                </div>
                <lab_sidebar :course_list='course_list' v-if='course_list'></lab_sidebar>

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
import lab_sidebar from './common/lab_sidebar';
import { course_show_get,auth_info_get,user_lean_get } from './axios_api/api';
export default {
    data(){
        return{
            course_list: [],
            section_list: [],
            learn_list: []
        }
    },
    beforeMount(){
    },
    created(){
    },
    mounted(){
        this.get_course_info()
        this.get_lean_msg()
    },
    methods:{
        // 获取课程信息
        get_course_info(){
            let cid = this.$route.query.cid;
            console.log(cid);
            
            // let cid = 3;
            var token = {token:localStorage.getItem('token')}
            course_show_get({cid:cid, token:token}).then(res=>{
                console.log(res)
                this.course_list = res.course_ser;
                this.section_list = res.section_ser;
            })
        },
        // 获取学习状态
        get_lean_msg(){
            let uid = localStorage.getItem('uid');
            let cid = this.course_list.id
            if(uid){
                user_lean_get({uid: uid,cid:cid}).then(res => {
                    console.log(res)
                    this.learn_list = res.learn_ser;
                })
            }
        }
        
        
    },
    filters:{
        learn_filter(num){
            if(num){
                return num
            }else{
                return 0
            }
        }

    },
    components:{
        lab_head,
        lab_header,
        lab_footer,
        user_info,
        last_paths,
        QR_code,
        lab_sidebar
    }
}
</script>

<style>

</style>
=======
<template>
    <div>
        <lab_head  />
        <lab_header  />

        <div class="container layout layout-margin-top">

            <ol class="breadcrumb">
                <li><a href="/courses/">全部课程</a></li>

                <li>

                    <a href="/courses/?tag=Linux">{{category}}</a>

                </li>

                <li class="active">
                    <a href="/courses/1">
                        {{name}}
                    </a>
                </li>
            </ol>

            <div class="row">
                <div class="col-md-9 layout-body">



                    <div class="side-image side-image-mobile">
                        <img src="https://dn-simplecloud.shiyanlou.com/ncn1.jpg?imageView2/0/h/300">
                    </div>
                    <div class="content course-infobox">
                        <div class="clearfix course-infobox-header">
                            <h4 class="pull-left course-infobox-title">

                                <span>{{name}}</span>

                            </h4>
                            <div class="pull-right course-infobox-follow" data-follow-url="/courses/1/follow"
                                data-unfollow-url="/courses/1/unfollow">
                                <span class="course-infobox-followers">{{collect_num}}</span>
                                <span>人关注</span>

                                <i class="fa fa-star-o" data-next="/login?next=%2Fcourses%2F1"></i>

                            </div>
                        </div>
                        <div class="clearfix course-infobox-body">
                            <div class="course-infobox-content">
                                <p>{{desc}}</p>

                            </div>

                            <div class="course-infobox-progress">

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <div class="course-progress-new"></div>

                                <span>（0/17）</span>
                            </div>





                            <div class="pull-right course-infobox-price">

                            </div>

                        </div>

                        <div class="clearfix course-infobox-footer">

                            <div class="pull-right course-infobox-learned">85243 人学过</div>
                        </div>

                    </div>
                    <div class="content">
                        <ul class="nav nav-tabs" role="tablist">

                            <li role="presentation" class="active">
                                <a href="#labs" aria-controls="labs" role="tab" data-toggle="tab">实验列表</a>
                            </li>

                            <li role="presentation">
                                <a href="#comments" class="stat-event" aria-controls="comments" role="tab"
                                    data-stat="course_comment" data-toggle="tab">课程评论(1194)</a>
                            </li>
                            <li role="presentation">
                                <a href="#reports" class="stat-event" data-stat="course_report" aria-controls="reports"
                                    role="tab" data-toggle="tab">实验报告(3417)</a>
                            </li>
                            <li role="presentation">
                                <a href="#questions" class="stat-event" data-stat="course_question"
                                    aria-controls="questions" role="tab" data-toggle="tab">实验问答(1108)</a>
                            </li>
                        </ul>
                        <div class="tab-content">

                            <div role="tabpanel" class="tab-pane active" id="labs">



                                <div class="lab-item ">
                                    <h4 class="lab-item-title">第1章:Linux 系统简介</h4>
                                </div>

                                <div class="lab-item change_curse">
                                    <!-- <button type="button" class="btn btn-default btn-lg btn-block"> -->
                                        <div class="lab-item-status">

                                            <img src="/static/img/lab-not-ok.png">

                                        </div>


                                        <div class="lab-item-index">第2节</div>
                                        <div class="lab-item-title" data-toggle="tooltip" data-placement="bottom"
                                            title="基本概念及操作">基本概念及操作</div>
                                        <div class="pull-right lab-item-ctrl">
                                        </div>
                                        <div class="pull-right lab-item-ctrl">
                                        </div>
                                    <!-- </button> -->
                                </div>



                            </div>
                            <div role="tabpanel" class="tab-pane course-comment" id="comments">
                                <div class="comment-box">
                                    <div class="comment-form">

                                        <div class="comment-form-unlogin">
                                            请
                                            <a href="#sign-modal" data-toggle="modal" data-sign="signin"
                                                data-next="/courses/1"> 登录 </a>
                                            后发表评论
                                        </div>

                                    </div>
                                    <div class="comment-title">最新评论</div>
                                    <div class="comment-list">
                                    </div>
                                    <div class="pagination-container"></div>
                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="reports">
                                <span class="lab-id active" data-lab-id="None">全部</span>

                                <span class="lab-id" data-lab-id="1">第1节</span>

                                <span class="lab-id" data-lab-id="2">第2节</span>

                                <span class="lab-id" data-lab-id="3">第3节</span>

                                <span class="lab-id" data-lab-id="59">第4节</span>

                                <span class="lab-id" data-lab-id="60">第5节</span>

                                <span class="lab-id" data-lab-id="61">第6节</span>

                                <span class="lab-id" data-lab-id="62">第7节</span>

                                <span class="lab-id" data-lab-id="1917">第8节</span>

                                <span class="lab-id" data-lab-id="1918">第9节</span>

                                <span class="lab-id" data-lab-id="63">第10节</span>

                                <span class="lab-id" data-lab-id="337">第11节</span>

                                <span class="lab-id" data-lab-id="346">第12节</span>

                                <span class="lab-id" data-lab-id="354">第13节</span>

                                <span class="lab-id" data-lab-id="356">第14节</span>

                                <span class="lab-id" data-lab-id="1943">第15节</span>

                                <span class="lab-id" data-lab-id="1944">第16节</span>

                                <span class="lab-id" data-lab-id="1945">第17节</span>

                                <div class="report-owner">
                                    <span class="owner-list" data-user-id="">我的报告</span> / <span class="owner-list active"
                                        data-user-id="None">所有报告</span>
                                </div>
                                <div class="row report-items"></div>
                                <div class="pagination-container"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" id="questions">
                                <a class="btn btn-success" data-toggle="modal" data-target="#askquestion">我要提问</a>
                                <hr>
                                <ul class="row question-items"></ul>
                                <div class="pagination-container"></div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="col-md-3 layout-side">

                    <div class="side-image side-image-pc">
                        <img :src="imgsrc">
                    </div>





                    <div class="sidebox mooc-teacher">
                        <div class="sidebox-header mooc-header">
                            <h4 class="sidebox-title">课程教师</h4>
                        </div>
                        <div class="sidebox-body mooc-content">
                            <a href="/user/20406" target="_blank">
                                <img src="/static/img/Linux&c.png">
                            </a>
                            <div class="mooc-info">
                                <div class="name"><strong>Edward</strong> </div>

                                <div class="courses">共发布过<strong>18</strong>门课程</div>
                            </div>
                            <div class="mooc-extra-info">
                                <div class="word long-paragraph">
                                    资深程序员，5年Linux运维、企业级开发经验及数据库实战和教学经验。
                                </div>
                            </div>
                        </div>
                        <div class="sidebox-footer mooc-footer">
                            <a href="/teacher/20406" target="_blank">查看老师的所有课程 ></a>
                        </div>
                    </div>




                    <div class="side-image">
                        <a href="/vip" target="_blank">
                            <img src="/static/img/banner-vip.png">
                        </a>
                    </div>





                    <div class="sidebox adv-course">
                        <div class="sidebox-header">
                            <h4 class="sidebox-title">进阶课程</h4>
                        </div>
                        <div class="sideobx-body course-content">

                            <a href="/courses/204">实用Linux Shell编程</a>

                            <a href="/courses/2">Vim编辑器</a>

                            <a href="/courses/68">Linux命令实例练习</a>

                        </div>
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
import {get_course_info_get} from './axios_api/api'


export default {
    data () {
    return {
        msg: "这是一个变量",
        //课程id
        id:this.$route.query.id,
        name:'',
        uid:'',
        desc:'',
        category:'',
        img:'',
        imgsrc:"",



    }
  },
    components:{
        lab_head,
        lab_header,
        lab_footer,
        user_info,
        last_paths,
        QR_code,
    },
    mounted:function(){
        console.log(this.id);
		this.get_course();
    },
    methods:{
        //获取课程数据
        get_course(){
            var data = {cid:this.id}
              get_course_info_get(data).then(resp=>{
                console.log(resp)
                this.name=resp.name
                this.uid=resp.uid
                this.img=resp.img
                this.desc=resp.desc
                this.category=resp.category
                this.price=resp.price
                this.collect_num= resp.collect_num
                this.is_online=resp.is_online
                this.imgsrc = 'http://localhost:8000/static/upload/'+resp.img;

            })
        },
           

}
        
           
}






</script>

<style>

</style>