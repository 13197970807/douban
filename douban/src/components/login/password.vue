<template>
    <div class="password">
        <div class="phone-number" v-if="titleBtnLeft">
            <input class="password-input top-input" type="text" placeholder="验证码">
            <span class="password-text">获取验证码</span>
        </div>
        <div class="phone-number" v-if="titleBtnRight">
            <input class="password-input" type="text" placeholder="密码">
        </div>
    </div>
</template>

<script>
    import { homeMixins } from "../../utils/mixin";

    export default {
      mixins: [homeMixins]
    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/global';
    .password{
        .phone-number{
            position: relative;
            margin-bottom: 10px;
            .password-text{
                position: absolute;
                top: 8px;
                right: 10px;
                color: #42bd56;
            }
            .password-input{
                display: inline-block;
                width: 280px;
                font-size: 13px;
                padding: 8px 10px;
                box-sizing: border-box;
            }
        }
    }

</style>
