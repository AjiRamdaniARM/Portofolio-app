# React js Tailwindcss Setup Example

Setting up Tailwind with reactjs is really simple, just install Tailwind:

```sh
npm install tailwindcss postcss-cli postcss autoprefixer -D
```

We need to initialize Tailwind CSS by creating the default configurations. Type the command below in your terminal:

```
npx tailwind init tailwind.js --full
```

Then add it to your PostCSS config (use a separate `postcss.config.js` file):

```js
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
```

Next, create a CSS file for your Tailwind styles. We've stored in it `src/assets/tailwind.css` for this example:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Create `main.css` file at `src/assets/main.css`

Import our main.css file and delete `import './index.css';`

Finally, import that CSS file at the bottom of your main `index.js` component:

```
import './assets/main.css'
```

Your _index.js_ should look like this after the changes:

```import React from "react";
import ReactDOM from "react-dom";
import './assets/main.css';
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```

## Configure Your App To Build Your CSS

```
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

## Project setup

### Install dependences

```
npm install or npm i
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```
