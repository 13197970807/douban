<template>
    <div class="anony-reg-new">
        <div class="container">
            <!--            登录组件占位-->
            <div class="text">
                <LoginMain></LoginMain>
            </div>
            <!--            登录组件占位-->
            <div class="app">
                <p class="app-title">
                    <span>豆瓣</span>
                    <span class="number">6.0</span>
                </p>
                <p class="app-slogan">
                    <a href="https://www.douban.com/doubanapp/app?channel=nimingye" class="download">下载豆瓣 App</a>
                    <span class="app-qr">
                        <i class="er-image"></i>
                        <div class="app-qr-expand">
                            <img class="img" src="../assets/images/doubanapp_qrcode.png" alt="二维码">
                            <div>iOS / Android 扫码直接下载</div>
                        </div>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginMain from "./login/LoginMain";
  export default {
    components:{
      LoginMain
    }
  }
</script>

<style scoped lang="scss">
@import '../assets/styles/global';
    .anony-reg-new{
        width: 100%;
        height: 304px;
        margin-bottom: 25px;
        background: #edf4ed url("../assets/images/banner.jpg") no-repeat 120px top/auto 100%;
        .container{
            position: relative;
            width: 950px;
            height: 304px;
            margin: 0 auto;
            @include clearfix;
            .text{
                position: absolute;
                top: 0;
                right: 0;
                width: 300px;
                height: 300px;
            }
            .app{
                width: 150px;
                height: 120px;
                @include left;
                margin: 94px 0 92px 475px;
                .app-title{
                    height: 24px;
                    margin: 7px 0;
                    font-size: 25px;
                    line-height: 24px;
                    .number{
                        margin-left: 10px;
                    }
                }
                .app-slogan{
                    width: 150px;
                    height: 0;
                    padding-top: 18px;
                    .download{
                        font-size: 12px;
                        line-height: 1;
                        padding: 9px 21px;
                        font-weight: bold;
                        color: #FFF;
                        cursor: pointer;
                        background: #00B51D;
                        border-radius: 2px;
                    }
                    .app-qr{
                        position: relative;
                        display: block;
                        width: 30px;
                        height: 30px;
                        @include right;
                        border: 1px solid #00B51D;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover{
                            border: none;
                        }
                        &:hover .app-qr-expand{
                            display: block;
                        }
                        .er-image{
                            display: block;
                            width: 28px;
                            height: 28px;
                            padding: 1px;
                            background: url("../assets/images/icon_qrcode_green.png") no-repeat left top/28px 28px;
                        }
                        .app-qr-expand{
                            display: none;
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 1000;
                            text-align: center;
                            background: white;
                            box-shadow: 0 0 4px rgba(0, 0, 0, .1);
                            .img{
                                width: 160px;
                                height: 160px;
                                padding: 20px 20px 5px 20px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
