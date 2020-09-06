<template>
    <div class="notes">
        <li class="first">
            <div class="title">
                <a href="https://www.douban.com/note/768830174/">母女关系进化论：两个女人之间的战争史</a>
            </div>
            <div class="author">
                输入昵称的日记
            </div>
            <p>我和我妈妈曾经一度到了要断绝母女关系的地步，大半年来我们谁也不理谁，一句话也...</p>
        </li>
        <ul class="first-text">
            <li v-for="(item, index) in text" :key="index" class="link-page">
                <a :href="item.textUrl" class="db">{{item.textlist}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        text: [
          {
            textlist: "我的老娘叫老巧",
            textUrl: 'https://www.douban.com/note/750667075/'
          },
          {
            textlist: "写给儿子 没有爸爸的陪伴也要过好父亲节",
            textUrl: 'https://www.douban.com/note/768010170/'
          },
          {
            textlist: "胖纸G的日本爬楼小记（上）——首都圈篇",
            textUrl: 'https://www.douban.com/note/767358638/'
          },
          {
            textlist: "为什么「种族歧视」是美国的发明？",
            textUrl: 'https://www.douban.com/note/765190167/'
          },
          {
            textlist: "母女关系进化论：两个女人之间的战争史",
            textUrl: 'https://www.douban.com/note/768830174/'
          },
          {
            textlist: "诚品书店最后24小时：讲座连续18 小时，演唱会6小时",
            textUrl: 'https://www.douban.com/note/765198690/'
          },
          {
            textlist: "经历是起跑线，眼界才是远方",
            textUrl: 'https://www.douban.com/note/766866098/'
          },
          {
            textlist: "电影的当代性",
            textUrl: 'https://www.douban.com/note/765318277/'
          },
          {
            textlist: "家 有 老 母 谢 飞",
            textUrl: 'https://www.douban.com/note/768284832/'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/global';
    .notes{
        width:275px;
        color: #37a;
    }
    .first{
        list-style: none;
        line-height: 1.62;
        font-size: 12px;
        .title{
            a{
                color: #37a;
                &:hover{
                    background: #37a;
                    color: white;
                }
            }
        }
        .author{
            color: #999;
        }
    }
    .first-text{
        .link-page{
            line-height: 1.62;
            margin-top: 12px;
            color: #37a;
            .db{
                color: #37a;
                &:hover{
                    color: white;
                    background: #37a;
                }
            }
        }
    }
</style>
