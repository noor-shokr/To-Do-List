<template>
  <button @click="onClick()" class="ml-70% bg-green-700 px-4 py-1 rounded">
    Show
  </button>
</template>

<script>
// eslint-disable-next-line vue/multi-word-component-names, no-undef
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>
