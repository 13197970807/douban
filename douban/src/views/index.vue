<template>
    <div class="home">
        <db-header></db-header>
        <anony-reg-new></anony-reg-new>
        <hot-content></hot-content>
        <db-title></db-title>
    </div>
</template>

<script>
  import DbHeader from "../components/Header";
  import AnonyRegNew from "../components/AnonyRegNew";
  import HotContent from "../components/HotContent/HotContent";
  import DbTitle from "../components/DbTitle";
  export default {
    components: {
      DbTitle,
      HotContent,
      DbHeader,
      AnonyRegNew
    }
  }
</script>

<style scoped lang="scss">
@import '../assets/styles/global';
</style>
