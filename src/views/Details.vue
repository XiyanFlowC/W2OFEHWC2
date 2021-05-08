<template>
  <div id="IntroMain" style="max-width: 50em; margin: 1rem auto">
    <group-show :title="entry.title" :id="entry.id" :desc="entry.desc">
    </group-show>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
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
      entry: {
        title: '正在获取',
        desc: '正在获取',
        id: '-1'
      }
    }
  },
  methods: {
    slipe() {
      var gid = this.$route.query.grpid;
      axios.get('/api/getDirectionInfo', {
        params: {
          directionID: gid
        }
      }).then((content) => {
        this.entry.desc = content;
      }).catch((error) => {
        this.$message({message: '无法获取详细：'+ error, type: 'error'});
      })

      switch(gid) {
        case '1':
          this.entry.title = 'JAVA';
          break;
        case '2':
          this.entry.title = 'Python';
          break;
        case '3':
          this.entry.title = '美术';
          break;
        case '4':
          this.entry.title = '前端';
          break;
        case '5':
          this.entry.title = '产品经理';
          break;
        case '6':
          this.entry.title = 'GO';
          break;
        case '7':
          this.entry.title = 'Unity';
          break;
        default:
          this.entry.title = '未知方向，请留意介绍';
      }
    }
  },
  components: { GroupShow },

}
</script>

<style>

</style>