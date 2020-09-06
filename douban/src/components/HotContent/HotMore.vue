<template>
    <div class="hot-more">
        <h2 class="hot-more-title">
            热点内容
            &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
            <span class="pl">&nbsp;(

                    <a href="https://www.douban.com/explore/" target="_self">更多</a>
                ) </span>
        </h2>
        <div class="albums">
            <albums></albums>
        </div>
        <div class="notes">
            <notes></notes>
        </div>
    </div>
</template>

<script>
  import Albums from "./Albums";
  import Notes from "./Notes";
  export default {
    components: {Notes, Albums}
  }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/global';
    .hot-more{
        width: 655px;
        @include clearfix;
        .hot-more-title{
            font-size: 15px;
            color: #072;
            margin-bottom: 12px;
            line-height: 150%;
        }
        .albums{
            width: 360px;
            @include left;
        }
        .notes{
            width: 275px;
            @include right;
        }
    }
</style>
