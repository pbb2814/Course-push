<template>

        <div>

            <lab_head  />

                <reports  />

            <lab_footer  />

    
        </div>
    </template>
    
<script>
import lab_head from './common/lab_head';
import lab_header from './common/lab_header';
import lab_footer from './common/lab_footer';
import reports from './course/reports';
    export default {
        head:{
            title:'',
        },
        data(){
            return {
                msg:'你好，这里是首页',
                
            }
        },
        //定义组建标签
        components:{
            lab_head,
            lab_header,
            lab_footer,
            reports,
        },
        filters: {
     
　　    },
        //自定义方法
        methods:{

        },
        //钩子方法
        mounted:function(){

            console.log('这是初始化方法');



        },
        //监听属性
        watch:{


        },
        //计算属性
        computed:{


        }
    
    
    
        }
    
    
</script>
    
    <style>
    </style>