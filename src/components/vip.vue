<template>
  <div>

    <lab_head />
    <lab_header />

    <div class="vip-header layout-no-margin-top" style="min-height:215px;">
      <h1 class="vip-header-title">加入会员</h1>
      <h4 class="vip-header-description">精品课程 + 环境保存 + 实验联网 + 会员客户端</h4>
    </div>
    <div class="vip-details">
      <div class="container">
        <div class="row vip-row hidden-xs">
          <div class="vip-item">
            <ul class="list-group">
              <li class="list-group-item">
                <h4>&nbsp;</h4>
              </li>
              <li class="list-group-item">免费课程</li>
              <li class="list-group-item">会员课程</li>
              <li class="list-group-item">
                <span style="border-bottom:1px dashed" data-toggle="tooltip" data-placement="bottom" title="会员可以保存实验环境，普通用户实验结束后环境删除">实验环境保存</span>
              </li>
              <li class="list-group-item">
                <span style="border-bottom:1px dashed" data-toggle="tooltip" data-placement="bottom" title="会员环境可以连接互联网，普通用户环境仅连接实验楼内网">实验环境联网</span>
              </li>
              <li class="list-group-item"><a href="#vip-clients" title="" class="link-clients">会员客户端</a></li>
              <li class="list-group-item">SSH直连</li>
              <li class="list-group-item">WebIDE</li>
              <li class="list-group-item">训练营优惠</li>
              <li class="list-group-item">
                <span style="border-bottom:1px dashed" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="在讨论区提问，可以收到专职助教答疑回复">会员课程答疑</span>
              </li>
              <li class="list-group-item" style="height:190px;">&nbsp;</li>
            </ul>
          </div>
          <div class="vip-item">
            <ul class="list-group">
              <li class="list-group-item">
                <h4 class="is-free-user">免费</h4>
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.exempt_cour === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.vip_cour === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.save === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.environment === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.client === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.ssh === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.webide === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.discounts === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_user_list.exempt_study === 1">&nbsp;
              </li>
              <li class="list-group-item item-vip-footer" style="">
                <strong style="color:#DBDBDB;font-size:28px;display:block;">免费</strong>
                <br>

                <a type="button" class="btn btn-all btn-smaller" href="#sign-modal" data-toggle="modal" data-sign="signup">注册</a>

              </li>
            </ul>
          </div>
          <div class="vip-item">
            <ul class="list-group">
              <li class="list-group-item">
                <h4 class="is-vip-user">会员 <img src="/static/img/icon-vip.png" alt=""></h4>
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_vip_list.exempt_cour === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_vip_list.vip_cour === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_vip_list.save === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_vip_list.environment === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_vip_list.client === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_vip_list.ssh === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="common_vip_list.webide <= 1">&nbsp;
              </li>
              <li class="list-group-item rebate-number">
                <span class="number-eight">
                  <span style="color: #FC9F0E;font-size: 23px">{{ common_vip_list.discounts }}</span> 折
                </span>
              </li>
              <li class="list-group-item"><img src="/static/img/vip-service-status.png" alt=""></li>
              <li class="list-group-item item-vip-footer" style="height:195px">
                <strong class="vip-price" style="font-size: 15px;display:block;margin-bottom: -10px">
                  <span style="font-size:40px;color:#FC9F0E">￥{{ common_vip_list.price | price_filter }}</span> / 年
                </strong>
                <del style="font-size: 12px;color: #999;">原价 599元</del>
                <br>

                <a type="button" class="btn btn-bigger btn-all" href="javascript:void(0);" data-toggle="modal" data-sign="signin" data-next="/vip" @click="join(common_vip_list.price,common_vip_list.grade)">加入</a>

                <p style=""> 实验豆可抵扣现金</p>
              </li>
            </ul>
          </div>
          <div class="vip-item">
            <ul class="list-group">
              <li class="list-group-item">
                <h4 class="is-adv-vip">高级会员 <img src="/static/img/icon-vip-advance.png" alt=""></h4>
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="expert_vip_list.exempt_cour === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="expert_vip_list.vip_cour === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="expert_vip_list.save === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="expert_vip_list.environment === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="expert_vip_list.client === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="expert_vip_list.ssh === 1">&nbsp;
              </li>
              <li class="list-group-item">
                <img src="/static/img/vip-service-status.png" v-if="expert_vip_list.webide <= 1">&nbsp;
              </li>
              <li class="list-group-item rebate-number" style="padding-bottom: 6px;">
                <span class="number-five">
                  <span style="color: #CC584C;font-size: 23px;">{{ expert_vip_list.discounts }}</span> 折
                </span>
              </li>
              <li class="list-group-item"><img src="/static/img/vip-service-status.png" alt=""></li>
              <li class="list-group-item item-vip-footer" style="">
                <strong class="vip-price" style="font-size: 15px;display:block;margin-bottom: -7px">
                  <span style="font-size:28px;color:#CC584C">￥{{ expert_vip_list.price | price_filter }}</span> / 年
                </strong>
                <del style="font-size: 12px;color: #999;">原价 1024元</del>
                <br>

                <a type="button" class="btn btn-bigger btn-all" href="javascript:void(0);" data-toggle="modal" data-sign="signin" data-next="/vip" @click="join(expert_vip_list.price,expert_vip_list.grade)">加入</a>

                <p style=""> 实验豆可抵扣现金</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="vip-hots">
      <div class="container">
        <div class="vip-hots-header">
          <h4>已有 <span>350,000</span> 人在实验楼完成了 <span>6,000,000+</span> 次实验</h4>
        </div>
        <div class="row vip-hots-body">
          <div class="col-md-4">
            <div class="media">
              <div class="media-left">
                <img class="media-object" src="/static/img/vip-allcourses.png">
              </div>
              <div class="media-body">
                <h4 class="media-heading">课程畅学</h4>
                <p>会员专属精品课程，每周不断更新，给你最快的成长</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="media">
              <div class="media-left">
                <img class="media-object" src="/static/img/vip-24.png">
              </div>
              <div class="media-body">
                <h4 class="media-heading">随时实践</h4>
                <p>独享实验机，长期保存，在线开发代码，24小时随时继续</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="media">
              <div class="media-left">
                <img class="media-object" src="/static/img/vip-internet.png">
              </div>
              <div class="media-body">
                <h4 class="media-heading">优质体验</h4>
                <p>环境联网，会员客户端+SSH直连+WebIDE，更优实验体验</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vip-clients" id="vip-clients">
      <div class="container">
        <div class="vip-clients-header">
          <h4>即开即用的会员客户端，随时随地远程访问实验桌面</h4>
        </div>
        <div class="row vip-clients-body">
          <div class="col-md-4">
            <div class="vip-clients-windows vip-clients-logo"></div>
            <div class="vip-clients-title">Windows - Windows 7 及以上</div>
            <a href="http://labfile.oss-cn-hangzhou.aliyuncs.com/shiyanlou_desktop/shiyanlou-desktop-v1.0.3-win64.exe">立即下载（64位）</a><br /><a href="http://labfile.oss-cn-hangzhou.aliyuncs.com/shiyanlou_desktop/shiyanlou-desktop-v1.0.3-win32.exe">立即下载（32位）</a>
            <div class="text-danger" style="font-size:14px;">（安装过程中如果遇到 360 的警告可以忽视）</div>
          </div>
          <div class="col-md-4">
            <div class="vip-clients-mac vip-clients-logo"></div>
            <div class="vip-clients-title">MacOS - MacOS 10.11 及以上 </div>
            <a href="http://labfile.oss-cn-hangzhou.aliyuncs.com/shiyanlou_desktop/shiyanlou-desktop-v1.0.3-macos.dmg">立即下载</a>
          </div>
          <div class="col-md-4">
            <div class="vip-clients-linux vip-clients-logo"></div>
            <div class="vip-clients-title">Linux - Ubuntu 14.04 及以上</div>
            <a href="http://labfile.oss-cn-hangzhou.aliyuncs.com/shiyanlou_desktop/shiyanlou-desktop-v1.0.3-linux64.deb">立即下载（64位）</a><br /><a href="http://labfile.oss-cn-hangzhou.aliyuncs.com/shiyanlou_desktop/shiyanlou-desktop-v1.0.3-linux32.deb">立即下载（32位）</a>
          </div>
          <div class="video">
            <video controls="controls">
              <source src="http://labfile.oss-cn-hangzhou.aliyuncs.com/shiyanlou_desktop/desktop.ogg" type="video/ogg">
              <source src="http://labfile.oss-cn-hangzhou.aliyuncs.com/shiyanlou_desktop/desktop.mp4" type="video/mp4">
              你的浏览器不支持播放视频
            </video>
            <div class="video-play">
              <i class="fa fa-play-circle-o fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vip-faq">
      <div class="container">
        <div class="vip-faq-header">
          <img src="/static/img/vip-faq.png">
          FAQ
          <span></span>
        </div>
        <div class="vip-faq-body">
          <h4>会员课程和免费课程有什么区别？</h4>
          <div>1. 会员课程多为项目课，免费课程多为基础课。</div>
          <div>2. 会员课程主要由实验楼团队制作及维护，免费课程由实验楼及合作伙伴共同维护。</div>
          <div>3. 会员可联网并保存环境，会员课程内容不受网络及时间限制。</div>
          <div>4. 会员课程更新频率更高，难度会更大。</div>
        </div>
        <div class="vip-faq-body">
          <h4>会员客户端是什么？</h4>
          <div>实验楼会员专属的桌面端软件，即开即用，自动连接云端实验桌面，特点:</div>
          <div>1. 易用：即开即用，随时远程访问实验桌面</div>
          <div>2. 安全：数据云端保存，HTTPS加密传输</div>
          <div>3. 跨平台：支持Windows，Mac OSX 及 Linux平台</div>
          <div>4. 更多功能：实验工具中提供查看文档及一键SSH连接实验环境等</div>
        </div>
        <div class="vip-faq-body">
          <h4>什么情况下需要保存实验环境？</h4>
          <div>1. 当时间不多或实验耗时较长，无法连续完成一个实验时。</div>
          <div>2. 当实验遇到问题但无法及时解决时。</div>
          <div>3. 当需要一台在线开发环境时。</div>
        </div>
        <div class="vip-faq-body">
          <h4>环境联网有什么好处？</h4>
          <div>1. 实验中随时连接站外资源，例如Github等。</div>
          <div>2. 支持大量联网课程，例如微信微博开发及SaaS开发。</div>
        </div>
        <div class="vip-faq-body">
          <h4>成功购买会员服务后，是否可以退款？</h4>
          <div>支付购买成功后，暂不接受退款申请，请详细查看会员服务内容后进行购买，如有任何不清楚的地方欢迎在 <a href="/questions/">讨论区</a> 发帖询问。</div>
        </div>
        <div class="vip-faq-body">
          <h4>高级会员与普通会员有什么不同？</h4>
          <div>1. 实验楼提供专职助教，在讨论区为高级会员提供答疑服务，回答学习会员课程过程中遇到的问题。</div>
          <div>2. 购买训练营享受5折优惠。</div>
        </div>
        <div class="vip-faq-footer">
          <a href="/questions/1440">更多疑问，查看这里></a>
        </div>
      </div>
    </div>

    <Modal v-model="pay_vip" :middle="true" :hasCloseIcon="true">
      <pay :com_vip_price="com_vip_price" :price="price" :exp_vip_price="exp_vip_price" :grade="grade" :order="order" />
    </Modal>

    <lab_footer />

  </div>
