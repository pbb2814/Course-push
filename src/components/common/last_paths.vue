<template>
    <div>
        <div class="sidebox">
        
            <div class="sidebox-header">
                <h4 class="sidebox-title">最热路径</h4>
            </div>
            <div class="sidebox-body course-content side-list-body">
                <a href="/paths/python"><img style="width:25px;height:25px" src="/static/img//1471513769430.png"> Python 研发工程师</a>
                <a href="/paths/bigdata"><img style="width:25px;height:25px" src="/static/img//1471513926288.png"> 大数据工程师</a>
                <a href="/paths/cpp"><img style="width:25px;height:25px" src="/static/img//1471513793360.png"> C++ 研发工程师</a>
                <a href="/paths/security"><img style="width:25px;height:25px" src="/static/img//1471513867033.png"> 信息安全工程师</a>
                <a href="/paths/linuxsys"><img style="width:25px;height:25px" src="/static/img//1471514004752.png"> Linux 运维工程师</a>
            </div>
        
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
</style>
