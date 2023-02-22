<template>
  <header><h1>标题</h1></header>
  <div class="home">
    <div class="left">
      <ItemTemplate><ItemOne /></ItemTemplate>
      <ItemTemplate> <ItemTwo /></ItemTemplate>
    </div>
    <div class="center"><ChinaMap /></div>
    <div class="right">
      <ItemTemplate><ItemThree /></ItemTemplate>
      <ItemTemplate> <ItemFour /></ItemTemplate>
    </div>
  </div>
</template>

<script>
import ItemTemplate from '@/components/home/ItemTemplate.vue'
import ItemOne from '@/components/home/ItemOne.vue'
import ItemTwo from '@/components/home/ItemTwo.vue'
import ItemThree from '@/components/home/ItemThree.vue'
import ItemFour from '@/components/home/ItemFour.vue'
import ChinaMap from '@/components/home/ChinaMap.vue'

export default {
  setup () {

  },
  components: {
    ItemTemplate,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    ChinaMap
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 3.125rem;
  line-height: 3.125rem;
  text-align: center;
  color: #fff;
}
.home {
  width: 100%;
  background-color: rgba($color: #fff, $alpha: 0.2);
  display: flex;
  padding: 0.625rem;
  .left,
  .right {
    .item-template {
      margin: 0.625rem;
    }
  }
  .center {
    flex: 1;
    margin: 0.625rem 0;
  }
}
</style>