</template>

<script>
// 导入组件
import lab_head from './common/lab_head';
import lab_header from './common/lab_header';
import lab_footer from './common/lab_footer';
import user_info from './common/user_info';
import last_paths from './common/last_paths';
import QR_code from './common/QR_code';
import pay from './common/pay';
// import pay from '';
// 导入axios封装请求
import { get_vip_list_get, get_vip_order_get } from './axios_api/api'
export default {
  data() {
    return {
      // 普通用户权限列表
      common_user_list: [],
      // 普通会员权限列表
      common_vip_list: [],
      // 高级会员权限列表
      expert_vip_list: [],
      pay_vip: false,
			// 会员价格
			price: "",
			com_vip_price: "",
			exp_vip_price: "",
      // 订单号
			order: "",
			grade: "",
    }
  },
  components: {
    lab_head,
    lab_header,
    lab_footer,
    user_info,
    last_paths,
    QR_code,
    pay,
  },
  mounted() {
    this.get_vip_list();
  },
  filters: {
    price_filter(value) {
      value = value / 100
      return value
    },
  },
  methods: {
    // 显示支付model
    join: function (price,grade) {
			let params = {token:localStorage.getItem("token")}
			// 发送请求到后端
      get_vip_order_get(params).then(resp => {
        if (resp.code === 200) {
					this.price = price
					this.grade = grade
          this.pay_vip = true;
          this.order = resp.order
        } else {
          alert(resp.message)
          window.location.href = "/"
        }
      })
    },

    // 获取会员列表
    get_vip_list() {
      get_vip_list_get().then(resp => {
        if (resp.code === 200) {
          // 赋值普通用户
          this.common_user_list = resp.vip_list[0]
          // 赋值普通会员
					this.common_vip_list = resp.vip_list[1]
					this.com_vip_price = this.common_vip_list.price
          // 赋值高级会员
					this.expert_vip_list = resp.vip_list[2]
					this.exp_vip_price = this.expert_vip_list.price
        }
      })
    },
  }
}
</script>

<style>
</style>
