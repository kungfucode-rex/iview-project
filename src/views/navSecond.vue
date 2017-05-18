<template>
    <div>
        <Input v-model="value"
               icon="ios-clock-outline"
               @change.native="testEvent"
               size="large"
               placeholder="请输入"
               style="width: 300px;">
            <Select v-model="select1" slot="prepend" style="width: 80px">
                <Option value="http">Http</Option>
                <Option value="https">https</Option>
            </Select>
            <Select v-model="select2" slot="append" style="width: 60px">
                <Option value="com">.com</Option>
                <Option value="cn">.cn</Option>
                <Option value="org">.org</Option>
            </Select>
        </Input>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
          return {
              select1:'http',
              select2:'org'
          }
        },
        methods: {
            testEvent () {
                alert('haha')
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>