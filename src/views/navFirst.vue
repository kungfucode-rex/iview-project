<template>
    <div>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <br/><br/>
        <Button type="info">Info</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <Button type="error">Error</Button>
        <br/><br/>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <Button type="primary" icon="ios-search">搜索</Button>
        <Button type="primary" shape="circle" icon="ios-search">搜索</Button>
        <Button type="primary" shape="circle">圆角按钮</Button>
        <br/><br/>
        <Button type="primary" size="large">Large</Button>
        <Button type="primary">Default</Button>
        <Button type="primary" size="small">Small</Button>
        <br/><br/>
        <Button type="success" long>确认提交</Button>
        <br/><br/>
        <Button type="error" long="">确认删除</Button>
        <br/><br/>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Disabled</Button>
        <Button type="primary" loading="">loading...</Button>
        <br/><br/>
        <Button-group>
            <Button type="primary">Primary</Button>
            <Button>default</Button>
        </Button-group>
        <br/><br/>
        <Button-group>
            <Button disabled>昨日</Button>
            <Button disabled>今日</Button>
            <Button disabled>明日</Button>
        </Button-group>
        <br/><br/>
        <Button-group>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button type="ghost">M</Button>
            <Button type="dashed">R</Button>
        </Button-group>
        <br/><br/>
        <Button-group shape="circle" size="large">
            <Button type="primary">
                <Icon type="chevron-left"></Icon> 后退
            </Button>
            <Button type="primary">
                前进 <Icon type="chevron-right"></Icon>
            </Button>
        </Button-group>
        <br/><br/>
        <Button-group vertical="">
            <Button type="ghost" icon="social-facebook"></Button>
            <Button type="ghost" icon="social-twitter"></Button>
            <Button type="ghost" icon="social-googleplus"></Button>
            <Button type="ghost" icon="social-tumblr"></Button>
        </Button-group>
    </div>
</template>
<script type="text/javascript">
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>