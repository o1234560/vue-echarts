<template>
  <div class="nav-bar" :class="!isShow ? 'isHide' : ''" @click="taggleShow()">
    <router-link to="/home" custom v-slot="{ navigate, href, route }">
      <a :href="href" @click="navigate">{{ route.name }}</a>
    </router-link>
    <router-link to="/calendar" custom v-slot="{ navigate, href, route }">
      <a :href="href" @click="navigate">{{ route.name }}</a>
    </router-link>
    <div class="taggle-fix">》</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    taggleShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-size: 2rem;
  color: #fff;
  &:hover {
    color: #f00;
  }
}
.nav-bar {
  height: 100%;
  width: 15rem;
  position: fixed;
  z-index: 9999;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: #000;
  opacity: 0.8;
  transition: all 0.5s linear;
  .taggle-fix {
    font-size: 1.875rem;
    width: 2rem;
    height: 4rem;
    line-height: 4rem;
    position: absolute;
    right: -2rem;
    top: 50%;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    border-radius: 0 2rem 2rem 0;
    &:hover {
      color: #000;
      background: #fff;
    }
  }
}

.isHide {
  transform: translateX(-15rem);
}
</style>
