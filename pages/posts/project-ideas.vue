<template>
  <div class="h-screen bg-[#36454F] flex justify-center">
    <div class="bg-white p-8 shadow-lg rounded w-4/5 mt-20 h-min">
      <h1 class="font-medium text-2xl underline">Ideas</h1>
      <ul class="list-disc pt-5 pl-5">
        <li>
          Use docker on Home Server -
          <NuxtLink
            to="https://www.youtube.com/watch?v=q8MRqdqeh8U&list=PLFxfbw6hcvOcL20LMj9MG6751WXQIyJQU&index=2&ab_channel=TechHut"
            class="underline"
            >video</NuxtLink
          >
        </li>
        <li>
          Set up
          <NuxtLink to="https://homarr.dev/" class="underline">Homarr</NuxtLink>
          on my home server along with
          <NuxtLink to="https://unraid.net/product" class="underline"
            >Unraid</NuxtLink
          >
          <p>
            Ok So Unraid is a whole operating system in itself, looks like it's
            very good at operating NAS, but if you want to do anything outside
            those confines, better to just be running Ubuntu server
          </p>
        </li>
        <li>
          Expand storage and seed
          <NuxtLink to="https://annas-archive.gs/torrents" class="underline"
            >Anna's Archive</NuxtLink
          >
        </li>
        <li>
          Create live monitoring of room temperature using arduino and home
          server
        </li>
      </ul>
    </div>
  </div>
</template>
