<template>
  <div class="four" id="four">four</div>
</template>

<script>
import { inject, onMounted } from '@vue/runtime-core'
// import http from '@/util/http.js'

export default {
  setup () {
    const $echarts = inject('echarts')

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('four'))

      myChart.showLoading()

      fetch('/mock/4.json')
        .then(res => res.json())
        .then((data) => {
          console.log('fetch', data)

          // const data = res.data
          // const data = res.data

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
        })

      window.addEventListener('resize', () => {
        myChart.resize()
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.four {
  height: 100%;
  width: 100%;
}
</style>
