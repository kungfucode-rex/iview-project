import Index from './views/index.vue'
import NavFirst from './views/navFirst.vue'
import NavSecond from './views/navSecond.vue'
import NavThird from './views/navThird.vue'
import MyCheckbox from './views/checkbox.vue'
import Switch from './views/switch.vue'
import Table from './views/table.vue'
import Select from './views/select.vue'
import Slider from './views/slider.vue'
import Datepicker from './views/datepicker.vue'
import Timepicker from './views/timepicker.vue'
import Cascader from './views/cascader.vue'

const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: Index,
        children: [
            {
                path: 'navFirst',
                component: NavFirst
            },
            {
                path: 'navSecond',
                component: NavSecond
            },
            {
                path: 'navThird',
                component: NavThird
            },
            {
                path: 'checkbox',
                component: MyCheckbox
            },
            {
                path: 'switch',
                component: Switch
            },
            {
                path: 'table',
                component: Table
            },
            {
                path: 'select',
                component: Select
            },
            {
                path: 'slider',
                component: Slider
            },
            {
                path: 'datepicker',
                component: Datepicker
            },
            {
                path: 'timepicker',
                component: Timepicker
            },
            {
                path: 'cascader',
                component: Cascader
            }
        ]
    }
];
export default routers;