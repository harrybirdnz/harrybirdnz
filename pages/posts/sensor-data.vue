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
      <h1 class="font-medium text-2xl underline">Temperature</h1>
      <div class="max-w-full max-h-full flex border flex-wrap">
        <div class="flex sm:flex-col gap-3">
          <button
            @click="changeTab('living_room')"
            class="p-2 bg-slate-300 rounded-xl"
            :class="{ 'bg-slate-500': tabs.living_room }"
          >
            Living Room
          </button>
          <button
            @click="changeTab('bedroom')"
            class="p-2 bg-slate-300 rounded-xl"
            :class="{ 'bg-slate-500': tabs.bedroom }"
          >
            Bedroom
          </button>
        </div>
        <div class="w-full sm:w-4/5">
          <div v-if="tabs.living_room"><TabLivingData /></div>

          <div v-else-if="tabs.bedroom"><TabBedroomData /></div>
        </div>
      </div>
    </div>
  </div>
</template>
