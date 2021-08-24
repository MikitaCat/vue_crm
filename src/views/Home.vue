<template>
  <div>
    <div class="page-title">
      <h3>Account</h3>

      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <Loader v-if="loading" />

    <div v-else class="row">
      <HomeBill />
      <HomeCurrency />
    </div>
  </div>
</template>

<script>
import HomeBill from "@/components/HomeBill";
import HomeCurrency from "@/components/HomeCurrency";
export default {
  name: "home",
  components: {
    HomeBill,
    HomeCurrency,
  },
  data() {
    return {
      loading: true,
      currency: null,
    };
  },
  async mounted() {
    this.currency = await this.$store.dispatch("fetchCurrency");
    console.log(this.currency);
    this.loading = false;
  },
};
</script>
