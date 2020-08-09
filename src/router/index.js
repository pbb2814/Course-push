import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import paths from '@/components/paths'
import path_show from '@/components/path_show'
import bootcamp from '@/components/bootcamp'
import courses from '@/components/courses'
import course_show from '@/components/course_show'
import vip from '@/components/vip'
import questions from '@/components/questions'
import question_show from '@/components/question_show'
import privacy from '@/components/privacy'
import testcom from '@/components/testcom'
import user from '@/components/user'
import user_profile from '@/components/user_profile'
import tripalogin from '@/components/tripalogin'

Vue.use(Router)

var routes = [
  {
    path:'/user_profile',
    name:'user_profile',
    component:user_profile
  },
  {
    path:'/user',
    name:'user',
    component:user
  },
  {
    path:'/testcom',
    name:'testcom',
    component:testcom
  },
  {
    path:'/privacy',
    name:'privacy',
    component:privacy
  },
  {
    path:'/questions/question_show',
    name:'question_show',
    component:question_show
  },
  {
    path:'/questions',
    name:'questions',
    component:questions
  },
  {
    path:'/vip',
    name:'vip',
    component:vip
  },
  {
    path:'/courses/course_show',
    name:'course_show',
    component:course_show
  },
  {
    path:'/courses',
    name:'courses',
    component:courses
  },
  {
    path:'/bootcamp',
    name:'bootcamp',
    component:bootcamp
  },
  {
    path:'/paths/path_show',
    name:'path_show',
    component:path_show
  },
  {
    path:'/paths',
    name:'paths',
    component:paths
  },
  {
    path:'/',
    name:'index',
    component:index,
  },
  {
    path:'/tripalogin',
    name:'tripalogin',
    component:tripalogin,
  }
        
]

export default new Router({
  routes:routes,
  mode:'history'   /*hash*/
})
