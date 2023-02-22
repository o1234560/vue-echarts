<template>
  <div class="one" id="one">one</div>
</template>

<script>
import { inject, onMounted } from '@vue/runtime-core'
import http from '@/util/http.js'

export default {
  setup () {
    const $echarts = inject('echarts')

    onMounted(() => {
      const myChart = $echarts.init(document.getElementById('one'))

      myChart.showLoading()

      http('/mock/1.json').then(res => {
        console.log('axios', res.data)

        // const data = res.data
        const data = res.data.sort((a, b) => b.value - a.value)

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
          series: [
            {
              name: '消费',
              type: 'pie',
              data: data,
              roseType: 'radius',
              radius: [20, 90],
              itemStyle: {
                borderRadius: 10
              },
              label: {
                // position: 'inside'
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
.one {
  height: 100%;
  width: 100%;
}
</style>
