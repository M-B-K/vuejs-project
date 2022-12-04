# VueJs 3

## Add Vue to My project using CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VueJs 3</title>
  </head>
  <body>
    <script src="https://unpkg.com/vue@3.0.2"></script>
    <script src="app.js"></script>
  </body>
</html>
```

## Create Vue app

> index.html file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VueJs 3</title>
  </head>
  <body>
    <div id="app">
      <h1>{{template}}</h1>
    </div>

    <script src="https://unpkg.com/vue@3.0.2"></script>
    <script src="app.js"></script>
  </body>
</html>
```

> app.js file

```javascript
// create method
const app = Vue.createApp({
  template: "Hello World",
});

// where app will work it will work in element that have app id
app.mount("#app");
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>VueJs 3</title>
  </head>
  <body>
    <div id="app">
      <h1>{{ template }}</h1>
      <p>{{ projectNum }}</p>
      <p>{{ date }}</p>
    </div>
    <script src="https://unpkg.com/vue@3.0.2"></script>
    <script>
      // create method
      const app = Vue.createApp({
        data() {
          return {
            template: "Hello World",
            projectNum: 1,
            date: "2022/12/4",
          };
        },
      });
      // where app will work it will work in element that have app id
      app.mount("#app");
    </script>
  </body>
</html>
```

### Vue

#### onclick Event

> v-on:click = "do something or function Name" //OnClick Event

or

> @click= "do something or function Name" //OnClick Event

#### take input value and put it in some element

> v-model="..." //take input value and put it in some element

#### focusout Event

> v-focusout="....." // do something or function Name when focusout input field

or

> @focusout="....." // do something or function Name when focusout input field

#### On keyup enter Event

> v-on:keyup.enter="....." // do something or function Name when click enter

or

> @keyup.enter="....." // do something or function Name when click enter
