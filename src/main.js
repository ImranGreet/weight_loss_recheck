import { createApp } from "vue";
import "./assets/style.css";
import router from "./router";
import { createPinia } from "pinia";
import "./scripts/authResources/axios";
import App from "./App.vue";
/*global compoents*/
import GlobalForm from "../src/components/Global/GlobalForm.vue";
/*global components*/


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faMagnifyingGlass,
  faGear,
  faMoon,
  faExpand,
  faCompress,
  faUser,
  faGlobe,
  faLock,
  faPowerOff,
  faComment,
  faCircleUser,
  faX,
  faTableCells,
  faBarsProgress,
  faUtensils,
  faUsers,
  faStapler,
  faImage,
  faTrash,
  faPenToSquare,
  faShield
  
} from '@fortawesome/free-solid-svg-icons';

import { faBell, faCreditCard,faNewspaper } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faServicestack
} from '@fortawesome/free-brands-svg-icons';
import axios from "axios";

/* add icons to the library */
library.add(
  faUserSecret,
  faBars,
  faMagnifyingGlass,
  faBell,
  faGear,
  faMoon,
  faExpand,
  faCompress,
  faUser,
  faGlobe,
  faLock,
  faPowerOff,
  faCreditCard,
  faComment,
  faCircleUser,
  faX,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faTableCells,
  faBarsProgress,
  faUtensils,
  faUsers,
  faNewspaper,
  faStapler,
  faImage,
  faServicestack,
  faTrash,
  faPenToSquare,
  faShield
);

const pinia = createPinia();

createApp(App)
.use(router)
.use(pinia)
.component("globalForm", GlobalForm)
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");