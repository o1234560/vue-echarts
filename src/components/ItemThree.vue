<template>
  <div class="three" id="three">three</div>
</template>

<script>
import { inject, onMounted } from '@vue/runtime-core'
import data from '@/assets/mock/3.json' // 导入数据，打包后不再需要网络请求方式获得。

export default {
  setup () {
    const $echarts = inject('echarts')

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('three'))

      console.log('import', data)

      myChart.showLoading()

      myChart.hideLoading()

      const option = {
        title: {
          text: '标题',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {},
        legend: {
          bottom: '1%',
          right: '10%',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '15%'
        },
        axisLabel: {
          color: '#fff'
        },
        xAxis: {
          type: 'category',
          data: data.title,
          axisLabel: {
            rotate: 45
          }
        },
        yAxis: {
        },
        series: [
          {
            name: '支出',
            type: 'line',
            data: data.num,
            itemStyle: {
              color: '#f00'
            }
          },
          {
            name: '收入',
            type: 'line',
            data: data.sum,
            itemStyle: {
              color: '#0ff'
            }
          }
        ]
      }

      myChart.setOption(option)

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.three {
  height: 100%;
  width: 100%;
}
</style>
