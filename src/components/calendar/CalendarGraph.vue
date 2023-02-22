<template>
  <div class="calendar">
    <h1 class="title">日历关系图</h1>
    <div class="container" id="calendar-graph"></div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'

export default {
  setup () {
    const $echarts = inject('echarts')

    const graphData = [
      ['2017-02-01', 260],
      ['2017-02-04', 200],
      ['2017-02-09', 279],
      ['2017-02-13', 847],
      ['2017-02-18', 241],
      ['2017-02-23', 411],
      ['2017-03-14', 985]
    ]
    const links = graphData.map(function (item, idx) {
      return {
        source: idx, // 起始位置
        target: idx + 1 // 目标位置
      }
    })
    links.pop()
    function getVirtualData (year) {
      const date = +$echarts.time.parse(year + '-01-01')
      const end = +$echarts.time.parse(+year + 1 + '-01-01')
      const dayTime = 3600 * 24 * 1000
      const data = []
      for (let time = date; time < end; time += dayTime) {
        data.push([
          $echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
          Math.floor(Math.random() * 1000)
        ])
      }
      return data
    }

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('calendar-graph'))

      const option = {
        tooltip: {},
        calendar: {
          top: 'middle',
          left: 'center',
          orient: 'vertical',
          cellSize: 40,
          yearLabel: {
            margin: 50,
            fontSize: 30
          },
          dayLabel: {
            firstDay: 1, // 选择周几为一周的开始
            nameMap: 'cn'
          },
          monthLabel: {
            nameMap: 'cn',
            margin: 15,
            fontSize: 20,
            color: '#999'
          },
          range: ['2017-02', '2017-03-31'] // 开始日期到结束日期
        },
        visualMap: {
          min: 0,
          max: 1000,
          type: 'piecewise',
          left: 'center',
          bottom: 20,
          inRange: { // 各个小格子
            color: ['#5291FF', '#C7DBFF'] // 颜色范围
          },
          seriesIndex: [1],
          orient: 'horizontal'
        },
        series: [
          {
            type: 'graph',
            edgeSymbol: ['none', 'arrow'],
            coordinateSystem: 'calendar', // 指明坐标轴
            links: links, // 指明关系
            symbolSize: 15,
            calendarIndex: 0,
            itemStyle: {
              color: 'yellow',
              shadowBlur: 9,
              shadowOffsetX: 1.5,
              shadowOffsetY: 3,
              shadowColor: '#555'
            },
            lineStyle: {
              color: '#D10E00',
              width: 1,
              opacity: 1
            },
            data: graphData,
            z: 20
          },
          {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtualData('2017')
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
