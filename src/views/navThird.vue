<template>
    <div>
        <h1>Radio</h1>
        <br/>
        <Radio-group v-model="phone">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>
        <br/><br/>
        <Radio-group v-model="animal" type="button" size="large">
            <Radio label="c">鸡</Radio>
            <Radio label="x">牛</Radio>
            <Radio label="羊"></Radio>
        </Radio-group>
        <h1>CheckBox</h1>
        <Checkbox-group>
            <Checkbox label="twitter">
                <Icon type="social-twitter"></Icon>
                <span>Twitter</span>
            </Checkbox>
            <Checkbox label="facebook">
                <Icon type="social-facebook"></Icon>
                <span>Facebook</span>
            </Checkbox>
        </Checkbox-group>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                phone: 'apple',
                animal: 'x'
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>