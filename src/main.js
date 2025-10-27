import { createApp } from "vue";
import App from "./App.vue";
import router from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

let app = createApp(App);
(app.config.globalProperties.$filters = {
    evaluarNumero(num) {
        if (num % 2 == 0) {
            return "<span style='color:green'>" + num + "</span>";
        } else {
            num = num * 3 + 1;
            return "<span style='color:red'>" + num + "</span>";
        }
    },
    getOperacion(num, multiplicador) {
        return num + " * " + multiplicador;
    },
    getResultado(num, multiplicador) {
        return num * multiplicador;
    },
}),
    app.use(router).mount("#app");
