<template>
    <div class="account-body">
        <div class="account-tab-switch-icon" @click="QRSwitch">
            <a href="#" class="quick icon-switch" v-if="qrVisibal"></a>
            <a href="#" class="start icon-switch" v-else></a>
            <div class="account-tab-switch-text">
                <span class="text-quick" v-if="qrVisibal">扫码登录</span>
                <span class="text-start" v-else>短信登录／注册</span>
            </div>
        </div>
        <!--        登录-->
        <login-wrap v-show="qrVisibal"></login-wrap>
        <!--        登录-->
        <!--        二维码登录-->
        <div class="login-quick" v-if="!qrVisibal">
            <div class="account-tab-scan"><span>二维码登录</span></div>
            <img class="img" src="../../assets/images/doubanapp_qrcode2.png" alt="正在加载中">
            <div class="account-qr-text">
                <span>请打开豆瓣客户端扫一扫</span>
            </div>
        </div>
        <!--        二维码登录-->
    </div>
</template>

<script>
    import { homeMixins } from "../../utils/mixin";
    import LoginWrap from "./LoginWrap";
    export default {
      mixins: [homeMixins],
      components: {
        LoginWrap
      },
      methods:{
        QRSwitch() {
          this.setQrVisibal(!this.qrVisibal)
        }
      }
    }
</script>

<style scoped lang="scss">
    @import'../../assets/styles/global';
    .account-body{
        position: relative;
        width: 100%;
        height: 100%;
        padding: 30px 10px 10px 10px;
        box-sizing: border-box;
        .account-tab-switch-icon{
            position: absolute;
            top: 0;
            right: 0;
            .icon-switch{
                display: block;
                width: 30px;
                height: 30px;
                margin: 10px;
                &.quick{
                    background: url("../../assets/images/donloadow.png") no-repeat top left/ 30px 30px;
                }
                &.start{
                    background: url("../../assets/images/doubanapp2.png") no-repeat top left/ 30px 30px;
                }
            }
            &:hover .account-tab-switch-text{
                display: block;
            }
            .account-tab-switch-text{
                display: none;
                position: absolute;
                top: 4.4px;
                right: 50px;
                width: 100px;
                line-height: 2;
                text-align: center;
                font-size: 13px;
                color: #9b9b9b;
                background: white;
                border-radius: 2px;
                box-shadow: 0 0 1px #00b51d;
            }
        }
        .login-quick{
            width: 100%;
            height: 100%;
            .account-tab-scan{
                width:100%;
                line-height: 2;
                font-size: 13px;
                margin-bottom: 10px;
                font-weight: bold;
                text-align: left;
            }
            .img{
                margin: 0 auto;
                display: block;
                width: 170px;
                height: 170px;
            }
            .account-qr-text{
                width: 170px;
                line-height: 1;
                text-align: center;
                border-radius: 12px;
                padding: 3px 20px;
                margin: 0 auto;
                font-size: 13px;
                margin-top: 10px;
                background-color: rgba(0,0,0,.08);
            }
        }
    }

</style>
