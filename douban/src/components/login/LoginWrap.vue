<template>
    <div class="login-wrap">
        <div class="form-title">
            <a class="title-text" href="#" @click="TitleSwitch1" :class="{'visibal' : titleBtnLeft}">短信登录／注册</a>
            <a class="title-text" href="#" @click="TitleSwitch2" :class="{'visibal' : titleBtnRight}">密码登录</a>
        </div>
        <div class="form-text">
            <div class="protocol" v-show="titleBtnLeft">
                <span class="read">请仔细阅读 </span>
                <a class="text-color" href="https://accounts.douban.com/passport/agreement">豆瓣使用协议、隐私政策</a>
            </div>
            <span class="hint" v-if="titleBtnRight">找回密码</span>
        </div>
        <phone-number></phone-number>
        <password></password>
        <login-footer></login-footer>
    </div>
</template>

<script>
    import { homeMixins } from "../../utils/mixin";
    import PhoneNumber from "./PhoneNumber";
    import LoginFooter from "./LoginFooter";
    import Password from "./password";
    export default {
      components: {Password, LoginFooter, PhoneNumber},
      mixins: [homeMixins],
        methods: {
          TitleSwitch1() {
            this.setTitleBtnLeft(true)
            this.setTitleBtnRight(false)
          },
          TitleSwitch2() {
            this.setTitleBtnLeft(false)
            this.setTitleBtnRight(true)
          }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/global';
.login-wrap{
    width: 100%;
    height: 100%;
    .form-title{
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 10px;
        border-bottom: 1px solid rgb(236, 236, 236);
        .title-text{
            display: inline-block;
            width: 140px;
            text-align: center;
            line-height: 2;
            color: #9d9d9d;
            margin-bottom: -1px;
            &.visibal{
                color: #333;
                border-bottom: 1px solid #494949;
            }
        }
    }
    .form-text{
        width: 100%;
        line-height: 19px;
        text-align: left;
        font-size: 12px;
        margin-bottom: 10px;
        .protocol{
            .read{
                color: #9b9b9b;
            }
            .text-color{
                color: #41ac52
            }
        }
        .hint{
            display: inline-block;
            width: 100%;
            height: 100%;
            text-align: right;
            font-size: 12px;
            color: #41ac52
        }
    }
}
</style>
