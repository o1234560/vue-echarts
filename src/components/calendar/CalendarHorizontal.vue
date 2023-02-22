<template>
  <div class="calendar">
    <h1 class="title">水平热力图（日历）</h1>
    <div class="container" id="calendar-horizontal"></div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'

export default {
  setup () {
    const $echarts = inject('echarts')

    function getVirtualData (year) {
      const date = +$echarts.time.parse(year + '-01-01') // 通过“+”将日期转换为数字
      const end = +$echarts.time.parse(year + '-12-31')
      const dayTime = 3600 * 24 * 1000
      const data = []
      for (let time = date; time <= end; time += dayTime) {
        data.push([
          $echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
          Math.floor(Math.random() * 10)
        ])
      }
      // console.log(data)
      return data
    }

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('calendar-horizontal'))

      const option = {
        tooltip: {},
        visualMap: {
          min: 0, // 可显示数据范围min-max
          max: 10,
          calculable: true, // 默认样式时，数据范围可在min-max中间调节
          type: 'piecewise', // 图例样式改为 piecewise
          orient: 'horizontal', // 图例排列方式 vertical | horizontal
          left: 'center',
          top: 0
        },
        calendar: [{
          range: '2023',
          top: '20%',
          bottom: '10%',
          left: '10%',
          right: '10%',
          cellSize: ['auto', 20] // 自动改变单元格大小,当同时设置left和right 或 top和bottom后，大小设置无效
        }],
        series: [{
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: getVirtualData('2023')
        }]
      }
      myChart.setOption(option)

      window.addEventListener('resize', () => {
        // console.log('resize')
        myChart.resize()
      })
    })

    return { getVirtualData }
  }

}
</script>

<style lang="scss" scoped>
.calendar {
  color: #fff;
  width: 100%;
  height: 100%;
  // display: inline-block;
  // position: absolute;
  margin: 0 auto;
  overflow: auto;
}

.title {
  color: #fff;
  margin: 1.625rem auto;
  text-align: center;
}

.container {
  height: 50%;
  width: 80%;
  margin: 1.625rem auto;
  background: #fff;
}
</style>
