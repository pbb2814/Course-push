<template>
    <div class="col-md-3 layout-side">
        <div class="side-image side-image-pc">
            <img :src="'http://120.26.175.79:8000/static/upload/' + course_list.img">
            
            <p>{{ course_list.category }}</p>
        </div>
        <div class="sidebox mooc-teacher">
            <Button @click='insert_course' v-if="learn_msg">已加入课程</Button>
            <Button @click='insert_course' v-else>加入课程</Button>
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
                    <div class="name"><strong>{{ auth_info.username }}</strong> </div>

                    <div class="courses">共发布过<strong>{{ course_count | count_filter  }}</strong>门课程</div>
                </div>
                <div class="mooc-extra-info">
                    <div class="word long-paragraph">
                        {{ course_list.desc }}
                    </div>
                </div>
            </div>
            <div class="sidebox-footer mooc-footer">
                <a :href="'/auth_show/?id=' + auth_info.id" target="_blank">查看所有课程 ></a>
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
</template>

<script>
import { auth_info_get,course_count_get,insert_learn_get,user_lean_get } from '../axios_api/api.js'
export default {
    props:['course_list'],
    data(){
        return {
            auth_info: '',
            course_count: '',
            learn_msg: ''
        }
    },
   // 页面创建钩子函数中添加事件监听
   created() {

   },
   mounted() {

   },
   watch: {
      course_list: {
        handler () {
          // 监听获取ajax数据
          this.get_auth_info()
          this.get_course_count()
        },
        // 监听到数据变化时立即调用
        immediate: true
     }
   },
   methods: {
    //    获取作者信息
        get_auth_info(){
            let uid = this.course_list.uid;
            let token = {token:localStorage.getItem('token')};
            auth_info_get({id: uid, token: token}).then(res => {
                console.log(res)
                this.auth_info = res;
            })

        },
        // 获取作者作品数量
        get_course_count(){
            
            // var cid = this.$route.query.cid;
            let uid = this.course_list.uid
            var token = {token:localStorage.getItem('token')}
            course_count_get({id:uid, token:token}).then(res=>{
                console.log(res)
                this.course_count = course_count;
            })
        },
        // 获取学习状态
        get_lean_msg(){
            let uid = localStorage.getItem('uid');
            let cid = this.course_list.id
            if(uid){
                user_lean_get({uid: uid,cid:cid}).then(res => {
                    console.log(res)
                    this.learn_msg = res.learn_ser;
                })
            }
        },
        // 将本课程添加到自己的
        insert_course(){
            let cid = this.course_list.id;
            // let uid = localStorage.getItem('uid');
            let uid = 9;
            if((this.course_list.category=='免费' || this.course_list.category=='限免') && uid){
                // 免费课程可直接加入,
                insert_learn_get({cid:cid,uid:uid}).then(res => {
                    this.$Message(res.message);
                })
            }else if(uid){
                // 收费课程跳转到支付页面
                this.$router.push('/');
            }else{
                // 跳转到登录页面
                this.$router.push('/login')
            }
        }

   },
   filters:{
        count_filter(count) {
            if(count){
                return count
            }else{
                return 1
            }
        }
   }
}

</script>
<style>
    .lab_sidebar {
        float: right;
    }
</style>