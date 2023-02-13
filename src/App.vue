<template>
  <router-view></router-view>
</template>

<script>
import * as echarts from 'echarts'
import { provide } from 'vue'

export default {
  setup () {
    provide('echarts', echarts)
  },
  mounted () {
    this.changeRem()
    window.addEventListener('resize', () => {
      this.changeRem()
    })
  },
  methods: {
    changeRem () { // 重新设置rem的大小（不考虑匹配手机端）
      const docWidth = document.documentElement.clientWidth || document.body.clientWidth
      const remSize = docWidth / 1536 * 16
      document.documentElement.style.fontSize = remSize + 'px'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  /* font-size: 16px; */
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}

#app {
  height: 100%;
}
</style>
