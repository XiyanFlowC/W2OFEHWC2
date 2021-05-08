<template>
  <div class="group-entry">
    <a class="group-title" @click="gotoDetail(id)" href="#">{{ title }}</a>
    <div class="group-type">{{ type }}</div>
    <div class="group-desc">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "GroupEntry",
  props: {
    title: String,
    type: String,
    description: String,
    id: String,
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({
        path: "/intro/details",
        query: {
          grpid: id,
        },
      });
    },
  },
};
</script>

<style>
.group-entry {
  margin: 1rem auto;
  border: 0.1rem;
  border-style: solid;
  border-color: #eeeefe;
  border-radius: 0.5rem;
  background-color: #f8f8ff;
  padding: 1rem 2rem;
}

.group-title {
  display: inline;
  float: left;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
  color: #0e0e0e;
}

.group-type {
  display: inline;
  float: right;
  font-size: small;
  font-style: italic;
  color: grey;
}

.group-desc {
  clear: both;
  margin: 0.25rem 0.5rem;
}
</style>