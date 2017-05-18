<template>
    <div>
        <i-col span="12">
            <Cascader :data="data" v-model="value" trigger="hover" filterable change-on-select
                      :render-format="format"></Cascader>
        </i-col>
        <i-col span="12">
            {{text}}
            <Cascader :data="data" v-model="value" trigger="hover" @on-change="handleChange">
                <a href="javascript:void(0)">选择</a>
            </Cascader>
        </i-col>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                value: [],
                text: '未选择',
                data: [
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [
                            {
                                value: 'gugong',
                                disabled: false,
                                code: 520,
                                label: '故宫'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(',')

            },
            format (labels, selectedData) {
                const index = labels.length -1
                const data = selectedData[index] || false
                if(data && data.code){
                    return labels[index] + '-' + data.code
                }
                return labels[index]
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>