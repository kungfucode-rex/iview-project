<template>
    <div>
        <div class="select-all">
            <Checkbox
                    :indeterminate="indeterminate"
                    :value="checkAll"
                    @click.prevent.native="handleCheckAll">
                全选
            </Checkbox>
        </div>
        <Checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </Checkbox-group>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false
                } else {
                    this.checkAll = !this.checkAll
                }
                this.indeterminate = false
                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '西瓜', '苹果']
                } else {
                    this.checkAllGroup = []
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false
                    this.checkAll = true
                } else if (data.length > 0) {
                    this.indeterminate = true
                    this.checkAll = false
                } else {
                    this.indeterminate = false
                    this.checkAll = false
                }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .select-all
        border-bottom: 1px solid #e9e9e9
        padding-bottom: 10px
        margin-bottom: 10px
</style>