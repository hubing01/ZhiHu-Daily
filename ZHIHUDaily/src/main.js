// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';
import MuseUI from 'muse-ui'
import './assets/css/font-awesome.min.css'
import 'mint-ui/lib/style.css'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false

Vue.use(MintUI);
Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
