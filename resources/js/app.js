/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter) ; 
Vue.component('pagination',require('laravel-vue-pagination')); 
Vue.component('add-task',require('./components/AddTaskComponent.vue').default) ;



import  Home from './components/HomeComponent.vue'
import Task from  './components/TaskComponent.vue'
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const routes = [
    {
        path: '/home',
        component: Home 
    } , 
    {
        path: '/task',
        component: Task 
    }
] ; 

const  router  =  new VueRouter ({routes}) ;  

const app = new Vue({
    el: '#app',
    router: router
});
