import Vue from 'vue';
import App from './views/app.vue';

Vue.config.debug = true;

new Vue({
	el:'#app',
	components:{App}
})
