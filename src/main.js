import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "./filters/dateFilter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader";
import "materialize-css/dist/js/materialize";
import "./registerServiceWorker";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.use(messagePlugin);

Vue.filter("date", dateFilter);

Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyDaeM2P3mEyGACTA05LfAj-GMwWBwgTNik",
  authDomain: "vue-trainee.firebaseapp.com",
  projectId: "vue-trainee",
  storageBucket: "vue-trainee.appspot.com",
  messagingSenderId: "267086211271",
  appId: "1:267086211271:web:833b1ab5bf5096cde176e2",
  measurementId: "G-5XWBMTFV7W",
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
