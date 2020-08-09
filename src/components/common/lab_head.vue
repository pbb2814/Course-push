<template>
    <head>
            
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="author" content="Lei Shi">
            <meta http-equiv="Cache-Control" content="o-transform">
            <meta http-equiv="Cache-Control" content="no-siteapp">
            <meta name="csrf-token" content="1483780974##87f89328c5616669f00302a263fe9061bb852818">
            
            <meta content="课程分为基础课和项目课，内容涵盖了Linux、Python、Java、C语言、Ruby、Android、IOS开发、大数据、信息安全等IT技术领域。" name="description">
            <meta content="IT培训课程,IT实训课程,IT在线课程,all" name="keywords">

            <meta content="" name="author">

            <link rel="shortcut icon" href="favicon.ico">
            <link rel="stylesheet" href="/static/font-awesome//4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="/static/highlight.js/9.8.0/monokai-sublime.min.css">
            <link rel="stylesheet" href="/static/app/css/libs/bootstrap/3.3.7/css/bootstrap.min.css">
            <link rel="stylesheet" href="/static/app/css/libs/katex/0.6.0/katex.min.css">
            <link rel="stylesheet" href="/static/app/css/libs/videojs/5.11.7/video-js.min.css">
            <link rel="stylesheet" href="/static/app/css/dest/styles.css?=2016121272249">
        </head>
</template>

<script>
export default {
    props:{
        // 利用组件传参更新标题
        title:{
            type:String,
        }
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
</style>
