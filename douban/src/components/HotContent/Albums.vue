<template>
    <div class="albums">
        <div class="pic" v-for="(item, index) in hotimglist" :key="index">
            <div class="hot-content-img" :style="{backgroundImage:'url('+item.url+')'}"></div>
            <a :href="item.Alink" class="a-color">{{item.content}}</a>
            <span class="hot-title">{{item.PhotoNumber}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        hotimglist: [
          {
            url: require('../../assets/images/hotcontentimg1.webp'),
            content: "我前幾天去了趟動物園",
            PhotoNumber: "83张照片",
            Alink: 'https://www.douban.com/photos/album/1642970589/'
          },
          {
            url: require('../../assets/images/hotcontentimg2.webp'),
            content: "为女儿上菜市下厨房",
            PhotoNumber: "83张照片",
            Alink: 'https://www.douban.com/photos/album/1871519996/'
          },
          {
            url: require('../../assets/images/hotcontentimg3.webp'),
            content: "【微不足道的事】",
            PhotoNumber: "58张照片",
            Alink: 'https://www.douban.com/photos/album/120704503/'
          },
          {
            url: require('../../assets/images/hotcontentimg4.webp'),
            content: "「墟墓之間」──法國",
            PhotoNumber: "210张照片",
            Alink: 'https://www.douban.com/photos/album/1690595730/'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/global';
    .albums{
        width: 360px;
        margin-right: 30px;
        display: flex;
        flex-wrap: wrap;
        .pic{
            width: 170px;
            height: 208px;
            margin: 10px 0 0 10px;
            .hot-content-img{
                width: 170px;
                height: 170px;
            }
            .a-color{
                color: #669;
                &:hover{
                    background: #37a;
                    color: white;
                }
            }
            .hot-title{
                font-size: 12px;
                line-height: 1.62;
            }
        }
    }
</style>
