<template>
  <div id="IntroMain" style="max-width: 50em; margin: 1rem auto">
    <group-show :title="entry.title" :id="entry.id" :desc="entry.desc">
    </group-show>
  </div>
</template>

<script lang="ts">
import GroupShow from "../components/GroupShow.vue";

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
      this.entry = {
        title: "tests v",
        id: "12234432",
        desc: "而后覅u俄红粉实际交付"}
    }
  },
  components: { GroupShow },

}
</script>

<style>

</style>