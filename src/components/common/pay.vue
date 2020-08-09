<template>
  <div>
    <!-- 注册会员 -->
    <div class="border">
      <div class="title">加入会员</div>
      <hr />
      <div class="margin_left">
        <div class="title1">会员级别</div>
        <div class="button">
          <Radio v-model="vip_grade" :datas="param4" keyName="code" titleName="name" @input="chang_vip_grade"></Radio>

          <div class="title1">会员时长</div>

          <div v-width="100">
            <Select v-model="select" :deletable="deletable" :datas="param" @input="sum_price"></Select>
          </div>
          <div class="title1">邀请码:(选填)</div>
          <div>
            <input type="text" v-model="pay_code" placeholder="请输入邀请码">
          </div>
          <div class="title1">支付方式</div>
          <Radio v-model="vip_pay" :datas="param_pay" keyName="code" titleName="name" class="vip_pay"></Radio>
        </div>
      </div>
      <hr />
      <div class="margin_left">
        <div>
          <div style="line-height:60px;text-align:right;">
            <span class="pay">付款：</span>
            <span class="font">￥{{ pay_price }}</span>
          </div>
          <div>
            <Button color="red" style="float:right;width:150px;height:40px;" @click="pay_vip" :disabled="disabled">确认购买</Button>
          </div>
          <div class="checkaa">
            <Checkbox v-model="value" @change="check_value">同意</Checkbox>
          </div>
          <div class="aaa">
            <a href="http://127.0.0.1:8080/privacy" style="margin-top:5px;">会员服务条款</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 支付确认 -->
    <Modal v-model="consent" :middle="true" :hasCloseIcon="true">
      <div style="width:300px;">
        <span style="font-size:28px;padding-left:105px;">支付确认</span>
        <br /><br />
        <Button color="green" style="font-size:18px;margin-left:50px;" @click="succeed">支付成功</Button>
        <Button color="red" style="font-size:18px;margin-left:10px;" @click="cancel">取消支付</Button>
      </div>
    </Modal>

  </div>
</template>

<script>
import { get_order_mysql_post, get_alipay_get, get_succeed_get } from "../axios_api/api"
export default {
  props: {
    exp_vip_price: Number,
    com_vip_price: Number,
    order: String,
    grade: String,
    price: Number,
  },
  data() {
    return {
      // 参数
      // 单选框变量
      vip_grade: this.grade,
      // 默认开通一个月
      select: "1个月",
      // 是否可删除
      deletable: false,
      // 支付方式
      vip_pay: "支付宝",
      // 邀请码
      pay_code: "",
      // 是否同意会员协议，默认不同意
      value: false,
      // 不同意会员协议，无法下单
      consent: false,
      // 显示关闭样式
      disabled: true,
      // 取整
      pay_price: Math.round(this.price / 100 / 12 * 1),
      param_pay: [{ name: '支付宝', code: "支付宝" }, { name: '微信', code: "微信" }],
      param4: [{ name: '普通会员', code: "普通会员" }, { name: '高级会员', code: "高级会员" }],
      param: ['1个月', '3个月', '6个月', '12个月']
    }
  },
  mounted() {

  },
  filters: {
    // 价格过滤器
    price_filter(value) {
      value = value / 100
      return value
    },
  },
  methods: {
    // 单选框事件
    chang_vip_grade() {
      if (this.vip_grade === "普通会员") {
        // 将分变成元
        this.pay_price = this.com_vip_price / 100
        // 调用随着选择开通的月份不同，所支付的价格不同
        this.sum_price();
      } else if (this.vip_grade === "高级会员") {
        // 将分变成元
        this.pay_price = this.exp_vip_price / 100
        // 调用随着选择开通的月份不同，所支付的价格不同
        this.sum_price();
      }
    },
    // 普通会员价格
    sum_price() {
      if (this.vip_grade === "普通会员") {
        if (this.select === "1个月") {
          // 如果开通一个月普通会员	Math.round()方法是取整
          this.pay_price = Math.round(this.com_vip_price / 100 / 12 * 1, 2)
        } else if (this.select === "3个月") {

          this.pay_price = Math.round(this.com_vip_price / 100 / 12 * 3)
        } else if (this.select === "6个月") {

          this.pay_price = Math.round(this.com_vip_price / 100 / 12 * 6)
        } else if (this.select === "12个月") {
          this.pay_price = Math.round(this.com_vip_price / 100 / 12 * 12)

        }
      } else {
        // 如果开通一个月高级会员	Math.round()方法是取整
        if (this.select === "1个月") {

          this.pay_price = Math.round(this.exp_vip_price / 100 / 12 * 1)
        } else if (this.select === "3个月") {

          this.pay_price = Math.round(this.exp_vip_price / 100 / 12 * 3)
        } else if (this.select === "6个月") {

          this.pay_price = Math.round(this.exp_vip_price / 100 / 12 * 6)
        } else if (this.select === "12个月") {
          this.pay_price = Math.round(this.exp_vip_price / 100 / 12 * 12)

        }
      }
    },
    // 支付成功
    succeed() {
      let params = { order: this.order, token: localStorage.getItem("token") }
      get_succeed_get(params).then(resp => {
        if (resp.code === 200) {
          alert(resp.message)
          this.$router.go(0)
        } else {
          alert("开通失败")
          this.$router.go(0)
        }
      })
    },
    // 取消支付
    cancel() {
      alert("取消成功")
      this.$router.go(0)
    },
    // 是否已同意会员协议
    check_value() {
      if (this.value == false) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    // 发起购买请求
    pay_vip() {
      if (this.vip_pay === "支付宝") {
        this.consent = true;
        // 将订单信息传给前端
        let data = { token: localStorage.getItem("token"), order: this.order, price: this.pay_price, vip_grade: this.vip_grade }
        get_order_mysql_post(data).then(resp => {
          console.log(resp)
          if (resp.code === 200) {
            alert(resp.message)
            // 跳转后价格单位修改为元
            get_alipay_get(data).then(resp => {
              if (resp.code === 200) {
                // 跳转支付页面
                // 打开一个新的页面进行跳转
                window.open(resp.data, '_blank')
              }
            })
          } else {
            alert(resp.message)
          }
        })
      }else{
				alert("本网站暂时只支持支付宝付款")
				return false
			}

    },
  }
}
</script>

<style>
.border {
  width: 900px;
  height: 600px;
}
.title {
  height: 40px;
  font-size: 28px;
  font-weight: bold;
  width: 900px;
}
.margin_left {
  margin-left: 20px;
}
.title1 {
  margin: 15px 0 10px 0;
  font-size: 18px;
  font-weight: bold;
}
.button {
  margin: 20px 0 20px 0;
}
.pay {
  font-weight: bold;
  font-size: 15px;
}
.vip_pay {
  margin-bottom: 10px;
}
.font {
  font-size: 24px;
  color: red;
  margin-right: 20px;
}
.checkaa {
  float: right;
  margin-right: -45px;
  margin-top: 50px;
}
.aaa {
  float: right;
  margin-right: -120px;
  margin-top: 52px;
}
</style>
