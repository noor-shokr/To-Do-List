<template>
  <Header />
  <div class="container mx-26%">
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Header },
};
</script>
