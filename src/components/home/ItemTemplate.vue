<template>
  <div class="item-template">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.item-template {
  height: 18.75rem;
  width: 18.75rem;
  border: 0.0625rem solid blue;
  background: rgba($color: rgb(78, 104, 255), $alpha: 0.5);
}
</style>
