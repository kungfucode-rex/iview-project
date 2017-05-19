<template>
    <div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <Form-item prop="user">
                <i-input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item prop="password">
                <i-input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
            </Form-item>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            </Form-item>
        </Form>
        <Row>
            <i-col span="12">
                <Form :model="formItem" :label-width="80">
                    <Form-item label="输入框">
                        <i-input :model="formItem.input" placeholder="请输入"></i-input>
                    </Form-item>
                    <Form-item label="选择器">
                        <Select :model="formItem.select" placeholder="请选择" :value="formItem.select">
                            <Option value="beijing">北京</Option>
                            <Option value="shanghai">上海</Option>
                            <Option value="shenzheng">深圳</Option>
                        </Select>
                    </Form-item>
                    <Form-item label="日期控件">
                        <Row>
                            <i-col span="11">
                                <Date-picker type="date" placeholder="选择日期" :model="formItem.date"></Date-picker>
                            </i-col>
                            <i-col span="2" style="text-align:center;">-</i-col>
                            <i-col span="11">
                                <Time-picker type="time" placeholder="选择时间" :model="formItem.time"></Time-picker>
                            </i-col>
                        </Row>

                    </Form-item>
                    <Form-item label="单选框">
                        <Radio-group v-model="formItem.radio">
                            <Radio label="male">男</Radio>
                            <Radio label="female">女</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="多选框">
                        <Checkbox-group v-model="formItem.checkbox">
                            <Checkbox label="吃饭"></Checkbox>
                            <Checkbox label="睡觉"></Checkbox>
                            <Checkbox label="跑步"></Checkbox>
                            <Checkbox label="看电影"></Checkbox>
                        </Checkbox-group>
                    </Form-item>
                    <Form-item label="开关">
                        <i-switch v-model="formItem.switch" size="large">
                            <span slot="open">开启</span>
                            <span slot="close">关闭</span>
                        </i-switch>
                    </Form-item>
                    <Form-item label="滑块">
                        <Slider v-model="formItem.slider" range></Slider>
                    </Form-item>
                    <Form-item label="文本域">
                        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows:2,maxRows:3}"
                               placeholder="请输入"></Input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary">提交</Button>
                        <Button type="">取消</Button>
                    </Form-item>
                </Form>
            </i-col>
            <i-col span="12">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <Form-item label="姓名" prop="name">
                        <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
                    </Form-item>
                    <Form-item label="邮箱" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
                    </Form-item>
                    <Form-item label="城市" prop="city">
                        <Select v-model="formValidate.city" placeholder="请选择所在地">
                            <Option value="beijing">北京市</Option>
                            <Option value="shanghai">上海市</Option>
                            <Option value="shenzhen">深圳市</Option>
                        </Select>
                    </Form-item>
                    <Form-item label="选择日期">
                        <Row>
                            <i-col span="11">
                                <Form-item prop="date">
                                    <Date-picker type="date" v-model="formValidate.date"
                                                 placeholder="选择日期"></Date-picker>
                                </Form-item>
                            </i-col>
                            <i-col span="2" style="text-align: center;">
                                -
                            </i-col>
                            <i-col span="11">
                                <Form-item prop="time">
                                    <Time-picker type="time" v-model="formValidate.time"
                                                 placeholder="选择时间"></Time-picker>
                                </Form-item>
                            </i-col>
                        </Row>
                    </Form-item>
                    <Form-item label="性别" prop="gender">
                        <Radio-group v-model="formValidate.gender">
                            <Radio label="male">男</Radio>
                            <Radio label="female">女</Radio>
                        </Radio-group>
                    </Form-item>
                    <Form-item label="爱好" prop="interest">
                        <Checkbox-group v-model="formValidate.interest">
                            <Checkbox label="吃饭"></Checkbox>
                            <Checkbox label="睡觉"></Checkbox>
                            <Checkbox label="跑步"></Checkbox>
                            <Checkbox label="看电影"></Checkbox>
                        </Checkbox-group>
                    </Form-item>
                    <Form-item label="介绍">
                        <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows:2,maxRows:3}" placeholder="请输入"></i-input>
                    </Form-item>
                    <Form-item>
                        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                        <Button>取消</Button>
                    </Form-item>
                </Form>
            </i-col>
        </Row>
    </div>
</template>
<script type="text/javascript">
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码最少六位', trigger: 'blur'}
                    ],
                },
                formItem: {
                    input: '',
                    select: 'beijing',
                    radio: 'female',
                    checkbox: ['吃饭', '睡觉'],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    mail: [
                        {required: true, message: '不能为空', trigger:'blur'},
                        {type:'email', message:'邮箱格式不正确', trigger:'blur'}
                    ],
                    city: [
                        {required: true, message: '不能为空', trigger:'change'}
                    ],
                    gender: [
                        {required: true, message: '不能为空', trigger:'change'}
                    ],
                    interest: [
                        {required: true, type: 'array', min: 1, message: '至少选一个', trigger:'blur'},
                        {type:'array', max: 2, message:'最多选择两个爱好', trigger:'change'}
                    ],
                    date: [
                        {required: true, type: 'date', message: '不能为空', trigger:'change'}
                    ],
                    time: [
                        {required: true, type: 'date', message: '不能为空', trigger:'change'}
                    ],
                    desc: [
                        {required: true, message: '不能为空', trigger:'blur'},
                        {type:'string', min: 20, message:'介绍不能少于20字', trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功')
                    } else {
                        this.$Message.error('验证失败')
                    }
                })
            }
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>