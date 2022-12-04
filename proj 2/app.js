// create method
const app = Vue.createApp({
  data() {
    return {
      Title: "Hello World",
      Counter: 1,
      date: "2022/12/4",
    };
  },
  methods: {
    changetitle() {
      this.Title = document.querySelector("#app input.title").value;
    },
  },
});

// where app will work it will work in element that have app id
app.mount("#app");
