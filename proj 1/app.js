// create method
const app = Vue.createApp({
  data() {
    return {
      template: "Hello World",
      Counter: 1,
      date: "2022/12/4",
    };
  },
});

// where app will work it will work in element that have app id
app.mount("#app");
