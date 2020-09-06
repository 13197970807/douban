<template>
    <div class="db-title">
        <div class="db-title-wrapper">
            <div class="sidenav">
                <h2 class="section-title"><a href="https://time.douban.com?dt_time_source=douban-web_anonymous">豆瓣时间</a></h2>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DbTitle"
  }
</script>

<style scoped lang="scss">
    @import '../assets/styles/global';
    .db-title{
        width: 100%;
        height: 574px;
        padding: 40px 0 20px 0;
        margin-bottom: 30px;
        .db-title-wrapper{
            margin: 0 auto;
            width: 950px;
            @include clearfix;
            .sidenav{
                width: 100px;
                height: 37.6px;
                @include left;
                margin-right: 20px;
                .section-title{
                    font-size: 24px;
                    margin-bottom: 12px;
                }
            }
        }
    }

</style>
