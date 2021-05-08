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
        this.entries=[{
          title: "JAVA",
          type: "技术",
          desc: "跨平台语言",
          id: "1",
        },{
          title: "Python",
          type: "技术",
          desc: "脚本语言",
          id: "2"
        },{
          title: "美术",
          type: "艺术",
          desc: "视觉设计",
          id: "3"
        },{
          title: "前端",
          type: "技术",
          desc: "设计并实现用户交互",
          id: "4"
        },{
          title: "产品经理",
          type: "管理",
          desc: "设计并监视产品",
          id: "5"
        },{
          title: "GO",
          type: "技术",
          desc: "新兴的语言",
          id: "6"
        },{
          title: "Unity",
          type: "艺术",
          desc: "设计并实现游戏",
          id: "7"
        }];
    }
  },
  components: { GroupEntry },
};
</script>

