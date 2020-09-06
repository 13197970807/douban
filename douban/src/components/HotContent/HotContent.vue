<template>
    <div class="hot-content">
        <div class="hot-content-wrapper">
            <div class="hot-more">
                <hot-more></hot-more>
            </div>
            <div class="hot-topic">
                <hot-topic></hot-topic>
            </div>
        </div>
    </div>
</template>

<script>
  import HotMore from "./HotMore";
  import HotTopic from "./HotTopic";
  export default {
    name: "HotContent",
    components: {
      HotMore,
      HotTopic
    }
  }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/global';
.hot-content{
    width: 100%;
    height: 504px;
    padding: 10px 0;
    margin-bottom: 30px;
    @include clearfix;
    .hot-content-wrapper{
        width: 950px;
        margin: 0 auto;
        @include clearfix;
        .hot-more{
            @include left;
        }
        .hot-topic{
            @include right;
        }
    }
}
</style>
