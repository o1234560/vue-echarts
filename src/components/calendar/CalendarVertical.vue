<template>
  <div class="calendar">
    <h1 class="title">垂直热力图（日历）</h1>
    <div class="container" id="calendar-vertical"></div>
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
      const myChart = $echarts.init(document.getElementById('calendar-vertical'))

      const option = {
        tooltip: {
          position: 'top',
          formatter: function (p) {
            const format = $echarts.time.format(p.data[0], '{yyyy}-{MM}-{dd}', false)
            return format + ': ' + p.data[1]
          }
        },
        visualMap: {
          min: 0, // 可显示数据范围min-max
          max: 10,
          calculable: true, // 默认样式时，数据范围可在min-max中间调节
          // type: 'piecewise', // 图例样式改为 piecewise
          orient: 'vertical', // 图例排列方式 vertical | horizontal
          right: '1%',
          bottom: '1%'
        },
        calendar: [
          {
            orient: 'vertical',
            range: '2022',
            left: '10%',
            bottom: '1%',
            cellSize: [20, 'auto'] // 自动改变单元格大小,当同时设置left和right 或 top和bottom后，大小设置无效
          },
          {
            orient: 'vertical',
            range: '2023',
            left: 'center',
            bottom: '1%',
            cellSize: [20, 'auto'] // 自动改变单元格大小,当同时设置left和right 或 top和bottom后，大小设置无效
          },
          {
            orient: 'vertical',
            range: '2024',
            right: '10%',
            bottom: '1%',
            cellSize: [20, 'auto'] // 自动改变单元格大小,当同时设置left和right 或 top和bottom后，大小设置无效
          }
        ],
        series: [
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: getVirtualData('2022')
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 1,
            data: getVirtualData('2023')
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            calendarIndex: 2,
            data: getVirtualData('2024')
          }
        ]
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
  height: 80%;
  width: 80%;
  margin: 1.625rem auto;
  background: #fff;
}
</style>
