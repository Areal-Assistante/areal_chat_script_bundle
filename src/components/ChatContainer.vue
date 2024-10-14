<script lang="ts" setup>
defineProps<{ isShow: boolean }>()
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div class="fixed z-[-99999] inset-0 bg-black/15 opacity-0 duration-[0.2s]"
         :class="{ '!z-[999999] !opacity-100': isShow }">

      <div class="absolute top-0 bottom-0 right-[-472px] w-[472px] flex flex-col"
           :class="{ '!right-0': isShow }">
        <div class="w-full p-[18px] bg-white shadow-[0px_4.502px_19.135px_0px] shadow-black/5 z-50 flex justify-between items-center" dir="rtl">
          <p>چت با آریل</p>

          <svg width="23" class="cursor-pointer" @click="$emit('close')" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2651 20.6481C16.424 20.6481 20.6449 16.4272 20.6449 11.2683C20.6449 6.10936 16.424 1.88843 11.2651 1.88843C6.10618 1.88843 1.88525 6.10936 1.88525 11.2683C1.88525 16.4272 6.10618 20.6481 11.2651 20.6481Z" stroke="#989898" stroke-width="1.39309" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.61035 13.9228L13.9193 8.61377" stroke="#989898" stroke-width="1.39309" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.9193 13.9228L8.61035 8.61377" stroke="#B1B1B1" stroke-width="1.39309" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <iframe class="h-full w-full" src="http://localhost:3000"></iframe>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>

</style>