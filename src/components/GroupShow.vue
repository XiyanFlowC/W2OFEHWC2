<template>
    <div>
        <h3>{{title}}</h3>
        <hr />
        <div>{{desc}}</div>
        <hr />
        <div style="text-align: center">
            <el-button size="large" type="success" @click="submitResume">向此小组投递简历</el-button>
        </div>
    </div>
</template>

<script>
export default({
    methods: {
        submitResume: function() {
            this.$router.push({path: "/resume", query: {grpid: this.id}})
        }
    },
    props: {
        title: String,
        id: String,
        desc: String
    }
})
</script>
