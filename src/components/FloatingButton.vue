<script lang="ts" setup>
import { onMounted, shallowRef } from "vue"

const badge = shallowRef<{
  backgroundColor?: string,
  textColor?: string
}>()

const isCustom = shallowRef(false)

onMounted(() => {
  window.areal.load = () => {
    if (window.areal.badge)
      badge.value = window.areal.badge

    if (window.areal.isCustomButton)
      isCustom.value = window.areal.isCustomButton
  }
})
</script>

<template>
  <div class="w-[30px] h-[100px] shadow-[0_0_12px_2px] shadow-[#61616133] flex justify-center cursor-pointer items-center rounded-2xl rounded-r-none relative"
       :style="{
        'backgroundColor': badge && badge.backgroundColor ? badge.backgroundColor : '#fff',
        'color': badge && badge.textColor ? badge.textColor : '#1E1E1E'
  }" v-if="!isCustom">
    <span class="rotate-180 block" :style="{'writingMode': 'vertical-rl'}">چت با آریل</span>

    <svg width="16" height="16" class="absolute -left-2.5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.31999 3.54674L7.17999 5.68674L5.86666 6.99341C5.31333 7.54674 5.31333 8.44674 5.86666 9.00008L9.31999 12.4534C9.77333 12.9067 10.5467 12.5801 10.5467 11.9467V8.20674V4.05341C10.5467 3.41341 9.77333 3.09341 9.31999 3.54674Z"/>
    </svg>
  </div>
</template>