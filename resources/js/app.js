import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';
import router from './router';
import App from './components/App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);

window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js').default;

require('bootstrap');

Vue.prototype.$http = axios.create();

window.Bus = new Vue({name: 'Bus'});

Vue.config.errorHandler = function (err, vm, info) {
    console.error(err);
};

new Vue({
    el: '#root',

    router,

    /**
     * The component's data.
     */
    data() {
        return {}
    },

    render: h => h(App),
});
