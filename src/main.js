import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Header,
  Main,
  Aside,
  Button,
  Select,
  Row,
  Col,
  Container,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem
} from "element-ui";

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Container.name, Container)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
