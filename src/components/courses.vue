<template>
    <div>

        <lab_head  />
        <lab_header  />
        <div class="container layout layout-margin-top">
            
            
            <div class="row">
                <div class="col-md-9 layout-body">
                    
            <div class="content">
                <div class="row course-cates">
                    <div class="col-md-1 course-cates-title">类别：</div>
                    <!-- <div class="col-md-11 course-cates-content">
                        <a class="active" href="/courses/?course_type=all&amp;tag=all" @click="get_courses()">全部</a>
                        <a class="" href="/courses/?course_type=all&amp;tag=all&amp;fee=free" @click="get_category_courses(1)">免费</a>
                        <a class="" href="/courses/?course_type=all&amp;tag=all&amp;fee=limited" @click="get_category_courses(2)">限免</a>
                        <div class="course-cates-vip ">
                            <a target="_blank" href="/courses/?course_type=all&amp;tag=all&amp;fee=member"><img src="/static/img/vip-icon.png"></a>
                            <a class=""  @click="get_category_courses(3)">会员</a>
                        </div>
                    </div> -->

                         <div class="col-md-11 course-cates-content">
            
                        <a class="" href="javascript:;"  @click="add_type('free','all')">全部</a>
                        <a class="" href="javascript:;"  @click="add_type('free','免费')" >免费</a>
                        <a class="" href="javascript:;" @click="add_type('free','限免')">限免</a>
                        <div class="course-cates-vip ">
                            <a target="_blank"><img src="/static/img/vip-icon.png"></a>
                            <a class="" href="javascript:;" @click="add_type('free','会员')">会员</a>
                        </div>
                    </div>
                </div>
                <div class="row course-cates">
                    <div class="col-md-1 course-cates-title">标签：</div>
                    <div class="col-md-11 course-cates-content" v-for="(item,index) in tagslist" :key="index">
                        <a class="active" href="/courses/?course_type=all&amp;fee=all" @click="get_tag(item.name)">{{item.name}}</a>
                    </div>
                </div>
            </div>
            <div class="content position-relative">


<!-- 
                <ul class="nav nav-tabs" role="tablist">
                    <li class="active"><a href="/courses/?course_type=all&amp;tag=all&amp;fee=all" @click="get_kind_courses()">已上线</a></li>
                    <li class=""><a href="/courses/?status=preview" class="stat-event" data-stat="preview_course" @click="get_is_online('即将上线')">即将上线</a></li>
                    <li class="active"><a href="javascript:void(0);" @click="set_isonline(0)">全部</a></li>
                    <li class=""><a href="#"  @click="set_isonline(1)">已上线</a></li>
                    <li class=""><a href="javascript:void(0);" class="" data-stat="" @click="set_isonline(2)">即将上线</a></li>
                </ul>  -->
                
                <ul class="nav nav-tabs" role="tablist">
                    <li class="active"><a href="javascript:void(0);" @click="add_type('online','all')">全部</a></li>
                    <li class=""><a href="javascript:void(0);" @click="add_type('online','1')">已上线</a></li>
                    <li class=""><a href="javascript:void(0);" class="stat-event" data-stat="preview_course" @click="add_type('online','0')">即将上线</a></li>
                    
                </ul>
                <div class="clearfix"></div>
                <div class="courses-sort">
                    <a  href="javascript:void(0);" @click="add_type('sort','1')">最新</a>
                    /
                    <a  href="javascript:void(0);" @click="add_type('sort','2')">最热</a>

                </div>
                <div class="search-result"></div>
                <div class="row">

        <div class="col-md-4 col-sm-6  course" v-for="(item,index) in courselist" :key="index">

            <router-link :to="{path:'/courses/course_show/',query:{id:item.id}}">
            <div class="course-box">
                <div class="sign-box" >
                    <i class="fa fa-star-o course-follow pull-right"
                        data-follow-url="/courses/63/follow"
                        data-unfollow-url="/courses/63/unfollow"  style="display:none"  ></i>
                </div> 
                <div>

        
                    <div class="course-img">
                    
                    <img :src="'http://127.0.0.1:8000/static/upload/'+item.img" class="cover-image">
                    
                    </div>
                    <div class="course-body">
                        <span class="course-title" data-toggle="tooltip" data-placement="bottom">{{item.name}}</span>
                    </div>
                    <div class="course-footer">
                        <span class="course-per-num pull-left">
                            <i class="fa fa-users"></i>{{item.collect_num}}</span>
                        <span class="course-type course-type-tag course-list-tag limit_free" data-v-ab8793cc="">
                {{item.category }}
              </span>
                    </div>
                    </div>

            </div>
            </router-link>
        </div>

 

 
            </div>
               </div>
          <table style="clear:both"></table>
                 <nav class="pagination-container">
             <!-- heyui分页 -->
            <div style="margin-left:650px">
                <Pagination @change="change" v-model="pagination" layout="pager,jumper" small></Pagination>
            </div>
        </nav>

                </div>
                <div class="col-md-3 layout-side">

                    <user_info  />
                    <last_paths  />
                    <QR_code  />

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
import {getcourses1_get,gettags_get} from './axios_api/api'
export default {
    data(){
        return{
            // 分页器变量
	        pagination:{
            page:1,
            size:6,
            total:'',
            },
            courselist:'',
            tagslist:'',
            tag:'',
            is_online:'',
            activetype:{
                free:'',
                online:'',
                sort:'',
            },

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

        localStorage['activetype']=JSON.stringify({'free':'all','online':'all','sort':'1'})
        this.get_courses()
    },

    methods:{
        add_type(type,value){
            this.activetype[type] = value
            localStorage['activetype']=JSON.stringify(this.activetype)
            this.get_courses();
        },

        get_tag(tag){
            this.tag = tag
            this.get_courses()
        },
  
        // 分页器
        change(){
            var params = {page:this.pagination.page,size:this.pagination.size}
            getcourses1_get(params).then(resp=>{
                this.courselist = resp.data
            })
        },
        
        //   获取所有课程
        get_courses(){
            var get_activetype = localStorage.getItem('activetype')
            console.log(get_activetype)
            var parms =JSON.parse(get_activetype)
            console.log(parms)
            var data = {page:this.pagination.page,size:this.pagination.size,tag:this.tag,free:parms['free'],online:parms['online'],sort:parms['sort']}
              getcourses1_get(data).then(resp=>{
                console.log(resp.data)
                this.courselist = resp.data
                this.pagination.total = resp.total
            })
        },
           
        // 获取标签
        get_tags(){
            gettags_get().then(resp=>{
                this.tagslist = resp.data
            })
        },
    }
}
</script>

<style>

</style>