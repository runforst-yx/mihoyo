// 导入自己需要的组件
import {
    Button,
    Row,
    Col,
    Message,
    Image,
    Tabs,
    TabPane,
    Carousel,
    CarouselItem,
    Container,
    Aside,
} from 'element-ui'
const element = {
    // 这里的 install 方法表示在 main.js 中，如果使用 Vue.use() 方法的话，则该方法默认会调用 install 方法
    install: function (Vue) {
        Vue.use(Button)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Image)
        Vue.use(Tabs)
        Vue.use(TabPane)
        Vue.use(Carousel)
        Vue.use(CarouselItem)
        Vue.use(Container)
        Vue.use(Aside)
        Vue.prototype.$message = Message
    }
}
export default element