import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import backGround from './components/backGround.vue'
import arrowButtonOrientRight from './components/arrowButtonOrientRight.vue'
import arrowButtonOrientLeft from './components/arrowButtonOrientLeft.vue'
import arrowButton1 from './components/arrowButton1.vue'
import arrowButton8 from './components/arrowButton8.vue'


const app = createApp(App)
app.use(Vant)
app.component("backGround", backGround)
app.component("arrowButtonOrientRight", arrowButtonOrientRight)
app.component("arrowButton1", arrowButton1)
app.component("arrowButtonOrientLeft", arrowButtonOrientLeft)
app.component("arrowButton8", arrowButton8)

app.mount('#app')