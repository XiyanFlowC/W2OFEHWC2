<template>
  <div class="text-req-area">
      <div class="ques-header">{{question}}</div>
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入回答"
        v-model="input"
        @change="rise">
      </el-input>
  </div>
</template>

<script lang="ts">
export default {
    methods: {
        rise: function() {
            this.$emit('input', this.input);
        }
    },
    data() {
        return {
            input: this.value,
        }
    },
    props: {
        question: String,
        value: String
    }
}
</script>

<style>
.text-req-area {
    width: 100%;
    margin: 1rem auto;
}

.ques-header {
    padding: 0.5rem 0.5rem;
    margin-bottom: 0.2rem;
    border-style: solid;
    border-color: grey;
    border-width: 0 0 0.1rem 0;
}
</style>