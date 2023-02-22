<template>
  <div class="two" id="two">two</div>
</template>

<script>
import { inject, onMounted } from '@vue/runtime-core'
import http from '@/util/http.js'

export default {
  setup () {
    const $echarts = inject('echarts')

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('two'))

      myChart.showLoading()

      http('/mock/2.json').then(res => {
        // console.log(res.data)

        // const data = res.data
        const data = res.data

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
          // legend: {
          //   bottom: '5%',
          //   right: '5%',
          //   textStyle: {
          //     color: '#fff'
          //   }
          // },
          grid: {
            left: '15%'
          },
          xAxis: {

          },
          axisLabel: {
            color: '#fff'
          },
          yAxis: {
            type: 'category',
            data: data.title
          },
          series: [
            {
              name: '消费',
              type: 'bar',
              data: data.num,
              itemStyle: {
                borderRadius: [0, 10, 10, 0],
                color: new $echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {
                      offset: 0,
                      color: '#ff5eaa'
                    },
                    {
                      offset: 0.5,
                      color: '#aafca8'
                    }, {
                      offset: 1,
                      color: '#cdf819'
                    }
                  ]
                )
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
.two {
  height: 100%;
  width: 100%;
}
</style>
