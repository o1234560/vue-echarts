<template>
  <div class="map" id="map">ChinaMap</div>
</template>

<script>
import { inject, onMounted } from '@vue/runtime-core'
import http from '@/util/http.js'

export default {
  setup () {
    const $echarts = inject('echarts')

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('map'))

      myChart.showLoading()

      http('/mock/map.json').then(res => {
        // console.log(res.data)

        // const data = res.data
        const data = res.data

        myChart.hideLoading()

        $echarts.registerMap('chinaMap', data)

        const option = {
          title: {
            text: '地图'
          },
          tooltip: {},
          geo: {
            type: 'map',
            map: 'chinaMap',
            roam: true, // 开启缩放和平移
            zoom: 1.5, // 缩放比例
            center: [106.520896, 33.17654] // 设置中心坐标
          }

        }

        myChart.setOption(option)
      })

      window.addEventListener('resize', () => {
        // console.log('resize')
        myChart.resize()
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.map {
  height: 100%;
  width: 100%;
  border: 0.0625rem solid blue;
}
</style>
