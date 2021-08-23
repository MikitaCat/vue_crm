import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/dateFilter";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize";
import "./registerServiceWorker";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.use(messagePlugin);

Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyA0OFoOm1mH3K7NDKv1Ent4xscSi62Ne04",
  authDomain: "vue-js--crm.firebaseapp.com",
  projectId: "vue-js--crm",
  storageBucket: "vue-js--crm.appspot.com",
  messagingSenderId: "370893718971",
  appId: "1:370893718971:web:564c9a9beba66420c3f09e",
  measurementId: "G-CT2EYEPKEZ",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
