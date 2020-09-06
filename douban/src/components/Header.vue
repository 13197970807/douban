<template>
    <div class="header">
        <div class="anony-nav">
            <h1 class="login">
                <a href="#">豆瓣</a>
            </h1>
            <div class="anony-srh">
                <input class="text" type="text" placeholder="书籍、电影、音乐、小组、小站、成员">
                <i class="anony-seach-icon iconfont icon-chazhao-fangdajingIconziyuan"></i>
            </div>
            <div class="anony-nav-links">
                <a href="https://book.douban.com" class="_blank link-book"></a>
                <a href="https://movie.douban.com" class="_blank link-movie"></a>
                <a href="https://music.douban.com" class="_blank link-music"></a>
                <a href="https://www.douban.com/location/" class="_blank lnk-events"></a>
                <a href="https://www.douban.com/group/" class="_blank lnk-group"></a>
                <a href="https://read.douban.com" class="_blank link-read"></a>
                <a href="https://douban.fm" class="_blank link-fm"></a>
                <a href="https://time.douban.com/?dt_time_source=douban-web_anonymous_index_top_nav" class="_blank link-time"></a>
                <a href="https://market.douban.com?utm_campaign=anonymous_top_nav&utm_source=douban&utm_medium=pc_web" class="_blank lnk-market"></a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
    @import '../assets/styles/global';
.header{
    width: 100%;
    height: 89px;
    padding-top: 30px;
    box-sizing: border-box;
    .anony-nav{
        width: 1080px;
        height: 34px;
        margin: 0 auto;
        @include clearfix;
        .login{
            width: 160px;
            height: 0;
            padding-top: 34px;
            margin-right: 20px;
            overflow: hidden;
            background: url("../assets/images/logo_db.png") no-repeat;
            @include left;
        }
        .anony-srh{
            position: relative;
            width: 270px;
            height: 32px;
            border: 1px solid #c3c3c3;
            @include left;
            .text{
                font-size: 13px;
                width: 240px;
                height: 20px;
                padding: 5px;
                &:focus{
                    outline: none;
                }
                &::-webkit-input-placeholder{
                    font-size: 13px;
                    color: #ccc;
                }
            }
            .anony-seach-icon{
                position: absolute;
                top: 0;
                right: 3px;
                width: 30px;
                height: 32px;
                color: #ccc;
                cursor: pointer;
                text-align: center;
                line-height: 30px;
                display: block;
            }
        }
        .anony-nav-links{
            height: 21px;
            margin-top: 6px;
            @include right;
            ._blank{
                display: inline-block;
                width: 40px;
                height: 20px;
                margin-right: 14px;
                background: url("../assets/images/anony_nav_logo.png") no-repeat top left/463px 20px;
                &.link-book{
                    background-position: 0 0;
                }
                &.link-movie{
                    background-position: -60px 0;
                }
                &.link-music{
                    background-position: -120px 0;
                }
                &.lnk-events{
                    background-position: -180px 0;
                }
                &.lnk-group{
                    background-position: -240px 0;
                }
                &.link-read{
                    background: transparent url("../assets/images/ic_read_home_nav.png") no-repeat;
                }
                &.link-fm{
                    background-position: -300px 0;
                }
                &.link-time{
                    background-position: -360px 0;
                }
                &.lnk-market{
                    width: 44px;
                    background-position: -420px 0;
                }
            }
        }
    }
}
</style>
