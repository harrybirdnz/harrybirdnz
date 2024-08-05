<script setup>
import { Line } from 'vue-chartjs';
const supabase = useSupabaseClient();
let { data, error } = await supabase
  .from('sensor_data')
  .select('*')
  .order('created_at', { ascending: true });
let past_24 = data.filter((recording) => {
  let now = new Date();
  let yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  return new Date(recording.created_at.split('+')[0]) > yesterday;
});

let past_3_days = data.filter((recording) => {
  let now = new Date();
  let three_days_ago = new Date(now);
  three_days_ago.setDate(now.getDate() - 3);
  return new Date(recording.created_at.split('+')[0]) > three_days_ago;
});

let past_7_days = data.filter((recording) => {
  let now = new Date();
  let seven_days_ago = new Date(now);
  seven_days_ago.setDate(now.getDate() - 7);
  return new Date(recording.created_at.split('+')[0]) > seven_days_ago;
});
const tabs = ref({
  all_time: { selected: false, data: data },
  past_24: { selected: true, data: past_24 },
  past_3_days: { selected: false, data: past_3_days },
  past_7_days: { selected: false, data: past_7_days },
});

let selected = ref({});
selected.value = data;
const MAX_DATA_POINTS = 100;
const chartData = computed(() => {
  const totalPoints = selected.value.length;
  const interval = Math.max(Math.floor(totalPoints / MAX_DATA_POINTS), 1);

  const limitedData = selected.value.filter(
    (_, index) => index % interval === 0
  );
  return {
    labels: limitedData.map(
      (recording) =>
        recording.created_at.toLocaleString().split('T')[1].split('.')[0]
    ),
    datasets: [
      {
        borderColor: '#f87979',
        data: limitedData.map((recording) => recording.temperature),
        tension: 0.1,
      },
    ],
  };
});
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
});

function changeTab(tab) {
  selected.value = tabs.value[tab].data;
  tabs.value[tab].selected = true;
  Object.keys(tabs.value).forEach((tabloop) => {
    if (tabloop !== tab) {
      tabs.value[tabloop].selected = false;
    }
  });
}
</script>

<template>
  <h1 class="font-medium text-2xl underline">Living Room Temperature</h1>
  <p>Current Temp: {{ data.slice(-1)[0].temperature }}° Celsius</p>
  <div class="max-w-full max-h-full flex border flex-wrap">
    <div class="flex sm:flex-col gap-3">
      <button
        @click="changeTab('past_24')"
        class="p-2 bg-slate-300 rounded-xl"
        :class="{ 'bg-slate-500': tabs.past_24.selected }"
      >
        24 hrs
      </button>
      <button
        @click="changeTab('past_3_days')"
        class="p-2 bg-slate-300 rounded-xl"
        :class="{ 'bg-slate-500': tabs.past_3_days.selected }"
      >
        3 Days
      </button>
      <button
        @click="changeTab('past_7_days')"
        class="p-2 bg-slate-300 rounded-xl"
        :class="{ 'bg-slate-500': tabs.past_7_days.selected }"
      >
        7 days
      </button>
      <button
        @click="changeTab('all_time')"
        class="p-2 bg-slate-300 rounded-xl"
        :class="{ 'bg-slate-500': tabs.all_time.selected }"
      >
        All Time
      </button>
    </div>
    <div class="w-full h-64 sm:w-4/5">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
