<template>
  <div id="IntroList" style="max-width: 50em; margin: 1rem auto">
    <group-entry
      v-for="entry in entries"
      :key="entry.id"
      :title="entry.title"
      :type="entry.type"
      :description="entry.desc"
      :id="entry.id"
    ></group-entry>
  </div>
</template>

<script lang="ts">
import GroupEntry from "../components/GroupEntry.vue";

export default {
  updated() {
  },
  mounted() {
    this.slipe();
  },
  data() {
    return{
      entries: [],
      entry: {}
    }
  },
  methods: {
    slipe() {
        this.entries=[];
      this.entries.push({
          title: "JAVA",
          type: "JAVA",
          desc: "JAVA",
          id: "1",
        })
    }
  },
  components: { GroupEntry },
};
</script>

