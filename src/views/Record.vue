<template>
  <div>
    <div class="page-title">
      <h3>New Entry</h3>
    </div>

    <Loader v-if="loading" />

    <p class="center" v-else-if="!categories.length">
      No categories yet <router-link to="/categories">Add Category</router-link>
    </p>

    <form class="form" v-else>
      <div class="input-field">
        <select ref="select">
          <option v-for="category in categories" :key="category.id">{{
            category.title
          }}</option>
        </select>
        <label>Select Category</label>
      </div>

      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="income" />
          <span>Income</span>
        </label>
      </p>

      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="outcome" />
          <span>Expence</span>
        </label>
      </p>

      <div class="input-field">
        <input id="amount" type="number" />
        <label for="amount">Amount</label>
        <span class="helper-text invalid">amount password</span>
      </div>

      <div class="input-field">
        <input id="description" type="text" />
        <label for="description">Description</label>
        <span class="helper-text invalid">description password</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Create
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Record",

  data() {
    return {
      categories: [],
      loading: true,
      select: null,
    };
  },

  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;

    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
    }, 0);
  },

  destroyed() {
    if (this.select && this.select.destroy) {
      this.select.destroy();
    }
  },
};
</script>
