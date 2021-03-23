import Vue from 'vue'
import App from './App.vue'
var eventHub = new Vue()
const render = (data = {}) => {
  Vue.prototype.$speakData = data
  Vue.prototype.$eventHub = eventHub
  return new Vue({
    render: (h) => h(App)
  }).$mount(data.el || '#ispeak')
}

export { render }
