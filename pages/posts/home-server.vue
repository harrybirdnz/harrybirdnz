<template>
  <div class="h-screen bg-[#36454F] flex justify-center">
    <div class="bg-white p-8 shadow-lg rounded w-4/5 mt-20 h-min">
      <h1 class="font-medium text-2xl underline">Home Server Project</h1>
      <div class="max-w-full max-h-full">
        <Line :data="chartData" :options="chartOptions" />
      </div>

      <h2>2.0 Portainer Installation</h2>
      <p>
        Before we go any further, we need to add docker to our server, and be
        able to interface with our containers, and for that we are going to use
        Portainer
      </p>
      <h2>3.0 Homarr Installation</h2>
      <p>
        Homarr gives us a server dashboard where we can monitor all our
        services, as well as access everything from one convenient location
        <NuxtLink
          to="https://www.youtube.com/watch?v=A6vcTIzp_Ww&ab_channel=TechHut"
          class="underline"
          >Video</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  'https://fsgddnzsucejknoufguy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZ2RkbnpzdWNlamtub3VmZ3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4ODQyNTMsImV4cCI6MjAzNzQ2MDI1M30.TySR_741vnFulwMbIUBDMsf5TFHXOxiSnVBOfxsuaRs'
);
let { data, error } = await supabase
  .from('sensor_data')
  .select('*')
  .order('created_at', { ascending: true });
console.log(data[0].created_at.toLocaleString().split('T')[1].split('.')[0]);
const chartData = computed(() => ({
  labels: data.map(
    (recording) =>
      recording.created_at.toLocaleString().split('T')[1].split('.')[0]
  ),
  datasets: [
    {
      borderColor: '#f87979',
      data: data.map((recording) => recording.temperature),
      tension: 0.1,
    },
  ],
}));
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  plugins: { legend: { display: false } },
});
</script>
