// create method
const app = Vue.createApp({
  data() {
    return {
      show: true,
      Title: "Hello World",
      Counter: 1,
      date: "2022/12/4",
    };
  },
  methods: {
    changetitle() {
      this.Title = document.querySelector("#app input.title").value;
      document.querySelector("#app input.title").value = " ";
    },
    toggleShowBox() {
      this.show = !this.show;
    },
  },
});

// where app will work it will work in element that have app id
app.mount("#app");
