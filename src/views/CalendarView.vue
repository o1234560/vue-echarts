<script setup>
/**
 * 1、使用script setup时，需要注意顺序，
 *    首先是 script setup, 然后是 template。
 * 2、在setup中绑定的内容，可以直接在template中使用。
 */
import CalendarHorizontal from '@/components/calendar/CalendarHorizontal.vue'
import CalendarVertical from '@/components/calendar/CalendarVertical.vue'
import CalendarGraph from '@/components/calendar/CalendarGraph.vue'
</script>

<template>
  <div class="calendar-view">
    <CalendarHorizontal />
    <CalendarVertical />
    <CalendarGraph />
  </div>
</template>

<style>
.calendar-view {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  color: #fff;
}
</style>
