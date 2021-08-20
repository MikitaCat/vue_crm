<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      tag="li"
      active-class="active"
      :to="link.url"
      v-for="link in links"
      :key="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-teal pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Money Account", url: "/", exact: true },
        { title: "History", url: "/history" },
        { title: "Planning", url: "/planning" },
        { title: "New Entry", url: "/record" },
        { title: "Categories", url: "/categories" },
      ],
    };
  },
};
</script>
