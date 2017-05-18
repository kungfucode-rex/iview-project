<template>
    <div>
        <Select v-model="model1" multiple filterable style="width: 200px" size="large" clearable placement="bottom">
            <Option-group label="热门城市">
                <Option v-for="item in cityList" v-if="item.hot" :value="item.value"
                        :label="item.label" :key="item" :disabled="item.disabled">
                    <span>{{item.label}}</span><span style="float: right">{{item.value}}</span>
                </Option>
            </Option-group>
            <Option-group label="其它城市">
                <Option v-for="item in cityList" v-if="!item.hot" :value="item.value" :key="item" :disabled="item.disabled">{{item.label}}</Option>
            </Option-group>
        </Select>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市',
                        hot: true
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'xian',
                        label: '西安市',
                        disabled: true
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    }
                ],
                model1: ['hangzhou']
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>