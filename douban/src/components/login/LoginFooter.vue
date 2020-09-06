<template>
    <div class="login-footer">
        <div class="account-form-login">
            <button class="login-db" type="text">登录豆瓣</button>
        </div>
        <div class="account-form-select">
            <input class="ckeck" type="checkbox">
            <span class="text-left">下次自动登录</span>
            <a class="text-right">{{titleBtnLeft ? "收不到验证码" : "海外手机登录"}}</a>
        </div>
        <div class="third-party-login">
            <span class="a-footer">第三方登录:</span>
            <div class="login-logo">
                <a class="weixin" href="https://www.douban.com/accounts/connect/wechat/?from=&redir=https%3A//www.douban.com/"></a>
                <a class="weibo" href="https://www.douban.com/accounts/connect/sina_weibo/?from=&redir=https%3A//www.douban.com/&fallback="></a>
            </div>
        </div>
    </div>
</template>

<script>
    import { homeMixins } from "../../utils/mixin";
    export default {
      mixins: [homeMixins],
    }
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
    .login-footer{
        .account-form-login{
            .login-db{
                display: block;
                width: 280px;
                height: 34px;
                color: #FFF;
                font-size: 15px;
                font-weight: 400;
                text-align: center;
                line-height: 34px;
                cursor: pointer;
                border-radius: 5px;
                background-color: rgba(66,189,86,.5);
            }
        }
        .account-form-select{
            width: 280px;
            height: 40px;
            font-size: 13px;
            line-height: 40px;
            @include clearfix;
            .ckeck{
                margin-top: 12px;
                @include left;
            }
            .text-left{
                @include left;
            }
            .text-right{
                cursor: pointer;
                color: #41ac52;
                @include right;
            }
        }
        .third-party-login{
            width: 250px;
            border-top: 1px solid #ddd;
            box-sizing: border-box;
            .a-footer{
                text-align: left;
                line-height: 45px;
                padding-top: 5px;
                box-sizing: border-box;
            }
            .login-logo{
                display: inline-block;
                padding-top: 10px;
                box-sizing: border-box;
                a{
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    margin-left: 12px;
                    &.weixin{
                        background: url("../../assets/images/weixin.svg") no-repeat top left/22px 22px;
                    }
                    &.weibo{
                        background: url("../../assets/images/weibo.svg") no-repeat top left/22px 22px;
                    }
                }
            }
        }
    }
</style>
