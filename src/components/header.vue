<template>
  <header
    class="flex flex-col mx-26% bg-gray-700 text-center font-bold text-white p-4 mb-5"
  >
    <div class="text-3xl md:text-xl sm:text-lg">To Do List</div>
    <div class="text-lg text text-left">Hello Noor <Button /></div>
  </header>
</template>

<script>
import Button from "./button.vue";
// eslint-disable-next-line vue/multi-word-component-names
export default { name: "Header", components: { Button } };
</script>
