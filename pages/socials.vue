<template>
  <div class="min-h-screen bg-[#36454F]">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full w-2/3 mx-auto pt-16"
    >
      <NuxtLink
        to="https://www.linkedin.com/in/harry-bird/"
        target="_blank"
        class="border border-black bg-zinc-50 rounded-xl p-5 hover:underline hover:font-medium"
        >LinkedIn</NuxtLink
      >
      <NuxtLink
        to="https://github.com/harrybirdnz"
        target="_blank"
        class="border border-black bg-zinc-50 rounded-xl p-5 hover:underline hover:font-medium"
        >Github</NuxtLink
      >
      <NuxtLink
        to="/HarryBirdCV-20240510.pdf"
        external
        target="_blank"
        class="border border-black bg-zinc-50 rounded-xl p-5 hover:underline hover:font-medium"
        >Resume</NuxtLink
      >

      <hr
        class="my-4 border-dotted border-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      />
    </div>
  </div>
</template>
