<script setup>
import { shallowRef } from "vue"

const isChatOpen = shallowRef(false)
const toggleOpen = () => isChatOpen.value = !isChatOpen.value


window.areal = {
  toggleChatWindow: toggleOpen,
}
</script>

<template>
  <div class="flex items-center">
    <ChatContainer :is-show="isChatOpen" @close="toggleOpen"/>
    <FloatingButton @click="toggleOpen"/>
  </div>
</template>

<style>

</style>