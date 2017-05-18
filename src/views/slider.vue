<template>
    <div>
        <br/>
        <Slider v-model="value1" :step="10" showStops show-input></Slider>
        <Slider v-model="value2" range show-stops :tip-format="format"
            :min="20" :max="89" @on-change="onchange"></Slider>
        <Slider v-model="value2" range disabled=""></Slider>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                value1: 20,
                value2: [20, 50]
            }
        },
        methods: {
            format (val) {
                return '进度' + val + '%'
            },
            onchange (val) {
                this.$Message.info('进度' + val)
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>