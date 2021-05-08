<template>
  <div class='resume-entry'>
      <div class='resume-title'>
          {{submitter.username}}
      </div>
      Email: {{submitter.email}}
  </div>
</template>

<script>
export default {
    props:{
        submitter: {}
    }
}
</script>

<style>
.resume-entry {
    color: #0b110b;
    background-color: #98fb98;
    border-color: #174217;
    border-style: solid;
    border-radius: 0.5rem;
    border-width: 0.1rem;
}

.resume-title {
    font-weight: bolder;
}
</style>