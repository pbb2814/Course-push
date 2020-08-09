<template>
        <div>


                {{ msg }}
                123123123123123131
                <Button color="red"></Button>
    
        </div>
    </template>
    
    <script>
    
        export default {
    
            data(){
                return {
                    msg:'这里是测试页面',
                    
                }
            },
            //定义组建标签
            components:{
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