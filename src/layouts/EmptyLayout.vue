<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from "@/utils/messages";
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    //custom alert with errors messages
    error(fbError) {
      this.$error(messages[fbError.code] || "Something went wrong");
    },
  },
};
</script>
