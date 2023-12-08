import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import backGround from './components/backGround.vue'
import arrowButtonOrientRight from './components/arrowButtonOrientRight.vue'
import arrowButtonOrientLeft from './components/arrowButtonOrientLeft.vue'
import arrowButton1 from './components/arrowButton1.vue'
import arrowButton2 from './components/arrowButton2.vue'
import arrowButton3 from './components/arrowButton3.vue'
import arrowButton4 from './components/arrowButton4.vue'
import arrowButton5 from './components/arrowButton5.vue'
import arrowButton6 from './components/arrowButton6.vue'
import arrowButton7 from './components/arrowButton7.vue'
import arrowButton8 from './components/arrowButton8.vue'
import router from './router.js'

const app = createApp(App)
app.use(Vant)
app.use(router)
app.component("backGround", backGround)
app.component("arrowButtonOrientRight", arrowButtonOrientRight)
app.component("arrowButtonOrientLeft", arrowButtonOrientLeft)
app.component("arrowButton1", arrowButton1)
app.component("arrowButton2", arrowButton2)
app.component("arrowButton3", arrowButton3)
app.component("arrowButton4", arrowButton4)
app.component("arrowButton5", arrowButton5)
app.component("arrowButton6", arrowButton6)
app.component("arrowButton7", arrowButton7)
app.component("arrowButton8", arrowButton8)

app.mount('#app')