<script setup>
const route = useRoute();
console.log(route.path);
</script>

<template>
  <nav class="bg-[#212529] fixed top-0 w-full z-50 h-12">
    <ul
      class="flex flex-row items-center p-2 gap-3 text-sm text-white uppercase font-medium tracking-wider whitespace-nowrap mx-auto"
    >
      <li class="font-bold">Harry Bird</li>
      <li>
        <nuxt-link
          to="/"
          class="font-montserrat"
          :class="{ 'text-red-500': route.path === '/' }"
          >Home</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/education"
          class="font-montserrat"
          :class="{ 'text-red-500': route.path === '/education' }"
          >Education</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/links"
          class="font-montserrat"
          :class="{ 'text-red-500': route.path === '/links' }"
          >Links</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          to="/posts"
          class="font-montserrat"
          :class="{ 'text-red-500': route.path.includes('/posts') }"
          >Posts</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>
