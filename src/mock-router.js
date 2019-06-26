import Vue from "vue";
import VueResourceMocker from "vue-resource-mocker";

Vue.httpMocker = new VueResourceMocker();
Vue.use(Vue.httpMocker);

Vue.httpMocker.setRoutes({
  POST:{
    '/api/test/post': (request)=> {
        switch (request.body.toLowerCase().trim()) {
            case "true":
            case "yes":
            case "1":
              return true;
            case "false":
            case "no":
            case "0":
              return false;
            default:
              return "ERROR";
          }
    }
  }
  });