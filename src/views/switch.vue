<template>
    <div>
        <i-switch v-model="switch1" size="large" @on-change="change">
            <span slot="open">开</span>
            <span slot="close">关</span>
        </i-switch>
        <i-switch v-model="switch1" size="large" @on-change="change">
            <Icon slot="open" type="android-done"></Icon>
            <Icon slot="close" type="android-close"></Icon>
        </i-switch>
        <i-switch :disabled="disabled"></i-switch>
        <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                switch1: true,
                disabled: true
            }
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status)
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>