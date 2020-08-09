<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 clearfix footer-col">
                    <img src="">
                    <div class="footer-slogan">编程</div>
                    <div class="col-xs-2">
                        <div class="social-item footer-weixin-item">
                            <i class="fa fa-weixin"></i>
                            <div class="footer-weixin">
                                <img src="/static/img/footer-weixin.png">
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-2">
                        <div class="social-item footer-qq-item">
                            <i class="fa fa-qq"></i>
                        </div>
                    </div>
                    <div class="col-xs-2">
                        <div class="social-item footer-weibo-item">
                            <a href="http://weibo.com/shiyanlou2013" target="_blank">
                                <i class="fa fa-weibo"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                    <div class="col-title">公司</div>
                    <a href="privacy/index.html" target="_blank">关于我们</a><br>
                    <a href="privacy/index.html" target="_blank">联系我们</a><br>
                    <a href="" target="_blank">加入我们</a><br>
                    <a href="" target="_blank">技术博客</a><br>
                </div>
                <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                    <div class="col-title">合作</div>
                    <a href="privacy/index.html" target="_blank">我要投稿</a><br>
                    <a href="labs/index.html" target="_blank">教师合作</a><br>
                    <a href="edu/index.html" target="_blank">高校合作</a><br>
                    <a href="privacy/index.html" target="_blank">友情链接</a>
                </div>
                <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                    <div class="col-title">服务</div>
                    <a href="bootcamp/index.html" target="_blank">实战训练营</a><br>
                    <a href="vip/index.html" target="_blank">会员服务</a><br>
                    <a href="courses/reports.html" target="_blank">实验报告</a><br>
                    <a href="questions/index.html?tag=%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98" target="_blank">常见问题</a><br>
                    <a href="privacy/index.html" target="_blank">隐私条款</a>
                </div>
                <div class="col-xs-6 col-sm-3 col-md-2 footer-col">
                    <div class="col-title">学习路径</div>
                    <a href="paths/index.html" target="_blank">Python学习路径</a><br>
                    <a href="paths/index.html" target="_blank">Linux学习路径</a><br>
                    <a href="paths/index.html" target="_blank">大数据学习路径</a><br>
                    <a href="paths/index.html" target="_blank">Java学习路径</a><br>
                    <a href="paths/index.html" target="_blank">PHP学习路径</a><br>
                    <a href="paths/index.html" target="_blank">全部</a>
                </div>
            </div>
        </div>
        <div class="text-center copyright">
            <span>课程</span>
            <span class="ver-line"> | </span>
            <a href="http://www.miibeian.gov.cn/" target="_blank"></a>
            
        </div>
    </div>
</template>

<script>
export default {

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
