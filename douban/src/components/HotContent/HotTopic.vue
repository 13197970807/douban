<template>
    <div class="hot-topic">
        <div class="side">
            <img class="topic-img" src="../../assets/images/hottopic.jpg">
        </div>
        <h2 class="hot-topic-title">
            热门话题
            &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
            <span class="pl">&nbsp;(

                    <a href="/gallery/" target="_self">去话题广场</a>
                ) </span>
        </h2>
        <li class="rec_topics" v-for="(item, index) in hotTopic" :key="index">
            <a :href="item.url" class="rec_topics_name">{{item.text}}</a>
            <span class="rec_topics_subtitle">{{item.browse}}</span>
        </li>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        hotTopic: [
          {
            text: "你所了解的地方经典菜系变迁",
            browse: "18.4万次浏览",
            url: 'https://www.douban.com/gallery/topic/150912/?from=hot_topic_anony_sns'
          },
          {
            text: "你是如何践行数字极简生活方式的？",
            browse: "81.4万次浏览",
            url: 'https://www.douban.com/gallery/topic/150380/?from=hot_topic_anony_sns'
          },
          {
            text: "在文学作品中发现知己的瞬间",
            browse: "37.2万次浏览",
            url: 'https://www.douban.com/gallery/topic/150649/?from=hot_topic_anony_sns'
          },
          {
            text: "临终时你会怎样安置自己的书？",
            browse: "1.6万次浏览",
            url: 'https://www.douban.com/gallery/topic/150700/?from=hot_topic_anony_sns'
          },
          {
            text: "晒出你最满意的胶带拼接",
            browse: "4.6万次浏览",
            url: 'https://www.douban.com/gallery/topic/99256/?from=hot_topic_anony_sns'
          },
          {
            text: "少年时代的烦恼",
            browse: "新话题 · 1.6万次浏览",
            url: 'https://www.douban.com/gallery/topic/150732/?from=hot_topic_anony_sns'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/global';
.hot-topic{
    width: 265px;
    margin-left: 30px;
    .side{
        margin-bottom: 20px;
        .topic-img{
            width: 250px;
            height: 125px;
            display: block;
        }
    }
    .hot-topic-title{
        color: #072;
        margin-bottom: 12px;
        font-size: 15px;
        line-height: 150%;
    }
    .rec_topics{
        margin: 10px 0;
        list-style: none;
        .rec_topics_name{
            font-size: 14px;
            color: #3377aa;
            &:hover{
                color: white;
                background: #3377aa;
            }
        }
        .rec_topics_subtitle{
            display: block;
            color: #999;
        }
    }
}
</style>
