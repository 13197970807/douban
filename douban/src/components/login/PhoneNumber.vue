<template>
    <div class="phone-number">
        <div class="contry-code" v-show="titleBtnLeft">
            <div class="number">
                <span class="abc" @click.self="selectContry">{{countryCode}}</span>
                <div class="dui-dialog-msk" v-if="showContry">
                    <div class="dui-dialog-content">
                        <div class="hd">
                            <h3>选择国际区号</h3>
                            <span class="coloes iconfont icon-cha" @click="selectContry"></span>
                        </div>
                        <div class="bd">
                            <ul>
                                <li class="selected"
                                    v-for="(item, index) in contrys"
                                    :key="index" @click="selectCode(item.number)"
                                    :class="{'codeClick': countryCode === item.number}">
                                    <span class="left">{{item.contry}}</span>
                                    <i class="left iconfont icon-gou"
                                       v-if="countryCode === item.number"></i>
                                    <span class="right"
                                          :style="{color: countryCode === item.number ? '#42bd56' : '#aaa'}">
                                        {{item.number}}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <input type="text" class="phone-code" placeholder="手机号">
        </div>
        <div class="phone-number" v-if="titleBtnRight">
            <input class="phone-input" type="text" placeholder="手机号 / 邮箱">
        </div>
    </div>
</template>

<script>
    import { homeMixins } from "../../utils/mixin";
    import { contrysList } from "../../api";

    export default {
        mixins: [homeMixins],
        data() {
          return {
            showContry: false,
            contrys: ''
          }
        },
        methods: {
          selectContry() {
            this.showContry = !this.showContry
          },
          selectCode(code) {
            this.setCountryCode(code)
            this.showContry = !this.showContry
          }
        },
      mounted() {
        contrysList().then(response => {
          if(response && response.status === 200) {
            const data = response.data.data
            this.contrys = data
            console.log(data)
          }
        })
      }
    }
</script>

<style scoped lang="scss">
@import '../../assets/styles/global';
    .phone-number{
        position: relative;
        .contry-code{
            margin-bottom: 10px;
            .number{
                position: absolute;
                top: 3px;
                left: 0;
                z-index: 1000;
                width:50px;
                height: 24px;
                text-align: center;
                line-height: 28px;
                font-size: 15px;
                font-weight: bold;
                cursor: pointer;
                border-right: 1px solid rgba(0,0,0,.12);
                .abc{
                    display:block;
                    width: 50px;
                    height: 100%;
                }
                .dui-dialog-msk{
                    position: absolute;
                    top: -100px;
                    left: -10px;
                    z-index: 10;
                    width: 300px;
                    height: 300px;
                    padding-top: 30px;
                    box-sizing: border-box;
                    background: rgba(255, 255, 255, .5);
                    .dui-dialog-content{
                        width: 284px;
                        height: 224px;
                        margin: 0 auto;
                        border-radius: 5px;
                        overflow: hidden;
                        cursor: default;
                        background: #fff;
                        .hd{
                            position: relative;
                            height: 42px;
                            line-height: 42px;
                            color: #060;
                            text-align: left;
                            padding-left: 15px;
                            background: #ebf5eb;
                            .coloes{
                                position: absolute;
                                top: 0;
                                text-align: center;
                                line-height: 42px;
                                cursor: pointer;
                                right: 0px;
                                width: 42px;
                                height: 42px;
                            }
                        }
                        .bd{
                            width: 245px;
                            height: 150px;
                            padding: 15px;
                            overflow: auto;
                            ul{
                                .selected{
                                    height: 38px;
                                    line-height: 38px;
                                    @include clearfix;
                                    border-top: 1px solid #e5e5e5;
                                    &:last-child{
                                        border-bottom: 1px solid #e5e5e5;
                                    }
                                    &.codeClick{
                                        color: #42bd56;
                                        &.right{
                                            color: #42bd56;
                                        }
                                    }
                                    .left{
                                        margin-left: 10px;
                                        @include left;
                                    }
                                    .right{
                                        color: #aaa;
                                        font-weight: normal;
                                        @include right;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .phone-code{
                width: 280px;
                box-sizing: border-box;
                font-size: 13px;
                padding: 8px 40px 8px 60px;
            }
        }
        .phone-number{
            margin-bottom: 10px;
            .phone-input{
                display: inline-block;
                width: 280px;
                font-size: 13px;
                padding: 8px 10px;
                box-sizing: border-box;
            }
        }
    }
</style>
