<template>
    <div>
        <Row>
            <i-col span="12">
                <Date-picker type="date" format="yyyy年MM月dd日" placeholder="选择日期" style="width:200px;" :options="options1"></Date-picker>
            </i-col>
            <i-col span="12">
                <Date-picker type="daterange" placeholder="选择日期段" style="width:200px;"></Date-picker>
            </i-col>
        </Row>
        <br/>
        <Row>
            <i-col span="12">
                <Date-picker :open="open" :value="value" confirm type="date" placement="bottom"
                             @on-change="handleChange"
                             @on-clear="handleClear"
                             @on-ok="handleOk">
                    <a href="javascript:void(0)" @click="handleClick">
                        <Icon type="ios-calendar-outline"></Icon>
                        <template v-if="value === ''">选择日期</template>
                        <template v-else>{{ value }}</template>
                    </a>

                </Date-picker>
            </i-col>
        </Row>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                open: false,
                value: '2017-05-09',
                options1: {
                    shortcuts:[
                        {
                            text: '今天',
                            value () {
                                return new Date()
                            },
                            onClick: (picker) => {
                                this.$Message.info('点击了今天')
                            }
                        },
                        {
                            text: '昨天',
                            value () {
                                const date = new Date()
                                date.setTime(date.getTime() - 3600 * 1000 * 24)
                                return date
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            handleChange (date) {
                this.value = date
            },
            handleClear () {
                this.open = false
            },
            handleOk () {
                this.open = false
            },
            handleClick () {
                this.open = true
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>