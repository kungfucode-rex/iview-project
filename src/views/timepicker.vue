<template>
    <Row>
        <i-col span="12">
            <Time-picker type="time"
                         :open="open"
                         :value="value"
                         confirm
                         @on-change="handleChange"
                         @on-clear="handleClear"
                         @on-ok="handleOk">
                <a href="javascript:void(0)"
                   @click="handleClick">
                    <Icon type="ios-clock-outline"></Icon>
                    <template v-if="value === ''">选择时间</template>
                    <template v-else>{{value}}</template>
                </a>
            </Time-picker>
        </i-col>
        <i-col span="12">
            <Time-picker confirm type="timerange" placeholder="选择时间段"></Time-picker>
        </i-col>
    </Row>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                open: false,
                value: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open
            },
            handleOk () {
                this.open = false
            },
            handleClear () {
                this.value = ''
                this.open = false
            },
            handleChange (time) {
                this.value = time
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>