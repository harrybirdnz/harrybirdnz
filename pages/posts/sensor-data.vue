<script setup>
import { Line } from 'vue-chartjs';

const tabs = ref({
  living_room: true,
  bedroom: false,
});

function changeTab(tab) {
  tabs.value[tab] = true;
  Object.keys(tabs.value).forEach((tabloop) => {
    if (tabloop !== tab) {
      tabs.value[tabloop] = false;
    }
  });
}
</script>

<template>
  <div class="h-screen bg-[#36454F] flex justify-center">
    <div class="bg-white p-8 shadow-lg rounded w-4/5 mt-20 h-min">
      <h1 class="font-medium text-2xl underline py-2">Temperature</h1>
      <div class="max-w-full max-h-full flex flex-wrap">
        <div class="flex-col w-full">
          <div class="py-5"><TabLivingData /></div>
          <div class="py-5"><TabBedroomData /></div>
        </div>
      </div>
    </div>
  </div>
</template>
