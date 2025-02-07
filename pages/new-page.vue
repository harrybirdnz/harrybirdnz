<template>
  <div class="container p-5 mx-auto">
    <hr class="border-4 border-gray-600 mt-10 mb-5" />
    <h1 class="font-montserrat text-xl">Example Project</h1>
    <div class="columns-2">
      <p class="font-montserrat">
        This is a placeholder text for the new page. You can replace this with
        your actual content.
      </p>
      <NuxtImg
        src="/fan_blade.png"
        class="max-h-[30vh] border rounded shadow-xl mx-auto"
      />
    </div>
    <hr class="border-4 border-gray-600 my-10" />
    <div class="text-center mt-5">
      <button
        class="border border-[#34d399] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#34d399] transition duration-300"
      >
        <div class="text-xl">Button Title</div>
        <div class="text-sm">Button Subtitle</div>
      </button>
    </div>
  </div>
</template>
