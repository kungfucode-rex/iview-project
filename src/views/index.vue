<style lang="stylus" rel="stylesheet/stylus">
    .layout
        background-color: #f5f7f9
        .layout-logo
            width: 100px
            height: 30px
            background: #5b6270
            border-radius: 3px
            float: left
            position: relative
            top: 15px
            left: 20px
        .layout-nav
            width: 420px
            margin: 0 auto
        .layout-assistant
            width: 300px
            margin: 0 auto
            height: inherit
        .layout-breadcrumb
            padding: 10px 15px 0
        .layout-content
            min-height: 200px
            margin: 15px
            overflow: hidden
            background: #fff
            border-radius: 4px
        .layout-content-main
            padding: 10px
        .layout-copy
            text-align: center
            padding: 10px 0 20px
            color: #9ea7b4
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item href="#">某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <Row>
                <i-col :span="spanLeft">
                    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate" :size="iconSize"></Icon>
                                导航一
                            </template>
                            <Menu-item name="1-4">
                                <router-link tag="span" to="form">Form</router-link>
                            </Menu-item>
                            <Menu-item name="1-1">
                                <router-link tag="span" to="/navFirst">Button</router-link>
                            </Menu-item>
                            <Menu-item name="1-2">
                                <router-link tag="span" to="/navSecond">Input</router-link>
                            </Menu-item>
                            <Menu-item name="1-3">
                                <router-link tag="span" to="/navThird">Radio</router-link>
                            </Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-navigate" :size="iconSize"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">
                                <router-link tag="span" to="/checkbox">复选框</router-link>
                            </Menu-item>
                            <Menu-item name="2-2">
                                <router-link tag="span" to="switch">Switch</router-link>
                            </Menu-item>
                            <Menu-item name="2-3">
                                <router-link tag="span" to="table">Table</router-link>
                            </Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-navigate" :size="iconSize"></Icon>
                                导航三
                            </template>
                            <Menu-item name="3-1">
                                <router-link tag="span" to="select">Select</router-link>
                            </Menu-item>
                            <Menu-item name="3-2">
                                <router-link tag="span" to="slider">slider</router-link>
                            </Menu-item>
                            <Menu-item name="3-3">
                                <router-link tag="span" to="datepicker">Datepicker</router-link>
                            </Menu-item>
                            <Menu-item name="3-4">
                                <router-link tag="span" to="timepicker">Timepicker</router-link>
                            </Menu-item>
                            <Menu-item name="3-5">
                                <router-link tag="span" to="cascader">Cascader</router-link>
                            </Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col :span="spanRight">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        computed: {
          iconSize(){
              return this.spanLeft === 5 ? 14 : 24
          }
        },
        methods: {
        }
    }
</script>
