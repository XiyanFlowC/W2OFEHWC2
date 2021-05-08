<template>
  <tr class='grpldrshw'>
      <td class='nmfld'>{{userinfo.username}}</td>
      <td>{{userinfo.phone}}</td>
      <td>{{userinfo.email}}</td>
      <td><a href="#" @click="$emit('onView')">查看详细</a></td>
  </tr>
</template>

<script>
export default {
  props: {
    userinfo: {},
  },
  methods: {
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.grpldrshw:hover {
    background-color: #e8ffff;
}
</style>